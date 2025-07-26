
import {createClient, QueryParams} from 'next-sanity'
import {apiVersion, dataset, projectId, token} from "../../../env"
import imageUrlBuilder from '@sanity/image-url'



export const client = createClient({
    projectId,
    dataset,
    apiVersion,
    token,
    useCdn: false
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any){
    return builder.image(source)
}

export const getData = (async (query:any) =>{
   
  const initQuery = query
  const data = await client.fetch(initQuery,{},
      { next : { revalidate : 50 }});
  return {data}

})


 export const getRandom =(min:any, max:any)=>{
    return Math.floor(Math.random() * (max - min) + min);
}

export const getRandomA =(min:any, max:any)=>{
    return (Math.random() * (max - min) + min);
}

export const scrolltoHash = (element_id: string)=>{
    const element = document.getElementById(element_id)
    element?.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
  }

  export const scrollToPos = (posY: number)=>{
    window.scrollTo({
      top: posY,
      left: 100,
      behavior: "smooth",
    });
  }

export default async function addDoc(doc:any) {

const postDoc = await client.create(doc).then(res => {return res})
}

export const delData = (async (query:any) =>{

    const initQuery = query
    const delContent = await client.delete({
        query: `*[_type == "${query}"]`
        })
    })



export const sendEmail= (async (profile:any,form:any,contact:any)=>{
    try{
        const response = await fetch("/api/send", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: profile.email,
            name: profile.firstName,
            subject:form.emailSub,
            message:form.emailer,
            sender:contact
          }),
        });
  
        // handle success
        if (response.ok) {
        console.log('great')
        } else {
         console.log(response)
        }
    }
     catch (error) {
      console.log("Error sending email:", error);
      
    }
      
})

export const sendContact= (async (message:any)=>{
  try{
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: message.email,
          name: message.name,
          subject:message.subject,
          message:message.message,
          sender:message.sender
        }),
      });

      // handle success
      if (response.ok) {
      console.log('great')
      } else {
       console.log(response)
      }
  }
   catch (error) {
    console.log("Error sending email:", error);
    
  }
    
})
   