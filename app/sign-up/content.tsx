'use client'

import { animate, useMotionValue, motion } from "framer-motion";

import Image from "next/image";
import useMeasure from "react-use-measure";
import React, { useEffect, useState } from "react";
import { Reveal } from "../lib/util/reveal";
import { PortableText } from "next-sanity";
import Portfolio from "./portfolio";
import SignUp from "./signup";



export default function Content({preface,form,prod}:any) {
    const [sec, setSec] = useState(0)
    const [signup, setSign] = useState(0)
  console.log('preface',preface)

 const toggleSec =(sec:any)=>{
    setSec(sec);

  }
  return (
   
    
            <React.Fragment >
                <div className={`text-nav w-full fixed h-[var(--bar)] grid grid-cols-12 top-[var(--bar)] py-[8px] z-50 toggle-button ${sec==0?"":"toggle-right"} pointer-events-auto`}>
                    <div className="relative z-0 bg-white h-full flex border border-black col-span-4 col-start-5 justify-between text-nav uppercase rounded-full items-center text-center">
                        <div className="toggle-bar absolute h-full w-1/2 rounded-full bg-[var(--black)]"></div>
                        <div className={`relative toggle-opt w-[50%] ${sec==0?"text-[--white]":"text-[--black]"}`} onClick={() => setSec(0)}>Production</div>
                        <div className={`relative toggle-opt w-[50%] text-[${sec==1?"--white":"--black"}]`} onClick={() => setSec(1)}>D+D</div>

                    </div>
                </div>
                {signup==0?(
                     <div className="w-full grid grid-cols-12">
                        <div className="portfolio relative col-span-full">
                            <Portfolio work={prod}/>
                        </div>
                        <div className="col-start-4 col-span-6 pt-[60px]">
                            {preface.content.map((item:any, i:any)=>{
                                return(
                                    <PortableText key={`item-${i}`} value={item.content}/>
                                )
                            })}
                                <div className={`mt-[80px] py-[10px] bg-[--black] text-white uppercase relative col-span-4 col-start-5 border border-black text-nav text-center rounded-full`} onClick={() => setSign(1)}>{`Apply to 400m: ${sec==0?"Production":"D+D"}`}</div>

                            
                        </div>
                        

                 </div>
                ):(
                    
                    <SignUp form={form} sec={sec}/>
                )}
               
            </React.Fragment>
  


);
}
