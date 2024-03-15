import {User} from "@supabase/supabase-js"
import { boolean } from "zod";
import  {create} from "zustand";
import { LIMIT_MESSAGE } from "../constant";

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
    hasMore:boolean,
    page:number;
    messages:Imessage[];
    actionMessage:Imessage|undefined;
    optimisticIds:string[];
    addMessage:(message:Imessage)=>void;
    setActionMessage:(message:Imessage|undefined)=>void;
    optimisticDeleteMessage:(messageId:string)=>void;
    optimisticUpdateMessage:(message:Imessage)=>void;
    setOptimisticIds:(id:string)=>void;
    setMessages:(messages:Imessage[])=>void;
}

export const useMessage = create<MessageState>()((set)=>({
    hasMore:true,
    page:1,
    messages:[],
    optimisticIds:[],
    actionMessage:undefined,
    setOptimisticIds:(id:string)=>set((state)=>({optimisticIds:[...state.optimisticIds],id})),
    setMessages:(messages)=>
    set((state)=>
    ({
        messages:[...state.messages,...state.messages],
        page:state.page + 1,
        hasMore:messages.length>=LIMIT_MESSAGE,
    })),
    addMessage:(newMessage)=>
        set((state)=>
        ({
            messages:[...state.messages,newMessage]
        })),
    setActionMessage:(message)=>set(()=>({actionMessage:message })),
    optimisticDeleteMessage:(messageId)=>
    set((state)=>{
        return {
                messages:state.messages.filter(
                (message)=>message.id !== messageId
            ),
        };
    }),
    optimisticUpdateMessage:(updateMessage)=>
    set((state)=>{
        return {
                messages:state.messages.filter(
                (message)=>{
                    if(message.id === updateMessage.id){
                        (message.text = updateMessage.text),
                        (message.is_edit = updateMessage.is_edit);
                    }
                    return message;
                }
            ),
        };
    }),
    
   
}));