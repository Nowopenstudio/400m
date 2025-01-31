import { getData } from "../../lib/util/sanity";
import Jobs from "./jobs";


export default async function Home() {
  const query = await getData(`{
  'jobs':*[_type=="jobs"][0]{'sections':sections[]{title, "cover":image.asset->url,text}}}`)

  const {jobs} = query.data



  return (
   
    

  <main className="col-span-full min-h-[100vh] pt-[calc(var(--bar)*2)]   ">
    <Jobs sections={jobs.sections}/>
  </main>
 
    
  

  );
}

export async function generateMetadata() {

  const query = await getData(`{
    'data':*[_type=='settings'][0]{meta{title,description,"image":image.asset->url}}
 }`)
 const {data} = query.data  
  return {
    title: 'Co-Op Openings | 400M',
    openGraph: {
          images: data.meta.image
        },
    description:data.meta.description
  };
}

