import { getData } from "@/app/lib/util/sanity";

import SignUp from "../signup";


export default async function Home() {
  const query = await getData(`{
    'settings':*[_type=="settings"]{contacts},
    'form':*[_type=="form"]{disclaim, section,appSuccess, emailSub, emailer }
    }`)

  const {form, settings} = query.data


  return (
   


      
            
    <SignUp form={form} contact={settings[0].contacts[0].email}/>
        
 
    
  

  );
}
