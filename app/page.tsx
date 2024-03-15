import Image from "next/image";
import { Button } from "@/components/ui/button";
import ChatHeader from "@/components/ChatHeader";

import { SupabaseAuthClient } from "@supabase/supabase-js/dist/module/lib/SupabaseAuthClient";



import readUserSession from "@/lib/actions";
import { redirect } from "next/navigation";
import ChatInput from "@/components/ChatInput";
import ListMessages from "@/components/ListMessages";
import ChatMessages from "@/components/ChatMessages";
import InitUser from "@/lib/store/InitUser";


export default async function Page() {

  const {data} = await readUserSession();

  if(!data.session){
    return redirect("/auth-server-action")
  }


  return (
    <div className="max-w-3xl mx-auto md:py:10 h-screen">
      <div className="h-full border rounded-md flex flex-col relative">
        <ChatHeader />
        <ChatMessages/>
       <ChatInput/>
      </div>
      <InitUser user={data.session?.user} />
    </div>
  );
}
