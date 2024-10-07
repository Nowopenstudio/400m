import { getData } from "@/app/lib/util/sanity";
import { PortableText } from "next-sanity";
import { Reveal } from "@/app/lib/util/reveal";


export default async function Home() {
  const query = await getData(`{
    'principles':*[_type=="info" && slug.current=="principles"]{title,content}}`)

  const {principles} = query.data  


  return (
   


      
                <Reveal styleSet="col-start-2 col-span-10 px-[20px] sm:px-0 sm:col-start-2 sm:col-span-10 md:col-start-3 md:col-span-8 xl:col-start-4 xl:col-span-6">
                    <div className="w-full min-h-[100vh] pt-[calc(var(--bar)*2)] pb-[200px]">
                  {principles?(
                  principles[0].content.map((item:any,i:any)=>{
                      return(
                      <PortableText key={`manifest-${i}`} value={item.content}/>
                      )
                  })
                  ):('')}
                   </div>
              </Reveal>
        
 
    
  

  );
}
