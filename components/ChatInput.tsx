"use client"

import { Input } from "@/components/ui/input";
import { supabaseBrowser } from "@/lib/supabse/client";
import {toast} from "sonner";

const ChatInput = () => {
    const supabase = supabaseBrowser();

    const handleSendMessage= async (text:string)=>{
      
        // call to supabase
        const {error} = await supabase.from("messages").insert({text})

        if(error){
            toast.error(error.message);
        }
    }

  return (
         <div className="p-5">
                  <Input placeholder="send message" onKeyDown={(e)=>{
                    if(e.key === "Enter"){
                        handleSendMessage(e.currentTarget.value)
                        e.currentTarget.value = "";
                    }
                  }}/>
        </div>

  )
}

export default ChatInput