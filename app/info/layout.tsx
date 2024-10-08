'use client'


import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { scrollToPos } from "../lib/util/sanity";


export default function RootLayout({
    children
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    const pageID = usePathname();
    const [sec, setSec] = useState(0)
  
    const toggleSec =(sec:any)=>{
        setSec(sec);
       scrollToPos(0);
    
      }

      useEffect(()=>{
        if(pageID.includes('manifesto')){
          setSec(0)
        }else if(pageID.includes('principles')){
          setSec(1)
        }
    }, [pageID])

  
  return (
   
    <main className="w-[100vw] min-h-[100vh] pb-[200px] overflow-x-hidden">
       
                        <div className={`grid-cols-10 text-nav w-full fixed h-[var(--bar)] grid xs:grid-cols-12 top-0 py-[8px] z-50 toggle-button ${sec==0?"":"toggle-right"} pointer-events-auto px-[10px] md:pr-[0]`}>
                            <div className=" relative z-0 bg-white h-full flex border border-black col-span-11 col-start-2 md:col-span-8 md:col-start-3 xl:col-span-4 xl:col-start-5 justify-between uppercase rounded-full items-center text-center">
                                <div className="toggle-bar absolute h-full w-1/2 rounded-full bg-[var(--black)]"></div>
                                <Link href="/info/manifesto" className={`pt-[2px] relative toggle-opt w-[50%] ${sec==0?"text-[--white]":"text-[--black]"}`} onClick={() => toggleSec(0)}>Manifesto</Link>
                                <Link href="/info/principles" className={`pt-[2px] relative toggle-opt w-[50%] text-[${sec==1?"--white":"--black"}]`} onClick={() => toggleSec(1)}>Principles</Link>
            
                            </div>
                        </div>

                     
                    <div className="grid grid-cols-12 overflow-x-hidden">
                        {children}
                    </div>
          
          
    </main>
           
  


);
}
