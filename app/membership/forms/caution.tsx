
'use client'
 
import React, { useEffect, useState, useContext } from "react";
import { Reveal } from "@/app/lib/util/reveal";
import { PortableText } from "next-sanity";
import {InputContext} from '../signup'
import Link from "next/link";





export default function Caution({form}:any) {
  const contextInput = useContext<any>(InputContext);
  const [pre, setPre]  = useState({})
  const [total,setTotal] = useState(0)

  const toggle = (e:any)=>{
    const curr = e.currentTarget.getAttribute('data-prelim')
    const preSet = pre
    if(preSet[`toggle${curr}`]){
    preSet[`toggle${curr}`] = false
    e.currentTarget.classList.remove('checked')
    const count = total-1
    contextInput.activeChange(null)
    
  }else{
    preSet[`toggle${curr}`] = true
    e.currentTarget.classList.add('checked')
    const count = total+1
    setTotal(count)
    if(total+1 >= 2){
      contextInput.activeChange({})
    }
    
  }

  }

  return (
            <Reveal styleSet="w-full grid grid-cols-12 ">      
           
                  <div className="col-start-2 col-span-10 sm:px-0 sm:col-start-2 sm:col-span-10 md:col-start-3 md:col-span-8 xl:col-start-4 xl:col-span-6 mb-[20px] md:mb-[20px]">
                    <PortableText value={form.intro}/>
                   <div className={`px-[20px] py-[10px] uppercase text-nav mt-[20px]`}>Disclaimer</div>
                  </div>
             
             <div className="col-start-2 col-span-10 sm:px-0 sm:col-start-2 sm:col-span-10 md:col-start-3 md:col-span-8 xl:col-start-4 xl:col-span-6 pb-[60px] md:pb-[100px] md">
              {form.map((item:any,i:any)=>{
                return(
                  <div  onClick={(e)=> toggle(e)} key={`prelim-${i}`} data-prelim={i} className={`pointer-events-auto relative py-[20px] px-[20px] col-span-2 ${pre['toggle'+i]?"checked text-[--black]":"text-gray-500"}`}>
                    <div className={`radial-dot bg-white rounded-full border border-[--black] absolute top-[25px] left-[-20px] w-[20px] h-[20px]`}/>
                    <PortableText value={item.single}/>
                  </div>
                )
              })}
             </div>
            </Reveal>
  


);
}
