'use client'

import React, { useState,FormEvent } from "react";
import Link from "next/link";
import { Reveal } from "@/app/lib/util/reveal";
import { PortableText } from "next-sanity";
import Prelim from "./prelim";



export default function Application({data,quest}:any) {
  const [active, setActive] = useState<boolean>(false)
  const [access, setAccess] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const submitForm=(e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    setIsLoading(true)
    const formData = new FormData(e.currentTarget);


    (formData.get('accessCode') == "vukta9-wijrob-rojZot")?setAccess(true):undefined
   

  }



  return (
   <React.Fragment>
          {!access?(
            <div className="grid w-full grid-cols-12 items-center justify-center grid-rows-3 ">
              <div className="col-start-1 col-span-12 px-[20px] sm:col-start-2 sm:col-span-10 md:col-start-3 md:col-span-8 xl:col-start-4 xl:col-span-6 grid-cols-2 grid row-start-2">
              <div className="text-nav uppercase col-span-full mb-[20px] text-center">Please Provide Access Code </div>
              <form onSubmit={submitForm} className={`grid grid-cols-2 col-span-full gap-[20px] ${isLoading?"opacity-[.25] pointer-events-none":""}`}>
               <input className="col-span-2 rounded-full border border-[--black] px-[20px] text-center" type="text"  name="accessCode" required></input>
               <button type="submit" className={`py-[10px] bg-[--black] text-white uppercase relative col-span-full border border-black text-nav text-center rounded-full mb-[20px]`}>Submit Inquiry</button>
              </form>
              </div>
            </div>
          ):(

            data.map((item:any,i:number)=>{
              return(
                <Reveal styleSet="resourceItem w-full cursor-pointer border-y border-black relative" key={`info${item.firstName}-${i}`}>
             
                <div  className={`w-full relative border-[--blue]  text-[--blue] px-[--sm]`}>
                  <div onClick={()=>setActive(!active)} className={` w-full grid grid-cols-12 items-center listResource ${active?"active":""}`}>
                    <div className=" col-span-full lg:col-span-3 py-[--sm] lg:py-[--sm] profileName  font-bold">
                      <p>{`${item.firstName} ${item.lastName}`}</p>
                    </div>
                    <div className="col-span-full lg:col-span-3 lg:py-[--sm] listResourceTitle relative underline uppercase text-sm">
                      {item.website?(
                         <a href={item.website}>website</a>
                      ):('')}
                     
                    </div>
    
                    <div className="col-span-full lg:col-span-3 py-0 lg:py-[--sm] listResourceTitle relative underline uppercase text-sm">
                      <a href={`mailto://${item.email}`}>{item.email}</a>
                    </div>
                    <div className="col-span-full lg:col-span-2 py-0 lg:py-[--sm] listResourceTitle relative underline uppercase">
                          <Prelim name={`${item.firstName}-${item.lastName}`} quest={quest} answer={JSON.parse(item.answers[0].answer)}/>
                    </div>
                    
                    <div className=" col-span-1 col-end-13 flex flex-end text-right right-[--sm] top-[--sm] lg:top-0 absolute lg:relative items-center">{active?(
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
                                  <p>{dots.answer}</p>
                                </div>
                               </div>
                               ):('')
                              
                        
                              )
                        })}
                  </div>
    
              </div>
             
              
            </Reveal>
              )
            })
          
          )}
                    
  
          
   </React.Fragment>
      
       
 
  );
}
