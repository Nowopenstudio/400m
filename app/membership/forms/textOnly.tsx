
import React, { useEffect, useState, useContext } from "react";
import { Reveal } from "@/app/lib/util/reveal";
import { PortableText } from "next-sanity";
import {InputContext} from '../signup'
import Link from "next/link";





export default function TextOnly({copy}:any) {
  const contextInput = useContext<any>(InputContext);

  
  useEffect(()=>{
 
      contextInput.activeChange("break",'break')
  },[])


  return (
            <Reveal styleSet="w-full grid grid-cols-12"  key={`text-${contextInput.currPage}`} >      
             
             <div className="pt-[--bar] col-start-2 col-span-10 md:col-start-3 md:col-span-8 md:grid-cols-2 xl:col-start-4 xl:col-span-6 grid grid-cols-2 gap-[20px]">
                  
                  <div  className=" py-[10px] col-span-2 mb-[60px]">
                    <PortableText value={copy.intro}/>
                    
                  </div>
               
             </div>
            </Reveal>
  


);
}
