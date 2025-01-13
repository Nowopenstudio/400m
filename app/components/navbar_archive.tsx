"use client"

// import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Logo, Members, Contact } from './svg/400m';






export default function Navbar({phase, setPhase}:any){



    
    return(
        <div className={` uppercase w-[100vw] h-[100vh] fixed z-50 pointer-events-none overflow-hidden phase-${phase}`}>
           <Link onClick={() => setPhase(1)} href="/info/manifesto"> <div className={`nav-item nav-one w-full border-black border border-y h-[auto] ${phase==1?"pointer-events-none":"pointer-events-auto"}`}> <div className={`h-[var(--bar)] w-full ${phase==1?"":"bg-white"} py-[8px] px-[8px]`}><Logo className="logo absolute" fill={`#232323`} width={30} height={30} /> </div></div></Link>
            <Link onClick={() => setPhase(2)} href="/structure"><div className={`nav-item nav-two w-full border-black border border-y h-[auto] ${phase==2?"selected pointer-events-none":"pointer-events-auto"}`}><div className={`text-nav py-[15px] h-[var(--bar)] w-full ${phase==2?"":"bg-white"} px-[8px]`}><p className="nav-des">Structure</p></div> </div></Link>
            <Link onClick={() => setPhase(3)} href="/membership/productions"><div className={`nav-item nav-three w-full border-black border border-y h-[auto] ${phase==3?"pointer-events-none selected":"pointer-events-auto"}`}> <div className={`h-[var(--bar)] w-full ${phase==3?"":"bg-white"} text-nav py-[15px] px-[8px]`}><p className="nav-des">Membership</p></div> </div></Link>
            <Link onClick={() => setPhase(4)} href="/contact"><div className={`nav-item nav-four w-full border-black border border-y h-[auto] ${phase==4?"pointer-events-none selected":"pointer-events-auto"}`}> <div className="h-[var(--bar)] w-full bg-white text-nav py-[15px] px-[8px]"><p className="nav-des">Contact</p></div> </div></Link>
        </div>
    
    );
}