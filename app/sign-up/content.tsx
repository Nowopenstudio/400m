'use client'

import { animate, useMotionValue, motion } from "framer-motion";

import Image from "next/image";
import useMeasure from "react-use-measure";
import React, { useEffect, useState } from "react";
import { Reveal } from "../lib/util/reveal";
import { PortableText } from "next-sanity";
import Portfolio from "./portfolio";
import SignUp from "./signup";



export default function Content({preface,form,prod,settings,design}:any) {
    const [sec, setSec] = useState(0)
    const [signup, setSign] = useState(0)

 const toggleSec =(sec:any)=>{
    setSec(sec);

  }
  return (
   
    
            <React.Fragment >
                <div className={`text-nav w-full fixed h-[var(--bar)] col-span-full grid grid-cols-12 top-[var(--bar)] py-[8px] z-50 toggle-button ${sec==0?"":"toggle-right"} pointer-events-auto px-[10px] md:pr-[0]`}>
                    <div className="relative z-0 bg-white h-full flex border border-black col-span-11 col-start-2 md:col-span-8 md:col-start-3 xl:col-span-4 xl:col-start-5 justify-between uppercase rounded-full items-center text-center">
                        <div className="toggle-bar absolute h-full w-1/2 rounded-full bg-[var(--black)]"></div>
                        <div className={`relative toggle-opt w-[50%] ${sec==0?"text-[--white]":"text-[--black]"}`} onClick={() => setSec(0)}>Productions</div>
                        <div className={`relative toggle-opt w-[50%] text-[${sec==1?"--white":"--black"}]`} onClick={() => setSec(1)}>D+D</div>

                    </div>
                </div>
                {signup==0?(
                     <div className="w-full grid grid-cols-12 col-span-full">
                        {sec==0?(
                            <Reveal styleSet="portfolio relative col-span-full" key={`sec-${sec}`}>
                             <Portfolio work={prod}/>
                         </Reveal>
                        ):(
                             <Reveal styleSet="portfolio relative col-span-full">
                             <Portfolio work={design}/>
                         </Reveal>
                        )}
                       
                        <div className="col-start-2 col-span-10 px-[20px] sm:px-0 sm:col-start-2 sm:col-span-10 md:col-start-3 md:col-span-8 xl:col-start-4 xl:col-span-6 pt-[60px]">
                            {preface.content.map((item:any, i:any)=>{
                                return(
                                    <PortableText key={`item-${i}`} value={item.content}/>
                                )
                            })}

                          
                            
                        </div>
                        <div className="fixed w-[100vw] py-[8px] bottom-[--bar] grid grid-cols-12 px-[20px] md:px-0"><div className={`col-span-12 col-start-1 md:col-span-8 md:col-start-3 xl:col-span-4 xl:col-start-5  py-[10px] bg-[--black] text-white uppercase relative border border-black text-nav text-center rounded-full`} onClick={() => setSign(1)}>{`Apply to 400m: ${sec==0?"Production":"D+D"}`}</div></div>

                        

                 </div>
                ):(
                    
                    <SignUp form={form} sec={sec} contact={settings.contacts[0].email}/>
                )}
               
            </React.Fragment>
  


);
}
