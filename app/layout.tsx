"use client"

import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navbar";
import { useState,useEffect } from "react";
import { usePathname } from 'next/navigation';
import SmoothScrolling from "./components/SmoothScrolling";


const metadata: Metadata = {
  title: {
    template: '%s | 400m',
    default: '400m',
  },
};




export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {

  const pageID = usePathname();
  const [phase, setPhase] = useState<number>(0)


  useEffect(()=>{
    if(pageID.includes('apples')){
      setPhase(1)
    }
    else if(pageID.includes('info')){
      setPhase(1)
    }else if(pageID.includes('structure')){
      setPhase(1)
    }else if(pageID.includes('membership')){
      setPhase(1)
    }else if(pageID.includes('contact')){
      setPhase(1)
    }else if(pageID.includes('applications')){
      setPhase(1)
    }else{
      setPhase(0)
    }
}, [pageID])

        return (
    <html lang="en">
      <body>
      <SmoothScrolling>
 
        <Navbar phase={phase} setPhase={setPhase}/>
        
            
        
        {children}
        </SmoothScrolling>
          </body>
    </html>
  );
}



