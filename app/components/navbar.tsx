"use client"

// import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Logo, Members, Contact } from './svg/400m';
import { useState } from 'react';






export default function Navbar({phase, setPhase}:any){
    const [hover, setHover] = useState(false)


     
    const setEnter =()=>{
        setHover(true)

        }

        const setExit =()=>{
            setHover(false)
    
            }
    
    return(
        <div className={` uppercase w-[100vw] h-[100vh] fixed z-[50]  overflow-hidden phase-${phase} pointer-events-none`}>
           <Link onClick={() => setPhase(1)} className="z-[99] relative" href="/info/manifesto"> <div className={`nav-item nav-one w-full`}> <div className={`h-[var(--bar)] w-[--bar]  py-[8px] px-[8px]`}><Logo className="logo absolute pointer-events-auto" fill={`#232323`} width={30} height={30} /> </div></div></Link>
           {phase==1?(
                <div onClick={()=>setExit()} onMouseEnter={()=>setEnter()} onMouseLeave={()=>setExit()} className={`navBar border-black pointer-events-auto absolute w-[100vw] h-auto top-0 right-0 z-[51] py-[16px] text-nav flex justify-end items-end  ${hover?"active border-y border":""}`}>
                    <div className="w-[132px]">
                    <Link href="/info/manifesto"><div  className="mb-[4px] py-[4px]">Manifesto</div></Link>
                    <Link  href="/info/principles"><div  className="mb-[4px] py-[4px]">Principles</div></Link>
                    <Link  href="/info/structure"><div  className="mb-[30px] py-[4px]">Structure</div></Link>
                    <div>Info</div>
                    </div>
                    <div className="w-[132px]">
                    <Link  href="/membership/productions"><div  className="mb-[4px] py-[4px]">Production</div></Link>
                    <Link  href="/membership/d-d"><div  className="mb-[4px] py-[4px]">D+D</div></Link>
                    <Link  href="/membership/jobs"><div  className="mb-[30px] py-[4px]">Jobs</div></Link>
                    <div>Membership</div>
                        </div>
                    <div className="w-[120px] ml-[30px] text-right pr-[16px]"><Link href="/contact">contact</Link></div>
                </div>
                
           ):('')}
           
        </div>
    
    );
}