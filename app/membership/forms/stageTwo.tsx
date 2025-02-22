
import React, { useEffect, useState, useContext, FormEvent } from "react";
import { Reveal } from "@/app/lib/util/reveal";
import {InputContext} from '../signup'
import addDoc, { delData } from "@/app/lib/util/sanity";
import { v4 as uuidv4 } from 'uuid';
import { getData } from "@/app/lib/util/sanity";





export default function StageTwo() {

  const contextInput = useContext<any>(InputContext);
  const [isLoading, setIsLoading] = useState<boolean>(false)
 


  const submitForm=(e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    setIsLoading(true)
    const formData = new FormData(e.currentTarget)
    const newDoc:any  = {}
    const newAnwsers:any = []
    newDoc._type = "application"
   newDoc.firstName = formData.get('firstName')
   newDoc.lastName = formData.get('lastName')
   newDoc.email = formData.get('email')
   newDoc.status = 'pending'
   newDoc.website = formData.get('website')
  
   contextInput.answers.map((item:any,i:number)=>{
    const curr: any = {}
    curr.quest = contextInput.quest[i]
    curr.answer = JSON.stringify(item)
    curr._key = uuidv4()
    if(curr.quest!=="break" && curr.quest!==null){
    newAnwsers.push(curr)
    }

   })
   newDoc.answers = newAnwsers
    addDoc(newDoc).then(contextInput.sendSuccess(newDoc) )

  }



  return (
            <Reveal  styleSet={`${isLoading?"opacity-[.25] pointer-events-none":""} w-[100vw] h-[100vh] grid grid-cols-12 fixed top-0 left-0 z-50 `} >      
             
         
              <div onClick={()=> contextInput.submitToggle()} className={`${isLoading?"opacity-[.25] pointer-events-none":""} col-span-12 xl:col-span-3 col-start-1 grid grid-cols-1 items-center text-nav uppercase text-center bg-white xl:bg-none mt-[--bar]`}>Back</div>
                <form onSubmit={submitForm}className={` px-[20px] bg-white col-start-1 col-span-12 md:col-start-3 md:col-span-8 md:grid-cols-2 xl:col-start-4 xl:col-span-6 grid grid-cols-2 gap-[20px] border-0 xl:border-[--black] xl:border`}>
                    <input type="text" name="firstName" className="px-[20px] rounded-full col-span-1 border border-[--black] text-nav p-[10px] " placeholder="FIRST NAME" required></input>
                    <input type="text" name="lastName" className="px-[20px] rounded-full col-span-1 border border-[--black] text-nav p-[10px] " placeholder="LAST NAME" required></input>
                    <input type="email" name="email" className="px-[20px] rounded-full col-span-2 border border-[--black] text-nav p-[10px] " placeholder="EMAIL" required></input>
                    <input type="url" name="website" className="px-[20px] rounded-full col-span-2 border border-[--black] text-nav p-[10px] " placeholder="WEBSITE"></input>
                    <button type="submit"className="px-[20px] rounded-full col-span-2 border border-[--black] text-nav p-[10px] uppercase text-center bg-[--black] text-white "> Submit </button>
                </form>
                <div onClick={()=> contextInput.submitToggle()} className={`${isLoading?"opacity-[.25] pointer-events-none":""} col-span-12 xl:col-span-3 col-start-1 xl:col-start-10  grid-cols-1 items-center text-nav uppercase text-center text-white xl:text-black grid bg-white xl:bg-transparent`}>Back</div>
          
                 
            </Reveal>
  


);
}
