'use client'

import React, { useState } from "react";
import Link from "next/link";
import { Reveal } from "../lib/util/reveal";
import { PortableText } from "next-sanity";
import Prelim from "./prelim";



export default function Application({data,quest}:any) {
  const [active, setActive] = useState(false)



  return (
   
       
            <Reveal styleSet="resourceItem w-full cursor-pointer border-y border-black relative" >
           
                <div  className={`w-full relative border-[--blue]  text-[--blue] px-[--sm]`}>
                  <div onClick={()=>setActive(!active)} className={` w-full grid grid-cols-12 items-center listResource ${active?"active":""}`}>
                    <div className=" col-span-full lg:col-span-3 py-[--sm] lg:py-[--sm] profileName  font-bold">
                      <p>{`${data.firstName} ${data.lastName}`}</p>
                    </div>
                    <div className="col-span-full lg:col-span-3 lg:py-[--sm] listResourceTitle relative underline uppercase">
                      <a href={data.website}>website</a>
                    </div>

                    <div className="col-span-full lg:col-span-3 py-0 lg:py-[--sm] listResourceTitle relative underline uppercase">
                      <a href={`mailto://${data.email}`}>{data.email}</a>
                    </div>
                    <div className="col-span-full lg:col-span-2 py-0 lg:py-[--sm] listResourceTitle relative underline uppercase">
                          <Prelim quest={quest} answer={JSON.parse(data.answers[0].answer)}/>
                    </div>
                    
                    <div className=" col-span-1 col-end-13 flex flex-end text-right">{active?(
                      <p className="w-full">-</p>
                    ):(
                     <p className="w-full">+</p>
                    )}</div>
                  </div>
                  <div className={`col-span-full resourceLinks ${active?"active":""} overflow-hidden`}>
                        {data.answers.map((item:any,i:number)=>{
                              return(
                               i>0?(
                                <div className="w-full mb-[50px]" key={`answer-${data.firstName}-${i}`}>
                                <div className="w-full md:w-3/4 font-bold mb-0"><PortableText value={item.quest}/></div>
                                <div className="w-full md:w-3/4">
                                  <p>{item.answer}</p>
                                </div>
                               </div>
                               ):('')
                              
                        
                              )
                        })}
                  </div>
  
              </div>
             
              
            </Reveal>
      
       
 
  );
}
