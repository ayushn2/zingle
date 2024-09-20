import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useTransition } from "react";
import { useToast } from "@/hooks/use-toast"


import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { Toast } from "@/components/ui/toast";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { signUpWithEmailAndPassword } from "../actions";

const FormSchema = z
	.object({
		email: z.string().email(),
		password: z.string().min(6, {
			message: "Password is required.",
		}),
		confirm: z.string().min(6, {
			message: "Password is required.",
		}),
	})
	.refine((data) => data.confirm === data.password, {
		message: "Password did not match",
		path: ["confirm"],
	});
export default function RegisterForm() {
	const { toast } = useToast()

    const [isPending,startTransition] = useTransition()

	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			email: "",
			password: "",
			confirm: "",
		},
	});

async function onSubmit(data: z.infer<typeof FormSchema>) {

    startTransition(async ()=>{
        const result =    await signUpWithEmailAndPassword(data);

        const {error} = JSON.parse(result)
    
        if(error?.message){
            toast({
                variant:"destructive",
                title: "You submitted the following values:",
                description: (
                    <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                        <code className="text-white">
                            {error.message}
                        </code>
                    </pre>
                ),
            });
        }else{
            toast({
                title: "You submitted the following values:",
                description: (
                    <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                        <code className="text-white">
                            Successfully registered
                        </code>
                    </pre>
                ),
            });
        }
    })
    


		
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="w-full space-y-6"
			>
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email</FormLabel>
							<FormControl>
								<Input
									placeholder="example@gmail.com"
									{...field}
									type="email"
									onChange={field.onChange}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="password"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Password</FormLabel>
							<FormControl>
								<Input
									placeholder="password"
									{...field}
									type="password"
									onChange={field.onChange}
								/>
							</FormControl>

							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="confirm"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Confirm Password</FormLabel>
							<FormControl>
								<Input
									placeholder="Confirm Password"
									{...field}
									type="password"
									onChange={field.onChange}
								/>
							</FormControl>

							<FormMessage />
						</FormItem>
					)}
				/>
				<Button  
				onClick={() => {
						toast({
						title: "Scheduled: Catch up",
						description: "Friday, February 10, 2023 at 5:57 PM",
						})
					}} type="submit" className="w-full flex gap-2">
					Register
					<AiOutlineLoading3Quarters className={cn("animate-spin",{"hidden":!isPending})} />
				</Button>
			</form>
		</Form>
	);
}
