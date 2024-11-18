
'use client'
 
import React, { useEffect, useState, useContext } from "react";
import { Reveal } from "@/app/lib/util/reveal";
import { PortableText } from "next-sanity";
import {InputContext} from '../signup'
import Link from "next/link";





export default function Prelim({form}:any) {
  const contextInput = useContext<any>(InputContext);
  const [pre, setPre]  = useState(contextInput.answers[0]|| {})

  const toggle = (e:any)=>{
    const curr = e.currentTarget.getAttribute('data-prelim')
    const preSet = pre
    if(preSet[`toggle${curr}`]){
    preSet[`toggle${curr}`] = false
    e.currentTarget.classList.remove('active')
  }else{
    preSet[`toggle${curr}`] = true
    e.currentTarget.classList.add('active')
  }
    contextInput.activeChange(preSet)
    setPre(preSet)
  }


  return (
            <Reveal styleSet="w-full grid grid-cols-12">      
           
                 {form.intro?(
                   <div className="col-start-2 col-span-10  pt-[--bar] sm:px-0 sm:col-start-2 sm:col-span-10 md:col-start-3 md:col-span-8 xl:col-start-4 xl:col-span-6 mb-[40px] md:mb-[60px] lrg:mb-[40px]">
                  <PortableText value={form.intro}/>
                  <Link href="/contact"><div className={`px-[20px] py-[10px] bg-gray-100 rounded-full uppercase text-nav mt-[20px]`}>Contact Form</div></Link>
                  </div>
                 ):('')}
             
             <div className="col-start-2 col-span-10 pb-[100px] md:pb-[0] md:col-start-3 md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-[20px]">
              {form.single.map((item:any,i:any)=>{
                return(
                  <div  onClick={(e)=> toggle(e)} key={`prelim-${i}`} data-prelim={i} className={`formBut uppercase py-[10px] px-[10px] col-span-1 border border-[--black] rounded-full text-nav ${pre['toggle'+i]?"active":""}`}>
                    <PortableText value={item.content}/>
                  </div>
                )
              })}
             </div>
            </Reveal>
  


);
}
