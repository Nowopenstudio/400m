
'use client'

import { PortableText } from "next-sanity";
import { Reveal } from "../../lib/util/reveal";
import { Image } from "next-sanity/image";
import Link from "next/link";

export default function Jobs({sections}:any) {



  return (
   
    

    
  <div className="grid grid-cols-12 w-full">
       <div className="px-[16px] col-start-1 col-span-12 sm:px-0 sm:col-start-2 sm:col-span-10 md:col-start-3 md:col-span-8 xl:col-start-4 xl:col-span-6"><div className={`text-center text-nav mb-[40px] border-[--black] border rounded-full uppercase w-full py-[8px] bottom-[--bar] px-[10px]`}>Co-op Openings</div></div>
      {sections.map((item:any,i:any)=>{
        return(
       
          <div key={`text-${i}`}className="px-[16px] sm:px-0 col-start-1 col-span-12 sm:px-0 sm:col-start-2 sm:col-span-10 md:col-start-3 md:col-span-8 xl:col-start-4 xl:col-span-6 mb-[40px]  pb-[40px] md:mb-[100px] border-b border-[--black]">
         
          {item.cover?(
               <div key={`img-${i}`} className="col-span-12  mb-[40px]">
            
               <Image alt="image" height={0}  width={0} sizes="100vw"  src={item.cover}  className="w-full object-fill"/>
               </div>
          ):('')}
       
          <h1>{item.title}</h1>
          <PortableText value={item.text}/>
          <Link href="/membership/sign-up" className={`border-[--black] w-full py-[8px] bottom-[--bar] grid grid-cols-12 md:px-0`}><div className={`border-[--black] col-span-12 col-start-1 py-[10px] uppercase relative border  text-nav text-center rounded-full pointer-events-auto bg-[--black]  text-white`} > Apply to 400m</div></Link>
          </div>


        
      )
      })}
    
    
 
  </div>
 
    
  

  );
}
