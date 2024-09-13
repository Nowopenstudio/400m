import { getData } from "../lib/util/sanity";


export default async function Home() {
  const query = await getData(`{
    'preface':*[_type=="info" && slug.current=="preface"]{title,content},
    'form':*[_type=="form"]{section}}`)

  const about = query.data  


  return (
   
    

    <main className="w-full min-h-[100vh] pt-[calc(var(--bar)*3)] pb-[200px]">
    
  <div className="grid grid-cols-12 w-full">
   <div className="col-start-4 col-span-6">
     <h1>Contact</h1>
   </div>
  </div>
 </main>
 
    
  

  );
}
