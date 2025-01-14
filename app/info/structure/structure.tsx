
'use client'

import { PortableText } from "next-sanity";
import { Reveal } from "../../lib/util/reveal";
import { Image } from "next-sanity/image";

export default function Structure({sections}:any) {



  return (
   
    

    
  <div className="grid grid-cols-12 w-full">
      {sections.map((item:any,i:any)=>{
        return(
        item.contentType === "text"?(
          <div key={`text-${i}`}className="col-start-2 col-span-10 sm:px-0 sm:col-start-2 sm:col-span-10 md:col-start-3 md:col-span-8 xl:col-start-4 xl:col-span-6 mb-[40px] md:mb-[100px] md:mb-[60px]">
          <PortableText value={item.text}/>
          </div>
        ):(
          <div key={`img-${i}`} className="col-span-12  mb-[40px]">
          <Image alt="image" height={0}  width={0} sizes="100vw"  src={item.cover}  className="w-full object-fill"/>
          </div>
        )
      )
      })}
    
    
 
  </div>
 
    
  

  );
}
