import createSupabaseServerClient from "@/lib/supabse/server";
import { redirect } from "next/navigation";
import { Button } from "./ui/button";
import readUserSession from "@/lib/actions";

 export default function SignIn(){
    
    const logIn = async ()=>{
        "use server";
        
            return redirect("/auth-server-action")
        
        // redirect("/auth-server-action");
    };

    return(
        <form action={logIn}>
            <Button>SignIn</Button>
        </form>
    )
 }