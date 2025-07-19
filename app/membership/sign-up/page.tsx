import { getData } from "@/app/lib/util/sanity";

import SignUp from "../signup";


export default async function Home() {
  const query = await getData(`{
    'settings':*[_type=="settings"]{contacts,"code":code.asset->url,"og":code.asset->originalFilename},
    'form':*[_type=="form"]{disclaim, section,appSuccess, emailSub, emailer }
    }`)

    

  const {form, settings} = query.data

  return (
   


      
            
    <SignUp form={form} contact={settings[0].contacts[0].email} settings={settings[0]}/>
        
 
    
  

  );
}

export async function generateMetadata() {

  const query = await getData(`{
    'data':*[_type=='settings'][0]{meta{title,description,"image":image.asset->url}}
 }`)
 const {data} = query.data  
  return {
    title: 'Apply to 400M',
    openGraph: {
          images: data.meta.image
        },
    description:data.meta.description
  };
}

