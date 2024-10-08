'use client'

import { animate, useMotionValue, motion } from "framer-motion";

import Image from "next/image";
import useMeasure from "react-use-measure";
import { useEffect, useState } from "react";
import { Reveal } from "../lib/util/reveal";
import { PortableText } from "next-sanity";


export default function Manifesto({content}:any) {

  

  
  return (
    <Reveal styleSet="col-start-2 col-span-10 px-[20px] sm:px-0 sm:col-start-2 sm:col-span-10 md:col-start-3 md:col-span-8 xl:col-start-4 xl:col-span-6">
    {content?(
    content.map((item:any,i:any)=>{
        return(
        <PortableText key={`manifest-${i}`} value={item.content}/>
        )
    })
    ):('')}
</Reveal>
  

  


);
}
