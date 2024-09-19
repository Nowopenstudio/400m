import { getData } from "../lib/util/sanity";
import Content from "./content";

export default async function Home() {
  const query = await getData(`{
    'preface':*[_type=="info" && slug.current=="preface"]{title,content},
    'form':*[_type=="form"]{section},
    'prod':*[_type=='project']{"logoUrl":logo.asset->url,title,desc, slug,"images":content[]{desc,"imageUrl":image.asset->url}}}`)

  const {preface, form, prod} = query.data  



  return (
   
    

    <main className="w-[vw] min-h-[100vh] pb-[200px] pt-[calc(var(--bar)*2)] overflow-hidden">
            <Content prod={prod} form={form} preface={preface[0]}/>
            </main>
       
 
    
  

  );
}
