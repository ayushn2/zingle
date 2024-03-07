import Image from "next/image";
import { Button } from "@/components/ui/button";
import ChatHeader from "@/components/ChatHeader";
import { login } from "./login/actions";
import { signup } from "./login/actions";



export default async function Page() {


  return (
    <div className="max-w-3xl mx-auto md:py:10 h-scream">
      <div className="h-full border rounded-md">
        {/* <ChatHeader user={user}/> */}
        <form>
      <label htmlFor="email">Email:</label>
      <input id="email" name="email" type="email" required />
      <label htmlFor="password">Password:</label>
      <input id="password" name="password" type="password" required />
      <button formAction={login}>Log in</button>
      <button formAction={signup}>Sign up</button>
    </form>
      </div>
    </div>
  );
}
