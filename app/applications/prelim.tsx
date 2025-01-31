'use client'

import React, { useState } from "react";
import Link from "next/link";
import { Reveal } from "../lib/util/reveal";
import { PortableText } from "next-sanity";



export default function Prelim({quest,answer,name}:any) {
  const [active, setActive] = useState(false)



  return (
   
       
           <div className="flex w-full h-full justify-between relative prelimHold">
              {quest.map((item:any,i:number)=>{
                  return(
                    <div key={`${name}-fullquest-${i}`} className={`dot w-[10px] h-[10px] rounded toggle${i} ${answer[`toggle${i}`]?"active":""}`}></div>
                  )
              })}

    <div className="absolute top-0 z-10 rounded-sm border-black border bg-white p-[--sm] opacity-0 prelimAnswer pointer-events-none">
          {quest.map((item:any,i:number)=>{
                    return(
                      <div className={` text-sm leading-[1.3rem] toggle${i} ${answer[`toggle${i}`]?"":"opacity-[.2]"}`} key={`${name}quest-${i}`}>
                       <PortableText value={item.content}/>
                      </div>
                    )
                })}
    </div>


           </div>
      
       
 
  );
}
