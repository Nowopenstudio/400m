'use client'

import React, { useState,FormEvent } from "react";
import Link from "next/link";
import { Reveal } from "@/app/lib/util/reveal";
import { PortableText } from "next-sanity";
import Prelim from "./prelim";
import Single from "./single";



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
              <Single item={item}  quest={quest} key={`info${item.firstName}-${i}`}/> 
             )
            })
          
          )}
                    
  
          
   </React.Fragment>
      
       
 
  );
}
