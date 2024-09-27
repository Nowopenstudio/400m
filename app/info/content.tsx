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
                        <div className={`text-nav w-full fixed h-[var(--bar)] grid grid-cols-12 top-0 py-[8px] z-50 toggle-button ${sec==0?"":"toggle-right"} pointer-events-auto px-[10px] md:pr-[0]`}>
                            <div className="relative z-0 bg-white h-full flex border border-black col-span-11 col-start-2 md:col-span-8 md:col-start-3 xl:col-span-4 xl:col-start-5 justify-between uppercase rounded-full items-center text-center">
                                <div className="toggle-bar absolute h-full w-1/2 rounded-full bg-[var(--black)]"></div>
                                <div className={`pt-[2px] relative toggle-opt w-[50%] ${sec==0?"text-[--white]":"text-[--black]"}`} onClick={() => setSec(0)}>Manifesto</div>
                                <div className={`pt-[2px] relative toggle-opt w-[50%] text-[${sec==1?"--white":"--black"}]`} onClick={() => setSec(1)}>Principles</div>
            
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
