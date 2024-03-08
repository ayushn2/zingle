import React from 'react'
import { Button } from './ui/button'
import {User} from "@supabase/supabase-js"
import SignOut from './SignOut'

const ChatHeader = () => {

   

  return (<>
  <div className="h-20">
    <div className="p-5 border-b flex item-center justify-between">

      <div>
        <h1 className="text-xl font-bold">Zingle</h1>
        <div className="flex item-center gap-1">
          <div className="h-4 w-4 bg-green-500 rounded-full animate-pulse">

          </div>
          <h1 className="text-sm text-gray-400">2 online</h1>
        </div>
      </div>
      {/* {user?(
      <Button onClick={handleLoginWithGithub}>
        Logout
      </Button>):
      (
        <Button onClick={handleLoginWithGithub}>
        Login
        </Button>
      )}
      */}
      <SignOut/>

      
      
    </div>
  </div> 
  </>
    
  )
}

export default ChatHeader