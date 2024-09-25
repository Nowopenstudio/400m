import { getData } from "../lib/util/sanity";
import Content from "./content";

export default async function Home() {
  const query = await getData(`{
    'settings':*[_type=="settings"]{contacts},
    'preface':*[_type=="info" && slug.current=="preface"]{title,content},
    'form':*[_type=="form"]{section,appSuccess, emailSub, emailer },
    'prod':*[_type=="project" && ( dept->slug.current == "production")]{"logoUrl":logo.asset->url,title,desc, slug,"images":content[]{desc,"imageUrl":image.asset->url}},
    'design':*[_type=="project" && ( dept->slug.current == "d-d")]{"logoUrl":logo.asset->url,title,desc, slug,"images":content[]{desc,"imageUrl":image.asset->url}}
    }`)

  const {preface, form, prod, settings, design} = query.data



  return (
   
    

    <main className="grid grid-cols-12 items-center w-[100vw] min-h-[100vh] pb-[200px] pt-[calc(var(--bar)*2)] overflow-hidden relative">
      <Content prod={prod} form={form} preface={preface[0]} settings={settings[0]} design={design}/>
    </main>

  );
}
