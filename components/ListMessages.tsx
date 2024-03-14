"use client"

import { useMessage } from "@/lib/store/messages"
import Message from "./Message"
import { DeleteAlert } from "./MessageActions"

const ListMessages = () => {

  const messages = useMessage((state)=>state.messages)

  return (
    <div className="flex-1 flex flex-col p-5 h-full overflow-y-auto">
              <div className="flex-1">
    
              </div>
              <div className="space-y-7">
                {messages.map((value,index)=>{
                  return (
                   <Message key={index} message={value}/>
                  )
                })}
                
              </div>
              <DeleteAlert/>
            </div>
  )
}

export default ListMessages