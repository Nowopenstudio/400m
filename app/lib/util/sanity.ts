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
