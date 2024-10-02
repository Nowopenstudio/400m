"use client"

import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navbar";
import {getData} from "./lib/util/sanity";
import { useState,useEffect } from "react";
import { usePathname } from 'next/navigation';



export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {

  const pageID = usePathname();
  const [phase, setPhase] = useState<number>(0)


  useEffect(()=>{
    if(pageID.includes('info')){
      setPhase(1)
    }else if(pageID.includes('sign')){
      setPhase(2)
    }else if(pageID.includes('contact')){
      setPhase(3)
    }
}, [])

        return (
    <html lang="en">
      <body>
    <div className='relative w-full'>
        <Navbar phase={phase} setPhase={setPhase}/>
  
          
        </div>
        {children}
          </body>
    </html>
  );
}
