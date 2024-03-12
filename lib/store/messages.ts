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
}

export const useMessage = create<MessageState>()((set)=>({
    messages:[],
}))