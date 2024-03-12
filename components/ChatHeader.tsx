import React from 'react'
import { Button } from './ui/button'
import {User} from "@supabase/supabase-js"
import SignOut from './SignOut'
import readUserSession from '@/lib/actions'
import SignIn from './SignIn'

const ChatHeader = async () => {

  const {data} = await readUserSession();

  return (<>
  <div className="h-20">
    <div className="p-5 border-b flex item-center justify-between h-full">

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
      {/* {data.session?(<SignOut/>):(<SignIn/>)} */}
      <SignOut/>

      
      
    </div>
  </div> 
  </>
    
  )
}

export default ChatHeader