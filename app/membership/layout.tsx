'use client'
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { scrollToPos } from "../lib/util/sanity";
import { usePathname } from "next/navigation";



export default function RootLayout({
    children
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    const pageID = usePathname();
    const [sec, setSec] = useState(0)
    const [signup, setSign] = useState(0)

 const toggleSec =(sec:any)=>{
    setSec(sec);
    scrollToPos(0)

  }
  useEffect(()=>{
    if(pageID.includes('productions')){
      setSec(0)
      setSign(0)
    }else if(pageID.includes('d-d')){
      setSec(1)
      setSign(0)
    }else{
        setSign(1)
    }
}, [pageID])
  return (
   
    
            <React.Fragment >
                <div className={`text-nav w-full fixed h-[var(--bar)] col-span-full grid grid-cols-12 top-[calc(var(--bar)*2)] py-[8px] z-50 toggle-button ${sec==0?"":"toggle-right"} pointer-events-auto px-[10px] md:pr-[0]`}>
                    <div className="relative z-0 bg-white h-full flex border border-black col-span-12 col-start-1 md:col-span-8 md:col-start-3 xl:col-span-4 xl:col-start-5 justify-between uppercase rounded-full items-center text-center">
                        <div className="toggle-bar absolute h-full w-1/2 rounded-full bg-[var(--black)]"></div>
                        <Link href="/membership/productions" className={`relative toggle-opt w-[50%] ${sec==0?"text-[--white]":"text-[--black]"}`} onClick={() => toggleSec(0)}>Productions</Link>
                        <Link href="/membership/d-d" className={`relative toggle-opt w-[50%] text-[${sec==1?"--white":"--black"}] ${signup?"pointer-events-none opacity-50":""}`} onClick={() => toggleSec(1)}>D+D</Link>

                    </div>
                </div>
                {/* {signup==0?(
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
                       
                       {sec==0?(
                        <div className="col-start-2 col-span-10 px-[20px] sm:px-0 sm:col-start-2 sm:col-span-10 md:col-start-3 md:col-span-8 xl:col-start-4 xl:col-span-6 pt-[60px]">
                        {preface.content.map((item:any, i:any)=>{
                            return(
                                <PortableText key={`item-${i}`} value={item.content}/>
                            )
                        })}

                      
                        
                    </div>
                       ):(
                        <div className="col-start-2 col-span-10 px-[20px] sm:px-0 sm:col-start-2 sm:col-span-10 md:col-start-3 md:col-span-8 xl:col-start-4 xl:col-span-6 pt-[60px]">
                            {d_d.content.map((item:any, i:any)=>{
                                return(
                                    <PortableText key={`item-${i}`} value={item.content}/>
                                )
                            })}

                          
                            
                        </div>
                       )}
                        
                        <div className="fixed w-[100vw] py-[8px] bottom-[--bar] grid grid-cols-12 px-[10px] md:px-0"><div className={`col-span-12 col-start-1 md:col-span-8 md:col-start-3 xl:col-span-4 xl:col-start-5  py-[10px] uppercase relative border  text-nav text-center rounded-full ${sec==0?"pointer-events-auto bg-[--black]  text-white":"bg-gray-100 pointer-events-none text-[--black]"}`} onClick={() => setSign(1)}>{`${sec==0?"Apply to 400m: Production":"400M: D+D Coming soon"}`}</div></div>

                        

                 </div>
                ):(
                    
                    <SignUp form={form} sec={sec} contact={settings.contacts[0].email}/>
                )}
                */}
                    {children}

                    {signup === 0?(
                         <Link href="/membership/sign-up" className={`border-[--black] fixed w-[100vw] py-[8px] bottom-[--bar] grid grid-cols-12 px-[10px] md:px-0 ${sec==0?"pointer-events-auto":"pointer-events-none"}`}><div className={`border-[--black] col-span-12 col-start-1 md:col-span-8 md:col-start-3 xl:col-span-4 xl:col-start-5  py-[10px] uppercase relative border  text-nav text-center rounded-full ${sec==0?"pointer-events-auto bg-[--black]  text-white":"bg-gray-100 pointer-events-none text-[--black]"}`} onClick={() => setSign(1)}>{`${sec==0?"Apply to 400m: Production":"400M: D+D Coming soon"}`}</div></Link>
                    ):('')}
                   
            </React.Fragment>
  


);
}
