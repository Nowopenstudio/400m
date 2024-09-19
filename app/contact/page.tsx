import { getData } from "../lib/util/sanity";


export default async function Home() {
  const query = await getData(`{
    'preface':*[_type=="info" && slug.current=="preface"]{title,content},
    'form':*[_type=="form"]{section}}`)

  const about = query.data  


  return (
   
    

  <main className="w-full min-h-[100vh] pt-[calc(var(--bar)*3)] pb-[200px]">
    
  <div className="grid grid-cols-12 w-full">
   <div className="col-start-4 col-span-6 grid-cols-2 grid">
     <div className="text-nav uppercase col-span-full mb-[20px]">Contact Form </div>
     <form className="grid grid-cols-2 col-span-full gap-[20px]">
      <input className="col-span-1 rounded-full border border-[--black] px-[20px]" type="text" placeholder="Name"></input>
      <input className="col-span-1 rounded-full border border-[--black] px-[20px]" type="text" placeholder="Email"></input>
      <input className="col-span-2 rounded-full border border-[--black] px-[20px]" type="text" placeholder="Subject"></input>
      <textarea className="border border-[--black] col-span-full rounded-[10px] p-[20px] min-h-[200px]" placeholder="Message"></textarea>
      <div className={`py-[10px] bg-[--black] text-white uppercase relative col-span-full border border-black text-nav text-center rounded-full mb-[20px]`}>{`Submit Inquiry`}</div>

     </form>
   </div>
  </div>
 </main>
 
    
  

  );
}
