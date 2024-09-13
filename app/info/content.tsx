'use client'

import { animate, useMotionValue, motion } from "framer-motion";

import Image from "next/image";
import useMeasure from "react-use-measure";
import { useEffect, useState } from "react";
import { Reveal } from "../lib/util/reveal";
import { PortableText } from "next-sanity";
import Manifesto from "./manifesto";
import Principles from "./principles";


export default function Contents({content}:any) {
    const [sec, setSec] = useState(0)
  

  
  return (
   
    
            <div className="fullWidth">
                        <div className={`w-full fixed h-[var(--bar)] grid grid-cols-12 top-0 py-[8px] z-50 toggle-button ${sec==0?"":"toggle-right"}`}>
                        <div className="relative z-0 bg-white h-full flex border border-black col-span-4 col-start-5 justify-between text-sm uppercase rounded-full items-center text-center">
                        <div className="toggle-bar absolute h-full w-1/2 rounded-full bg-[var(--black)]"></div>
                        <div className={`relative toggle-opt w-[50%] ${sec==0?"text-[--white]":"text-[--black]"}`} onClick={() => setSec(0)}>Manifesto</div>
                        <div className={`relative toggle-opt w-[50%] text-[${sec==1?"--white":"--black"}]`} onClick={() => setSec(1)}>Principle</div>
    
                        </div>
                    </div>
                    <div className="grid grid-cols-12 w-full">
                        {sec==0?(
                            <Manifesto content={content.manifesto[0].content}/>
                        ):(
                            <Principles content={content.principles[0].content}/>
                        )}
                    </div>
            </div>
  


);
}
