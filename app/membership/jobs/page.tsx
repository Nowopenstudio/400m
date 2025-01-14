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
