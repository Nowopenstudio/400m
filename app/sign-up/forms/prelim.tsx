
import React, { useEffect, useState } from "react";
import { Reveal } from "@/app/lib/util/reveal";
import { PortableText } from "next-sanity";
import Link from "next/link";





export default function Prelim({form}:any) {
    console.log('prolim', form)

  return (
            <Reveal styleSet="w-full grid grid-cols-12">      
           
                 {form.intro?(
                   <div className="col-start-4 col-span-6 mb-[60px]">
                  <PortableText value={form.intro}/>
                  <Link href="/contact"><div className={`px-[20px] py-[10px] bg-gray-100 rounded-full uppercase text-nav mt-[20px]`}>Contact Form</div></Link>
                  </div>
                 ):('')}
             
             <div className="col-start-3 col-span-8 grid grid-cols-2 gap-[20px]">
              {form.single.map((item,i)=>{
                return(
                  <div className="uppercase py-[10px] px-[10px] col-span-1 border border-[--black] rounded-full text-nav">
                    <PortableText value={item.content}/>
                  </div>
                )
              })}
             </div>
            </Reveal>
  


);
}
