"use client"

import {User} from "@supabase/supabase-js"
import { useEffect,useRef } from "react";
import { useMessage } from "./messages";
import { Imessage } from "./messages";
import { LIMIT_MESSAGE } from "../constant";

export default function InitMessages({messages}:{messages:Imessage[]}){
    const initState = useRef(false);

    const hasMore = messages.length >= LIMIT_MESSAGE;

    useEffect(()=>{
        if(!initState.current){
            useMessage.setState({messages,hasMore});
        }
        initState.current = true;
    },[]);
    return <></>;
}


