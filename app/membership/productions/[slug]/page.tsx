import { Reveal } from "@/app/lib/util/reveal";
import { getData } from "@/app/lib/util/sanity";
import { PortableText } from "next-sanity";
import Image from "next/image";
import { MuxVideoBG } from "@/app/lib/util/muxPlayer";
import { SwitchContent } from "@/app/lib/util/contentSwitch";

export default async function Home(params:any) {
  const query = await getData(`{
    'project':*[_type=="project" && slug.current == '${params.params.slug}']{"logoUrl":logo.asset->url,title,desc, slug,"work":content[]{desc,"imageUrl":image.asset->url, video{asset->{playbackId}}}, social, status}
    }`)

  const {project} = query.data
  console.log(project, params)


  return (
   


      
          <Reveal styleSet="w-full grid grid-cols-12 py-[160px]">
            <div className="px-[16px] sm:px-0 col-start-1 col-span-12 md:col-span-10 md:col-start-2 xl:pt-[8px] xl:col-span-3 xl:col-start-2 project-title grid grid-cols-4  gap-[20px] items-center xl:items-start">
                <div className="col-span-1">
                <Image alt="image" height={0}  width={0} sizes="100vw"  src={project[0].logoUrl}  className="w-full object-fill "/>
                </div>
                <div className="col-span-4 col-start-2">
                  <h1>{project[0].title}</h1>
                  <p className="text-nav uppercase">{project[0].status}</p>
                </div>
            </div>
            <div className="mt-[40px] col-start-2 col-span-11 md:col-start-2 md:col-span-10 xl:col-span-5 xl:mt-0 xl:col-start-5 projectInfo">
              <PortableText value={project[0].desc}/>
            </div>
            <div className="col-start-2 col-span-11 my-[20px] xl:my-0 xl:col-span-2 project-social text-nav xl:col-start-10">
              {project[0].social?(
                project[0].social.map((item:any,i:number)=>{
                  return(
                    <a key={`Social-${i}`} href={item.url} target="_blank" className="w-full py-[10px] uppercase"><p className="text-nav"> {item.name}</p>
                     
                    </a>
                  )
                })
              ):('')}
            </div>
            <div className="projImg w-full col-span-full">
            {project[0].work.map((img:any,i:any)=>{
                  return(
                    <SwitchContent work={img} key={`${i}`}title={project[0].title}/>
                  )
                })}
            </div>
          </Reveal>
        
 
    
  

  );
}

export async function generateMetadata(params:any) {

  const query = await getData(`{
    'project':*[_type=="project" && slug.current == '${params.params.slug}'][0]{title,desc, slug,"work":content[]{desc,"imageUrl":image.asset->url}},
    'data':*[_type=='settings'][0]{meta{title,description,"image":image.asset->url}}
 }`)
 const {data,project} = query.data  
  return {
    title: `${project.title} | 400M: Productions`,
    openGraph: {
          images: data.meta.image
        },
    description:data.meta.description
  };
}
