import { getData } from "@/app/lib/util/sanity";

import SignUp from "../signup";


export default async function Home() {
  const query = await getData(`{
    'settings':*[_type=="settings"]{contacts},
    'preface':*[_type=="info" && slug.current=="preface"]{title,content},
    'd_d':*[_type=="info" && slug.current=="d-d"]{title,content},
    'form':*[_type=="form"]{section,appSuccess, emailSub, emailer },
    'prod':*[_type=="project" && ( dept->slug.current == "productions")]{"logoUrl":logo.asset->url,title,desc, slug,"images":content[]{desc,"imageUrl":image.asset->url}},
    'design':*[_type=="project" && ( dept->slug.current == "d-d")]{"logoUrl":logo.asset->url,title,desc, slug,"images":content[]{desc,"imageUrl":image.asset->url}}
    }`)

  const {preface, form, prod, settings, design, d_d} = query.data


  return (
   


      
            
    <SignUp form={form} contact={settings[0].contacts[0].email}/>
        
 
    
  

  );
}
