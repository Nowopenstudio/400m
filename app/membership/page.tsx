import { getData } from "../lib/util/sanity";
import Image from "next/image";
import Content from "./layout";

export default async function Home() {
  const query = await getData(`{
    'settings':*[_type=="settings"]{contacts},
    'preface':*[_type=="info" && slug.current=="preface"]{title,content},
    'd_d':*[_type=="info" && slug.current=="d-d"]{title,content},
    'form':*[_type=="form"]{section,appSuccess, emailSub, emailer },
    'prod':*[_type=="project" && ( dept->slug.current == "productions")]{"logoUrl":logo.asset->url,title, status,desc, slug,"images":content[]{desc,"imageUrl":image.asset->url}},
    'design':*[_type=="project" && ( dept->slug.current == "d-d")]{"logoUrl":logo.asset->url,title,status,desc, slug,"images":content[]{desc,"imageUrl":image.asset->url}}
    }`)

  const {preface, form, prod, settings, design, d_d} = query.data





  return (
   
    

    <main className="grid grid-cols-12 items-center w-[100vw] min-h-[100vh] pb-[40px] md:pb-[200px] pt-[calc(var(--bar)*2)] overflow-hidden relative">
      {/* <Content design={design} prod={prod} form={form} preface={preface[0]} settings={settings[0]} d_d={d_d[0]}/> */}
    </main>

  );
}
