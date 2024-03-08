import createSupabaseServerClient from "@/lib/supabse/server";
import { redirect } from "next/navigation";
import { Button } from "./ui/button";

 export default function SignOut(){
    
    const logout = async ()=>{
        "use server";
        const supabase = await createSupabaseServerClient();
        await supabase.auth.signOut();
        redirect("/auth-server-action");
    };

    return(
        <form action={logout}>
            <Button>SignOut</Button>
        </form>
    )
 }