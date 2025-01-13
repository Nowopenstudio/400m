"use client"

// import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Logo, Members, Contact } from './svg/400m';






export default function Navbar({phase, setPhase}:any){



    
    return(
        <div className={` uppercase w-[100vw] h-[100vh] fixed z-[50]  overflow-hidden phase-${phase} pointer-events-none`}>
           <Link onClick={() => setPhase(1)} href="/info/manifesto"> <div className={`nav-item nav-one w-full bg-white border-black border border-y h-[auto] `}> <div className={`h-[var(--bar)] w-[--bar]  py-[8px] px-[8px]`}><Logo className="logo absolute" fill={`#232323`} width={30} height={30} /> </div></div></Link>
           {phase==1?(
                <div className="pointer-events-auto absolute h-[--bar] top-0 right-0 z-[51] p-[8px] text-nav flex justify-end items-center gap-[--sm]">
                    <Link href="/info/manifesto">Info</Link>
                    <Link href="/membership/productions">Membership</Link>
                    <Link href="/contact">contact</Link>
                </div>
                
           ):('')}
           
        </div>
    
    );
}