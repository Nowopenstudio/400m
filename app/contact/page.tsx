import { getData } from "../lib/util/sanity";
import Form from "./form";


export default async function Home() {
  const query = await getData(`{
  'settings':*[_type=="settings"][0]{contacts},
  'form':*[_type=="form"]{contactSuccess}}`)

  const {form,settings} = query.data

  console.log(settings[0])


  return (
   
    

  <main className="w-full min-h-[100vh] pt-[calc(var(--bar)*4)] md:pb-[200px] grid items-center">
    <Form form={form[0]} settings={settings.contacts[0].email} />
  </main>
 
    
  

  );
}
