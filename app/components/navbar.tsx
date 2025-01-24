"use client"

// import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Logo, Members, Contact } from './svg/400m';
import { useState } from 'react';
import useResize from '../lib/util/useResize';






export default function Navbar({phase, setPhase}:any){
    const [hover, setHover] = useState(false)
    const [active, setActive] = useState(false)
    const {winX, winY, mobile} = useResize();


    const toggleMenu =()=>{
        setActive(!active)
        
    }

    const closeMenu =()=>{
        setActive(false)
        
    }

    const setEnter =()=>{
        setHover(true)
        }

        const setExit =()=>{
            setHover(false)
        }
    
    return(
        <div className={` uppercase w-[100vw] h-[100vh] fixed z-[50]  overflow-hidden phase-${phase} pointer-events-none`}>
           <Link onClick={() => setPhase(1)} className="z-[60] relative w-full h-full" href="/info/manifesto"> <div className={`nav-item nav-one w-full`}> <div className={`h-[var(--bar)] w-[--bar]  py-[8px] px-[8px]`}><Logo className="logo absolute top-0 left-0 pointer-events-auto" fill={`#232323`} width={30} height={30} /> </div></div></Link>
           {phase==1?(
    
                      mobile?(
                        
                            <div onClick={()=>toggleMenu()} className={`cursor-pointer navBar border-black pointer-events-auto absolute w-[100vw] ${active?"active border-b":""} h-auto top-0 right-0 z-[51] py-[16px] text-nav flex justify-end items-end  flex-wrap`}>
                                < div className="w-full grid grid-cols-6">
                                    <div className="col-span-3 col-end-7 justify-end mb-[100px] pt-[100px]">
                                        <div className='mb-[20px]'>Info</div>
                                        <Link onClick={()=>closeMenu()} href="/info/manifesto"><div  className="pl-[10px] mb-[10px] py-[4px]  navItem">Manifesto</div></Link>
                                        <Link  onClick={()=>closeMenu()} href="/info/principles"><div  className="pl-[10px] mb-[10px] py-[4px]  navItem">Principles</div></Link>
                                        <Link  onClick={()=>closeMenu()} href="/info/structure"><div  className="pl-[10px] mb-[60px] py-[4px]  navItem">Structure</div></Link>
                                        
                                        <div className='mb-[20px]'>Membership</div>
                                        <Link  onClick={()=>closeMenu()} href="/membership/productions"><div  className="pl-[10px] mb-[4px] py-[10px]  navItem">Productions</div></Link>
                                        <Link  onClick={()=>closeMenu()} href="/membership/d-d"><div  className="pl-[10px] mb-[10px] py-[4px]  navItem">D+D</div></Link>
                                        <Link  onClick={()=>closeMenu()} href="/membership/jobs"><div  className="pl-[10px] mb-[60px] py-[4px]  navItem">Jobs</div></Link>
                                      
                                           
                                         <Link onClick={()=>closeMenu()} href="/contact">contact</Link>
                                        </div>
                                       
    
                                    </div>
                                 <div className="w-full ml-[30px] text-right pr-[16px] mb-100px">
                                    
                                    <div>{!active?"menu":"close"}</div>
                                   
                                </div>

                               </div> 
                            
                                    
                     
                      ):(
                        <div onClick={()=>setExit()} onMouseEnter={()=>setEnter()} onMouseLeave={()=>setExit()} className={`navBar border-black pointer-events-auto absolute w-[100vw] h-auto top-0 right-0 z-[51] py-[16px] text-nav flex justify-end items-end  ${hover?"active border-y border":""}`}>
                    <div className="w-[132px]">
                        <Link href="/info/manifesto"><div  className="pl-[10px] mb-[4px] py-[4px]  navItem">Manifesto</div></Link>
                        <Link  href="/info/principles"><div  className="pl-[10px] mb-[4px] py-[4px]  navItem">Principles</div></Link>
                        <Link  href="/info/structure"><div  className="pl-[10px] mb-[30px] py-[4px]  navItem">Structure</div></Link>
                        <div>Info</div>
                        </div>
                        <div className="w-[132px]">
                        <Link  href="/membership/productions"><div  className="pl-[10px] mb-[4px] py-[4px]  navItem">Productions</div></Link>
                        <Link  href="/membership/d-d"><div  className="pl-[10px] mb-[4px] py-[4px]  navItem">D+D</div></Link>
                        <Link  href="/membership/jobs"><div  className="pl-[10px] mb-[30px] py-[4px]  navItem">Jobs</div></Link>
                        <div>Membership</div>
                            </div>
                        <div className="w-[120px] ml-[30px] text-right pr-[16px]"><Link href="/contact">contact</Link></div>
                </div>
               )
               
                
           ):('')}
           
        </div>
    
    );
}