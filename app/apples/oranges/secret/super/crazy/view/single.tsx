'use client'

import React, { useState,FormEvent } from "react";
import Link from "next/link";
import { Reveal } from "@/app/lib/util/reveal";
import { PortableText } from "next-sanity";
import Prelim from "./prelim";



export default function Single({item,quest}:any) {
  const [active, setActive] = useState<boolean>(false)
  const [access, setAccess] = useState<boolean>(false)



  return (
   <React.Fragment>
         
                <Reveal styleSet="resourceItem w-full cursor-pointer border-y border-black relative">
             
                <div  className={`w-full relative border-[--blue]  text-[--blue] px-[--sm]`}>
                  <div className={` w-full grid grid-cols-12 items-center listResource ${active?"active":""}`}>
                    <div onClick={()=>setActive(!active)}  className=" col-span-full lg:col-span-3 py-[--sm] lg:py-[--sm] profileName  font-bold">
                      <p>{`${item.firstName} ${item.lastName}`}</p>
                    </div>
                    <div className="col-span-full lg:col-span-3 lg:py-[--sm] listResourceTitle relative underline uppercase text-sm">
                      {item.website?(
                         <a target='_blank' href={item.website}>website</a>
                      ):('')}
                     
                    </div>
    
                    <div className="col-span-full lg:col-span-3 py-0 lg:py-[--sm] listResourceTitle relative underline uppercase text-sm">
                      <a href={`mailto://${item.email}`}>{item.email}</a>
                    </div>
                    <div className="col-span-full lg:col-span-2 py-0 lg:py-[--sm] listResourceTitle relative underline uppercase">
                          <Prelim name={`${item.firstName}-${item.lastName}`} quest={quest} answer={JSON.parse(item.answers[0].answer)}/>
                    </div>
                    
                    <div onClick={()=>setActive(!active)}  className=" col-span-1 col-end-13 flex flex-end text-right right-[--sm] top-[--sm] lg:top-0 absolute lg:relative items-center">{active?(
                      <h1 className="w-full inline-block mb-0">-</h1>
                    ):(
                     <h1 className="w-full inline-block mb-0">+</h1>
                    )}</div>
                  </div>
                  <div className={`col-span-full resourceLinks ${active?"active":""} overflow-hidden`}>
                        {item.answers.map((dots:any,d:number)=>{
                              return(
                               d>0?(
                                <div className="w-full mb-[50px]" key={`answer-${dots.firstName}-${d}`}>
                                <div className="w-full md:w-3/4 font-bold mb-0"><PortableText value={dots.quest}/></div>
                                <div className="w-full md:w-3/4">
                                  <p>{`${JSON.parse(dots.answer)}`}</p>
                                </div>
                               </div>
                               ):('')
                              
                        
                              )
                        })}
                  </div>
    
              </div>
             
              
            </Reveal>
       
                    
  
          
   </React.Fragment>
      
       
 
  );
}
