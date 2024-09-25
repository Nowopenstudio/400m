import { getData } from "../lib/util/sanity";
import Form from "./form";


export default async function Home() {
  const query = await getData(`{
  'settings':*[_type=="settings"]{contacts},
  'form':*[_type=="form"]{contactSuccess}}`)

  const {form,settings} = query.data

  console.log(settings[0])


  return (
   
    

  <main className="w-full min-h-[100vh] pt-[calc(var(--bar)*3)] md:pb-[200px] grid items-center">
    <Form form={form[0]} settings={settings[0]} />
  </main>
 
    
  

  );
}
