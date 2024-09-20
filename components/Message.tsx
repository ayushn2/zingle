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
import { usernames } from '@/lib/constant'
import Image from 'next/image'

const Message = ({message}:{message:Imessage}) => {

    const user = useUser((state)=>state.user);
  return (
        <div className="flex gap-2">
                <div className="h-10 w-10 rounded-full flex items-center justify-center">
                    <Image className='rounded-full' src={`${usernames[message.users?.serial_number].image}`} alt='pfp' height={50} width={50}/>
                </div>
            <div className="flex-1">
                <div className="flex items-center justify-between">
                    <div className='flex items-center gap-4'>

                   
                     <h1 className="font-bold">
                        {usernames[message.users?.serial_number].username}
                    </h1>
                     <h1 className="text-sm text-gray-400">
                        {new Date(message.created_at).toDateString()}
                     </h1>

                     
                     {message.is_edit && (
                            <h1 className='text-sm text-red-300'>edited</h1>
                     )}
                     
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

