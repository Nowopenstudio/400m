
import React, { useEffect, useState } from "react";
import { Reveal } from "@/app/lib/util/reveal";
import { PortableText } from "next-sanity";
import Link from "next/link";





export default function StageOne({form}:any) {

  return (
            <Reveal styleSet="w-full grid grid-cols-12">      
           
                 {form.intro?(
                   <div className="col-start-4 col-span-6 mb-[60px]">
                  <PortableText value={form.intro}/>
                  <Link href="/contact"><div className={`px-[20px] py-[10px] bg-gray-100 rounded-full uppercase text-nav mt-[20px]`}>Contact Form</div></Link>
                  </div>
                 ):('')}
             
             <div className="col-start-4 col-span-6 grid grid-cols-2 gap-[20px]">
              {form.single.map((item:any,i:any)=>{
                return(
                  <div className=" py-[10px] col-span-2 mb-[60px]">
                    <PortableText value={item.content}/>
                    <textarea className="mt-[20px] border border-[--black] w-full rounded-[10px] p-[20px] min-h-[150px]" placeholder="..."></textarea>
                  </div>
                )
              })}
             </div>
            </Reveal>
  


);
}
