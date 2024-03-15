import React, { Suspense } from 'react'
import ListMessages from './ListMessages'
import createSupabaseServerClient from '@/lib/supabse/server'
import InitMessages from '@/lib/store/InitMessages';
import { LIMIT_MESSAGE } from '@/lib/constant';

const ChatMessages = async () => {

    const supabase  = await createSupabaseServerClient();
    const {data} = await supabase
    .from("messages")
    .select("*,users(*)")
    .range(0,LIMIT_MESSAGE)
    .order("created_at",{ascending:false});

    

  return (
    <Suspense fallback={"loading..."}>
        <ListMessages/>
        <InitMessages messages={data?.reverse() || []}/>
    </Suspense>
       
    
  )
}

export default ChatMessages