import { getData } from "@/app/lib/util/sanity";
import { PortableText } from "next-sanity";
import { Reveal } from "@/app/lib/util/reveal";
import Portfolio from "../portfolio";


export default async function Home() {
  const query = await getData(`{
    'settings':*[_type=="settings"]{contacts},
    'preface':*[_type=="info" && slug.current=="preface"]{title,content, "imageURL":cover.asset->url},
    'd_d':*[_type=="info" && slug.current=="d-d"]{title,content},
    'form':*[_type=="form"]{section,appSuccess, emailSub, emailer },
    'prod':*[_type=="project" && ( dept->slug.current == "productions")]{"logoUrl":logo.asset->url,title,desc, slug,"images":content[]{desc,"imageUrl":image.asset->url}},
    'design':*[_type=="project" && ( dept->slug.current == "d-d")]{"logoUrl":logo.asset->url,title,desc, slug,"work":content[]{desc,"imageUrl":image.asset->url, video{asset->{playbackId}}}}
    }`)

  const {preface, form, prod, settings, design, d_d} = query.data


  return (
   


      
          <div className="w-full grid grid-cols-12 col-span-full pb-[100px]">
            <Reveal styleSet="portfolio relative col-span-full mt-[--bar] overflow-hidden">
                  <Portfolio work={design} section={'d-d'}/>
            </Reveal>
           <div className="w-[100vw] grid grid-cols-12">
              <div className="px-[16px] sm:px-0 col-start-1 col-span-12 sm:col-start-2 sm:col-span-10 md:col-start-3 md:col-span-8 xl:col-start-4 xl:col-span-6 pt-[60px]">
              <div className={`text-nav text-center mb-[40px] border-[--black] border rounded-full uppercase w-full py-[8px] bottom-[--bar] px-[10px]`}>D+D</div>
                          {d_d[0].content.map((item:any, i:any)=>{
                              return(
                                  <PortableText key={`item-${i}`} value={item.content}/>
                              )
                          })}
  
                        
              </div>

           </div>
          </div>
        
 
    
  

  );
}

export async function generateMetadata() {

  const query = await getData(`{
    'data':*[_type=='settings'][0]{meta{title,description,"image":image.asset->url}}
 }`)
 const {data} = query.data  
  return {
    title: 'D+D | 400M',
    openGraph: {
          images: data.meta.image
        },
    description:data.meta.description
  };
}

