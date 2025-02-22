
'use client'
 
import React, { useEffect, useState, useContext } from "react";
import { Reveal } from "@/app/lib/util/reveal";
import { PortableText } from "next-sanity";
import {InputContext} from '../signup'
import Link from "next/link";





export default function Caution({form, settings}:any) {
  const contextInput = useContext<any>(InputContext);
  const [total,setTotal] = useState(0)

  const toggle = (e:any)=>{
    const curr = e.currentTarget.getAttribute('data-prelim')
    if(e.currentTarget.classList.contains('checked')){
    e.currentTarget.classList.remove('checked')
    const count = total-1
    contextInput.activeChange(null)
    
  }else{
    e.currentTarget.classList.add('checked')
    const count = total+1
    setTotal(count)
    if(total+1 >= 2){
      contextInput.activeChange('break',{})
    }
    
  }

  }

  return (
            <Reveal styleSet="w-full grid grid-cols-12">      
           
                  <div className=" col-start-2 col-span-10 sm:px-0 sm:col-start-2 sm:col-span-10 md:col-start-3 md:col-span-8 xl:col-start-4 xl:col-span-6 mb-[10px] md:mb-[10px]">
                    <PortableText value={form.intro}/>
                   <div className={`px-[20px]  uppercase text-nav`}>Disclaimer</div>
                  </div>
            <div className="px-[--med] mt-[--sm] md:px-0 col-span-12 col-start-1 md:col-span-8 md:col-start-3 xl:col-span-6 xl:col-start-4 mb-[10px] grid grid-cols-3 gap-0 ">
            <Link scroll={true} href={`/info/manifesto`} className="px-[--med] mt-[--sm] md:px-0 col-span-3 col-start-1 ">
              <div className={`text-black uppercase text-center text-nav  py-[10px] bg-gray-100 rounded-full`}>View Manifesto</div>
               </Link>
               <Link scroll={true} href={`/info/principles`} className="px-[--med] mt-[--sm] md:px-0 col-span-full col-start-1 md:col-span-full ">
              <div className={` text-black uppercase text-center text-nav  py-[10px] bg-gray-100 rounded-full`}>View Principles</div>
               </Link>
              <a href={`${settings.code}/${settings.og}`} className="px-[--med] mt-[--sm] md:px-0 col-span-full cosl-start-1  ">
              <div className={` text-black uppercase text-center text-nav  py-[10px] bg-gray-100 rounded-full`}>View Code of Conduct</div>
               </a>
            </div>
             <div className="col-start-2 col-span-10 px-0 sm:col-start-2 sm:col-span-10 md:col-start-3 md:col-span-8 xl:col-start-4 xl:col-span-6 pb-[60px] md:pb-[100px] md">
              {form.map((item:any,i:any)=>{
                return(
                  <div  onClick={(e)=> toggle(e)} key={`prelim-${i}`} data-prelim={i} className={`cursor-pointer relative py-[20px] px-[20px] col-span-2 opacity-50`}>
                    <div className={`cursor-pointer pointer-events-auto z-10 radial-dot bg-white rounded-full border border-[--black] absolute top-[25px] left-[-20px] w-[20px] h-[20px]`}/>
                    <PortableText value={item.single}/>
                  </div>
                )
              })}
             
             </div>
             
            </Reveal>
  


);
}
