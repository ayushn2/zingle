import React, { Suspense } from 'react'
import ListMessages from './ListMessages'
import createSupabaseServerClient from '@/lib/supabse/server'
import InitMessages from '@/lib/store/InitMessages';

const ChatMessages = async () => {

    const supabase  = await createSupabaseServerClient();
    const {data} = await supabase.from("messages").select("*,users(*)")

    

  return (
    <Suspense fallback={"loading..."}>
        <ListMessages/>
        <InitMessages messages={data || []}/>
    </Suspense>
       
    
  )
}

export default ChatMessages