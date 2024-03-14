import {User} from "@supabase/supabase-js"
import  {create} from "zustand";

export type Imessage= {
    created_at: string;
    id: string;
    is_edit: boolean | null;
    send_by: string;
    text: string | null;
    users: {
        created_at: string;
        email: string | null;
        id: string;
    } | null;
}//this is the type of a single message this is why we did not include array at the end

interface MessageState{
    messages:Imessage[];
    actionMessage:Imessage|undefined;
    addMessage:(message:Imessage)=>void;
    setActionMessage:(message:Imessage|undefined)=>void;
    optimisticDeleteMessage:(messageId:string)=>void;
}

export const useMessage = create<MessageState>()((set)=>({
    messages:[],
    actionMessage:undefined,
    addMessage:(message)=>set((state)=>({messages:[...state.messages,message]})),
    setActionMessage:(message)=>set(()=>({actionMessage:message })),
    optimisticDeleteMessage:(messageId)=>
    set((state)=>{
        return {
                messages:state.messages.filter(
                (message)=>message.id !== messageId
            ),
        };
    }),
   
}));