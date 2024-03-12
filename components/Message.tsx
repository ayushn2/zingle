import React from 'react'
import { Imessage } from '@/lib/store/messages'

const Message = ({message}:{message:Imessage}) => {
  return (
        <div className="flex gap-2">
                <div className="h-10 w-10 bg-green-500 rounded-full"></div>
            <div className="flex-1">
                <div className="flex items-center gap-1">
                     <h1 className="font-bold">
                        {message.users?.id}
                    </h1>
                     <h1 className="text-sm text-gray-400">
                        {new Date(message.created_at).toDateString()}
                     </h1>
                </div>
                <p className="text-gray-300">
                    {message.text}
                </p>
            </div>
        </div>
  )
}

export default Message