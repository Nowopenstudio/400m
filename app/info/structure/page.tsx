import { getData } from "../../lib/util/sanity";
import Structure from "./structure";
import Form from "./structure";


export default async function Home() {
  const query = await getData(`{
  'structure':*[_type=="structure"]{'sections':sections[]{contentType, "cover":image.asset->url,text}}}`)

  const {structure} = query.data

  console.log(structure[0].sections)


  return (
   
    

  <main className="col-span-full min-h-[100vh] pt-[calc(var(--bar)*2)]  ">
    <Structure sections={structure[0].sections}/>
  </main>
 
    
  

  );
}
