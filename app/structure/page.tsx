import { getData } from "../lib/util/sanity";
import Structure from "./structure";
import Form from "./structure";


export default async function Home() {
  const query = await getData(`{
  'structure':*[_type=="structure"]{'sections':sections[]{contentType, "cover":image.asset->url,text}}}`)

  const {structure} = query.data

  console.log(structure[0].sections)


  return (
   
    

  <main className="w-full min-h-[100vh] pt-[calc(var(--bar)*3)] md:pb-[200px] grid items-center">
    <Structure sections={structure[0].sections}/>
  </main>
 
    
  

  );
}
