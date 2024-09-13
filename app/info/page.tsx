import { getData } from "../lib/util/sanity";
import { PortableText } from "next-sanity";


export default async function Home() {
  const query = await getData(`{
    'manifesto':*[_type=="info" && slug.current=="manifesto"]{title,content},
    'principles':*[_type=="services"]{title,smallDesc,type}}`)

  const about = query.data  
  console.log(about.manifesto[0])

  return (
   
    

        <main className="w-full min-h-[100vh] pt-[calc(var(--bar)*2)] pb-[200px]">
            <div className="w-full fixed h-[var(--bar)] grid grid-cols-12 top-0 py-[8px] z-50">
              <div className="bg-white h-full flex border border-black col-span-4 col-start-5 justify-between text-sm uppercase rounded-full items-center text-center">
                <div className="w-[50%]">Manifesto</div>
                <div className="w-[50%]">Principle</div>

              </div>
          </div>
          <div className="grid grid-cols-12 w-full">
           <div className="col-start-4 col-span-6">
              {about.manifesto?(
                about.manifesto[0].content.map((item:any,i:any)=>{
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
