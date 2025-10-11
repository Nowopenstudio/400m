import { getData } from "@/app/lib/util/sanity";
import { PortableText } from "next-sanity";
import Application from "./application";


export default async function Home() {
  const query = await getData(`{
    'data':*[_type=="application" && status=="pending"]{firstName, lastName, email, website, answers},
    'form':*[_type=="form"][0]{section},
    'pass':*[_type=='settings'][0]{password}
    }`)

  const {data,form,pass} = query.data  


  return (
   
    

        <main className="w-full min-h-[100vh] pt-[calc(var(--bar)*2)] pb-[200px] overflow-x-hidden">
          
                <Application data={data} quest={form.section[0].single} pass={pass.password}/>
        
         </main>
 
    
  

  );
}
