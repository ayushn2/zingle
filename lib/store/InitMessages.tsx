"use client"

import {User} from "@supabase/supabase-js"
import { useEffect,useRef } from "react";
import { useMessage } from "./messages";
import { Imessage } from "./messages";

export default function InitMessages({messages}:{messages:Imessage[]}){
    const initState = useRef(false);

    useEffect(()=>{
        if(!initState.current){
            useMessage.setState({messages});
        }
        initState.current = true;
    },[]);
    return <></>;
}


