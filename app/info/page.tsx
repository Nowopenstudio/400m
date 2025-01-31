import { getData } from "../lib/util/sanity";
import { PortableText } from "next-sanity";


export default async function Home() {
  const query = await getData(`{
    'manifesto':*[_type=="info" && slug.current=="manifesto"]{title,content},
    'principles':*[_type=="info" && slug.current=="principles"]{title,content}}`)

  const about = query.data  


  return (
   
    

        <main className="w-full min-h-[100vh] pt-[calc(var(--bar)*2)] pb-[200px] overflow-x-hidden">
            {/* <Contents content={about}/> */}
         </main>
 
    
  

  );
}

