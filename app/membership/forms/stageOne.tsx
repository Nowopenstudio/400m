
import React, { useEffect, useState, useContext } from "react";
import { Reveal } from "@/app/lib/util/reveal";
import { PortableText } from "next-sanity";
import {InputContext} from '../signup'
import Link from "next/link";





export default function StageOne({single}:any) {
  const contextInput = useContext<any>(InputContext);

  
  useEffect(()=>{
    if(contextInput.answers[contextInput.currPage]){
      contextInput.activeChange(contextInput.answers[contextInput.currPage])
    }
  },[contextInput.currPage])


  return (
            <Reveal styleSet="w-full grid grid-cols-12"  key={`text-${contextInput.currPage}`} >      
             
             <div className="col-start-2 col-span-10 md:col-start-3 md:col-span-8 md:grid-cols-2 xl:col-start-4 xl:col-span-6 grid grid-cols-2 gap-[20px]">
           
                  <div  className=" py-[10px] col-span-2 mb-[60px]">
                    <PortableText value={single.content}/>
                    <textarea onChange={(e)=> contextInput.activeChange(e.target.value) } className="mt-[20px] border border-[--black] w-full rounded-[10px] p-[20px] min-h-[150px]" placeholder="..." defaultValue={contextInput.answers[contextInput.currPage]?(contextInput.answers[contextInput.currPage]):""}></textarea>
                  </div>
               
             </div>
            </Reveal>
  


);
}
