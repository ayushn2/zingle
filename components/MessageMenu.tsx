import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { MoreHorizontal } from 'lucide-react'
import { Imessage, useMessage } from '@/lib/store/messages'


const MessageMenu = ({message}:{message:Imessage}) => {

    const setActionMessage = useMessage((state)=>state.setActionMessage)

    return (
        <DropdownMenu>
        
            <DropdownMenuTrigger>
                <MoreHorizontal/>
            </DropdownMenuTrigger>

            <DropdownMenuContent>
                <DropdownMenuLabel>Action</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem 
                onClick={()=>{
                    document.getElementById("trigger-edit")?.click();
                    setActionMessage(message);
                }}
                >
                    Edit
                </DropdownMenuItem>
                <DropdownMenuItem 
                className='text-red-600' 
                onClick={()=>{
                    document.getElementById("trigger-delete")?.click();
                    setActionMessage(message);
                }}>
                    Delete
                </DropdownMenuItem>  
            </DropdownMenuContent>
        </DropdownMenu>
  )
}

export default MessageMenu