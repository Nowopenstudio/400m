'use client'

import { animate, useMotionValue, motion } from "framer-motion";

import Image from "next/image";
import useMeasure from "react-use-measure";
import React, { useEffect, useState } from "react";
import { Reveal } from "../lib/util/reveal";
import { PortableText } from "next-sanity";


export default function Portfolio({work}:any) {
  console.log(work)
    let [ref, {width}] = useMeasure();
const xTranslation = useMotionValue(0)
useEffect(()=>{
    let controls
    let finalPos = -width / 2;
  
  
    controls = animate(xTranslation, [0, finalPos],{
      ease:'linear', duration:20, repeat:Infinity, repeatType:'loop', repeatDelay:0
    })
  
    return controls.stop;
  }, [xTranslation, width])

  
  return (
   
    
<React.Fragment>
                        <div className="buffHold w-1/4 opacity-0 pointer-events-none relative">
                            <div className="projHold p-[10px] grid grid-cols-[1fr_5fr] items-center">
                                <Image alt="image" height={0}  width={0} sizes="100vw"  src={work[0].logoUrl}  className="w-full object-fill "/>
                                <div className="py-[10px] pl-[10px] text-sm">
                                <h2 className="mb-[10px]">{work[0].title}</h2>
                                <PortableText value={work[0].desc}/>
                                </div>
                            </div>
                            <div className="buff w-full"></div>
                        </div>  
  
          <motion.div  className="absolute flex left-0 top-0 items-center " ref={ref} style={{x:xTranslation}}>
               {[...work, ...work, ...work].map((item,i)=>{
                 return(
                   <div  className="relative overflow-hidden w-[25vw] border border-black" key={`orgs-${i}`}>
                    <div className="projHold p-[10px] grid grid-cols-[1fr_5fr] items-center">
                    <Image alt="image" height={0}  width={0} sizes="100vw"  src={item.logoUrl}  className="w-full object-fill "/>
                    <div className="py-[10px] pl-[10px] text-sm">
                      <h2 className="mb-[10px] uppercase">{item.title}</h2>
                      <PortableText value={item.desc}/>
                    </div>
                    </div><div className="w-full"><Image alt="image" height={0}  width={0} sizes="100vw"  src={item.images[0].imageUrl}  className="w-full object-fill"/></div></div>
                 )
               })}
             
          
           </motion.div>
      
</React.Fragment>


);
}
