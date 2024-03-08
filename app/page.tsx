import Image from "next/image";
import { Button } from "@/components/ui/button";
import ChatHeader from "@/components/ChatHeader";

import { SupabaseAuthClient } from "@supabase/supabase-js/dist/module/lib/SupabaseAuthClient";



import readUserSession from "@/lib/actions";
import { redirect } from "next/navigation";

export default async function Page() {

  const {data} = await readUserSession();

  if(!data.session){
    return redirect("/auth-server-action")
  }

  return (
    <div className="max-w-3xl mx-auto md:py:10 h-scream">
      <div className="h-full border rounded-md">
        <ChatHeader />
        
      </div>
    </div>
  );
}
