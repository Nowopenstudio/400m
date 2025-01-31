import Image from "next/image";
import { getData } from "./lib/util/sanity";

export default async function Home() {
  
  return (
    <div className="w-full">
     
    </div>
  );
}


export async function generateMetadata() {

  const query = await getData(`{
   'data':*[_type=='settings'][0]{meta{title,description,"image":image.asset->url}}
 }`)
 const {data} = query.data  
  return {
    title: '400M',
    openGraph: {
          images: data.meta.image
        },
    description:data.meta.description
  };
}
