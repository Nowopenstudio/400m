import { getData } from "@/app/lib/util/sanity";
import { PortableText } from "next-sanity";
import { Reveal } from "@/app/lib/util/reveal";
import Portfolio from "../portfolio";


export default async function Home() {
  const query = await getData(`{
    'settings':*[_type=="settings"]{contacts},
    'preface':*[_type=="info" && slug.current=="preface"]{title,content},
    'd_d':*[_type=="info" && slug.current=="d-d"]{title,content},
    'form':*[_type=="form"]{section,appSuccess, emailSub, emailer },
    'prod':*[_type=="project" && ( dept->slug.current == "productions")]{"logoUrl":logo.asset->url,title,desc, slug,"images":content[]{desc,"imageUrl":image.asset->url}},
    'design':*[_type=="project" && ( dept->slug.current == "d-d")]{"logoUrl":logo.asset->url,title,desc, slug,"images":content[]{desc,"imageUrl":image.asset->url}}
    }`)

  const {preface, form, prod, settings, design, d_d} = query.data


  return (
   


      
          <div className="w-full grid grid-cols-12 col-span-full pt-[calc(var(--bar)*2)] pb-[160px]">
            <Reveal styleSet="portfolio relative col-span-full mt-[--bar] overflow-hidden">
                  <Portfolio work={prod} section={'productions'}/>
            </Reveal>
            <div className="col-start-2 col-span-10 px-[20px] sm:px-0 sm:col-start-2 sm:col-span-10 md:col-start-3 md:col-span-8 xl:col-start-4 xl:col-span-6 pt-[60px]">
                        {preface[0].content.map((item:any, i:any)=>{
                            return(
                                <PortableText key={`item-${i}`} value={item.content}/>
                            )
                        })}

                      
            </div>
          </div>
        
 
    
  

  );
}