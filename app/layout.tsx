"use client"

import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navbar";
import {getData} from "./lib/util/sanity";
import { useState } from "react";



export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {


  const [phase, setPhase] = useState<number>(0)

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
