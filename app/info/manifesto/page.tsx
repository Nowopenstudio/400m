import { getData } from "@/app/lib/util/sanity";
import { PortableText } from "next-sanity";
import { Reveal } from "@/app/lib/util/reveal";


export default async function Home() {
  const query = await getData(`{
    'manifesto':*[_type=="info" && slug.current=="manifesto"]{title,content},
    'principles':*[_type=="info" && slug.current=="principles"]{title,content}}`)

  const {manifesto} = query.data  


  return (

                <Reveal styleSet="px-[16px] sm:px-0 col-start-1 col-span-12 px-0 sm:col-start-2 sm:col-span-10 md:col-start-3 md:col-span-8 xl:col-start-4 xl:col-span-6">
                    <div className="w-full min-h-[100vh] pt-[calc(var(--bar)*2)] ">
                    <div className={`text-nav text-center mb-[40px] border-[--black] border rounded-full uppercase w-full py-[10px] bottom-[--bar] px-[10px] `}>manifesto</div>
                  {manifesto?(
                  manifesto[0].content.map((item:any,i:any)=>{
                      return(
                      <PortableText key={`manifest-${i}`} value={item.content}/>
                      )
                  })
                  ):('')}
                   </div>
              </Reveal>
        
 
    
  

  );
}
