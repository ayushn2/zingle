"use server"

import createSupabaseServerClient from "../supabse/server"

export default async function readUserSession(){
    const supabase = await createSupabaseServerClient()

    return supabase.auth.getSession()
}