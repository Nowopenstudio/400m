'use client'

import React, { useEffect, useState, createContext } from "react";
import { Reveal } from "../lib/util/reveal";
import Prelim from "./forms/prelim";
import StageOne from "./forms/stageOne";
import StageTwo from "./forms/stageTwo";


export const InputContext = createContext({})



export default function SignUp({form,sec}:any) {
    const [currPage, setPage] = useState(0)
    const [total, setTotal] = useState(0)
    const [answers,setAnswer] = useState<object>([])
    const [active,setActive] = useState(null)
    const [submit, setSubmit] = useState(false)
    const [success, setSuccess] = useState(false)

 
    const activeChange =(answer:any)=>{
        setActive(answer)
    }

    const step=(sec:any)=>{
        const curr = currPage + sec
        const currAnswers:any = answers
        currAnswers[currPage] = active;
        setAnswer(currAnswers)
        setPage(curr)
        setActive(null)

    }

    

    useEffect(()=>{
        const count = 1+(form[0].section[1].single.length)+(form[0].section[2].single.length)

        setTotal(count)
    }, [])

    const submitToggle=()=>{
        setSubmit(!submit)
    }

    const sendSuccess = (newDoc:any)=>{
        console.log(newDoc)
        setSuccess(true)
    }

  return (
   
    
    <div className="pt-[60px] min-h-[100%]">
        {success?(
           <div className=" w-full grid-cols-12 grid mt-[20px] items-center h-[100%]">

                <h1 className="col-span-full text-center text-nav">thank you</h1>
           </div>
        ):(
            <div className=" w-full grid-cols-12 grid mt-[20px]">
            {submit?(
                  <InputContext.Provider value={{ activeChange, currPage, answers, submitToggle, sendSuccess }}>
            <StageTwo /></InputContext.Provider>
            ):('')}
          
  
       <div className="col-span-full pb-[60px]">
            {currPage < 1?(
                <InputContext.Provider value={{ activeChange, currPage, answers }}>
                  <Prelim form={form[0].section[0]}/></InputContext.Provider>
            ):(
                currPage < (form[0].section[1].single.length+1)?(
                    <InputContext.Provider value={{ activeChange, currPage, answers }}>
                    <StageOne single={form[0].section[1].single[currPage - 1]}/>  </InputContext.Provider>
              ):(
                <InputContext.Provider value={{ activeChange, currPage, answers }}>
                <StageOne single={form[0].section[2].single[currPage - (1+form[0].section[1].single.length)]}/>    </InputContext.Provider>
              )

            )}
    
        </div>

<div className={`w-full grid grid-cols-12 absolute bottom-[var(--bar)] py-[10px]`}>
    {currPage === total-1?(
        <div className="col-span-4 col-start-5 mb-[10px]">
            <div onClick={()=>submitToggle()} className={` text-white uppercase text-center text-nav  py-[10px] bg-[var(--black)] rounded-full ${currPage == total-1?"":"opacity-0 pointer-events-none"}`}>Submit Application</div>
        </div>
    ):('')}
   <div className={`col-span-4 col-start-5 text-center text-nav uppercase grid grid-cols-[1fr_1fr_1fr]`}>
       
        <div onClick={() => step(-1)} className={`py-[10px] bg-gray-100 rounded-full ${currPage > 0?"":"opacity-0 pointer-events-none"}`}>Back</div>
        <div  className="py-[10px] rounded-full px-[20px]">{`${currPage+1}/${total}`}</div>
        <div onClick={() => step(1)} className={`py-[10px] bg-gray-100 rounded-full ${(currPage+1 < total)?"":"opacity-0 pointer-events-none"} ${active?"":"opacity-50"}`}>Next</div>

    </div>
</div>
</div>
        )}
        
    </div>

);
}
