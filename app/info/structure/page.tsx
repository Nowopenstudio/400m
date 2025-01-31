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

export async function generateMetadata() {

  const query = await getData(`{
    'data':*[_type=='settings'][0]{meta{title,description,"image":image.asset->url}}
 }`)
 const {data} = query.data  
  return {
    title: 'Structure | 400M',
    openGraph: {
          images: data.meta.image
        },
    description:data.meta.description
  };
}
