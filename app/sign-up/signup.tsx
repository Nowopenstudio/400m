'use client'

import React, { useEffect, useState } from "react";
import { Reveal } from "../lib/util/reveal";
import Prelim from "./forms/prelim";
import StageOne from "./forms/stageOne";
import StageTwo from "./forms/stageTwo";



export default function SignUp({form,sec}:any) {
    console.log(form)
    const [page, setPage] = useState(0)
    const [profile,setPro] = useState({})

    const step =(sec)=>{
       const curr = page + sec
       setPage(curr)
    
      }
  return (
   
    
    <div className="pt-[60px]">
                {page===0?(<Prelim form={form[0].section[0]}/>):('')}
                {page===1?(<StageOne form={form[0].section[1]}/>):('')}
                {page===2?(<StageTwo form={form[0].section[2]}/>):('')}

        <div className=" w-full grid-cols-12 grid mt-[20px]">
           <div className={`col-span-4 col-start-5 text-center text-nav uppercase grid grid-cols-[2fr_1fr_2fr]`}>
                {page==2?(
                     <div className={`py-[10px] bg-[--black] text-white uppercase relative col-span-full border border-black text-nav text-center rounded-full mb-[20px]`}>{`Submit Application`}</div>
                ):('')}
                <div onClick={() => step(-1)} className={`py-[10px] bg-gray-100 rounded-full ${page > 0?"":"opacity-0 pointer-events-none"}`}>Back</div>
                <div  className="py-[10px] rounded-full px-[20px]">{`${page+1}/${form[0].section.length}`}</div>
                <div onClick={() => step(1)} className={`py-[10px] bg-gray-100 rounded-full ${page+1 < form[0].section.length?"":"opacity-0 pointer-events-none"}`}>Next</div>
    
            </div>
        </div>
    </div>

);
}
