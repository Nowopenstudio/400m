'use client'

import { animate, useMotionValue, motion } from "framer-motion";

import Image from "next/image";
import useMeasure from "react-use-measure";
import { useEffect, useState } from "react";
import { Reveal } from "../lib/util/reveal";
import { PortableText } from "next-sanity";


export default function Principles({content}:any) {

  

  
  return (
   
    
    <div className="col-start-4 col-span-6">
    {content?(
    content.map((item:any,i:any)=>{
        return(
        <PortableText key={`manifest-${i}`} value={item.content}/>
        )
    })
    ):('')}
</div>
  


);
}
