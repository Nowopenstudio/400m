'use client'

import React, { useEffect, useState, createContext } from "react";
import { Reveal } from "../lib/util/reveal";
import Prelim from "./forms/prelim";
import StageOne from "./forms/stageOne";
import StageTwo from "./forms/stageTwo";
import { sendEmail } from "../lib/util/sanity";
import { PortableText } from "next-sanity";
import Caution from "./forms/caution";
import TextOnly from "./forms/textOnly";


export const InputContext = createContext({})



export default function SignUp({form, contact}:any) {
    const [currPage, setPage] = useState(0)
    const [total, setTotal] = useState(0)
    const [answers,setAnswer] = useState<object>([])
    const [quest,setQuest] = useState<object>([])
    const [active,setActive] = useState(null)
    const [activeQ,setActiveQ] = useState(null)
    const [submit, setSubmit] = useState(false)
    const [success, setSuccess] = useState(false)


 
    const activeChange =(question:any,answer:any)=>{
        setActive(answer)
        setActiveQ(question)
    }

    const step=(sec:any)=>{
        const curr = currPage + sec
        const currQuest:any = quest
        const currAnswers:any = answers
        currAnswers[currPage] = active;
        currQuest[currPage] = activeQ;
        setAnswer(currAnswers)
        setQuest(currQuest)
        setPage(curr)
        setActive(null)
        scrollTo(0,0)

    }

    

    useEffect(()=>{
        var count = 2

        form[0].section.map((item:any, i:number)=>{
            if( i > 0){
                if(item.single){
                 count = count + item.single.length
                }else{
                    count++
                }
              }
              
        })
        
        
        setTotal(count)
    }, [])

    const submitToggle=()=>{
        setSubmit(!submit)
    }

    const sendSuccess = (newDoc:any)=>{
        sendEmail(newDoc, form[0], contact)
        setSuccess(true)
    }

  return (
   
    
    <div className=" pt-[80px]  col-span-full min-h-[100vh]">
        {success?(
           <Reveal styleSet=" w-full grid-cols-12 grid mt-[20px] items-center h-[100%]">

                <div className="col-start-2 col-span-10 px-[20px] sm:px-0 sm:col-start-2 sm:col-span-10 md:col-start-3 md:col-span-8 xl:col-start-4 xl:col-span-6"><PortableText value={form[0].appSuccess}/></div>
           </Reveal>
        ):(
            <div className=" w-full grid-cols-12 grid mt-[20px]">
            {submit?(
                  <InputContext.Provider value={{ activeChange, currPage, answers, quest,submitToggle, sendSuccess }}>
            <StageTwo /></InputContext.Provider>
            ):('')}
          
  
       <div className="col-span-full pb-[60px]">
            {currPage == 0?(
                      <InputContext.Provider value={{ activeChange, currPage, answers }}>
                      <Caution form={form[0].disclaim}/></InputContext.Provider>
            ):('')}
            {currPage == 1?(
            <InputContext.Provider value={{ activeChange, currPage, answers }}>
                <Prelim form={form[0].section[0]}/></InputContext.Provider>
        ):('')}
                   {currPage == 2?(
           <InputContext.Provider value={{ activeChange, currPage, answers }}>
            <TextOnly copy={form[0].section[1]}/> </InputContext.Provider>
        ):('')}
                
            
        {currPage > 2?(
            currPage < (form[0].section[2].single.length+3)?(
                <InputContext.Provider value={{ activeChange, currPage, answers }}>
                <StageOne single={form[0].section[2].single[currPage - 3]}/>  </InputContext.Provider>
          ):(
            
                <InputContext.Provider value={{ activeChange, currPage, answers }}>
                <StageOne single={form[0].section[3].single[currPage - (3+form[0].section[2].single.length)]}/></InputContext.Provider>
            
           
          )
        ):('')}
    
    

    
        </div>

<div className={`w-full grid grid-cols-12 fixed bottom-[--bar] py-[10px] px-[10px] md:px-0`}>
    {currPage === total-1?(
        <div className="col-span-12 col-start-1 md:col-span-8 md:col-start-3 xl:col-span-4 xl:col-start-5 mb-[10px]">
            <div onClick={()=>submitToggle()} className={` text-white uppercase text-center text-nav  py-[10px] bg-[var(--black)] rounded-full ${currPage == total-1?"":"opacity-0 pointer-events-none"}`}>Submit Application</div>
        </div>
    ):('')}
   <div className={`col-span-12 col-start-1 md:col-span-8 md:col-start-3 xl:col-span-4 xl:col-start-5 text-center text-nav uppercase grid grid-cols-[1fr_1fr_1fr]`}>
       
        <div onClick={() => step(-1)} className={`py-[10px] bg-gray-100 rounded-full ${currPage > 0?"":"opacity-0 pointer-events-none"}`}>Back</div>
        <div  className="py-[10px] rounded-full px-[20px]">{`${currPage+1}/${total}`}</div>
        <div onClick={() => step(1)} className={`py-[10px] bg-gray-100 rounded-full ${(currPage+1 < total)?"":"opacity-0 pointer-events-none"} ${active?"":"opacity-50 pointer-events-none"}`}>Next</div>

    </div>
</div>
</div>
        )}
        
    </div>

);
}
