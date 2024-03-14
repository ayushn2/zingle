import React from 'react'
import { Imessage } from '@/lib/store/messages'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import MessageMenu from './MessageMenu'
import { useUser } from '@/lib/store/user'
  

const Message = ({message}:{message:Imessage}) => {

    const user = useUser((state)=>state.user);
  return (
        <div className="flex gap-2">
                <div className="h-10 w-10 bg-green-500 rounded-full"></div>
            <div className="flex-1">
                <div className="flex items-center justify-between">
                    <div className='flex items-center gap-1'>

                   
                     <h1 className="font-bold">
                        {message.users?.id}
                    </h1>
                     <h1 className="text-sm text-gray-400">
                        {new Date(message.created_at).toDateString()}
                     </h1>
                     </div>
                     {message.users?.id === user?.id && <MessageMenu message={message}/>}
                     {/* display message menu only if the user of the message matches with the user signed in */}
                </div>
                <p className="text-gray-300">
                    {message.text}
                </p>
            </div>
        </div>
  )
}

export default Message

