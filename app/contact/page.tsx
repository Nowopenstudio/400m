import { getData } from "../lib/util/sanity";
import Form from "./form";


export default async function Home() {
  const query = await getData(`{
  'settings':*[_type=="settings"][0]{contacts},
  'form':*[_type=="form"]{contactSuccess}}`)

  const {form,settings} = query.data



  return (
   
    

  <main className="w-full min-h-[100vh] pt-[calc(var(--bar)*4)] md:pb-[200px] grid items-center">
    <Form form={form[0]} settings={settings.contacts[0].email} />
  </main>
 
    
  

  );
}

export async function generateMetadata() {

  const query = await getData(`{
    'data':*[_type=='settings'][0]{meta{title,description,"image":image.asset->url}}
 }`)
 const {data} = query.data  
  return {
    title: 'Contact | 400M',
    openGraph: {
          images: data.meta.image
        },
    description:data.meta.description
  };
}

