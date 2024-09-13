import { getData } from "../lib/util/sanity";
import { PortableText } from "next-sanity";
import Image from "next/image";
import { Reveal } from "../lib/util/reveal";
import Portfolio from "./portfolio";

export default async function Home() {
  const query = await getData(`{
    'preface':*[_type=="info" && slug.current=="preface"]{title,content},
    'form':*[_type=="form"]{section},
    'prod':*[_type=='project']{"logoUrl":logo.asset->url,title,desc, slug,"images":content[]{desc,"imageUrl":image.asset->url}}}`)

  const {preface, form, prod} = query.data  


  return (
   
    

        <main className="w-full min-h-[100vh] pb-[200px] pt-[calc(var(--bar)*2)]">
          <div className="w-full fixed h-[var(--bar)] grid grid-cols-12 top-[var(--bar)] py-[8px] z-50">
              <div className="bg-white h-full flex border border-black col-span-4 col-start-5 justify-between text-sm uppercase rounded-full items-center text-center">
                <div className="w-[50%]">Production</div>
                <div className="w-[50%]">D+D</div>

              </div>
          </div>
          <div className="grid grid-cols-12 w-full">
            <div className="col-span-12 relative mb-[40px] overflow-hidden">
            <div className="bufferHold w-[calc(100vw/4)] relative pointer-events-none z-0 opacity-0">
            
            <div className="projHold p-[10px] grid grid-cols-[1fr_5fr] items-center">
                <Image alt="image" height={0}  width={0} sizes="100vw"  src={prod[0].logoUrl}  className="w-full object-fill "/>
                <div className="py-[10px] pl-[10px] text-sm">
                  <h2 className="mb-[10px]">{prod[0].title}</h2>
                  <PortableText value={prod[0].desc}/>
                </div>
            </div>
            
            <div className="buff"></div></div>

              <Portfolio work={prod}/>
            </div>
           <div className="col-start-4 col-span-6">
              {preface?(
                preface[0].content.map((item:any,i:any)=>{
                  return(
                    <PortableText key={`manifest-${i}`} value={item.content}/>
                  )
                })
              ):('')}
           </div>
          </div>
         </main>
 
    
  

  );
}
