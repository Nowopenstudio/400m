"use client"

import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navbar";
import {getData} from "./lib/util/sanity";
import { useState } from "react";



export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {

  // let {data} = await getData(`{
  //       'services':*[_type=="services"]{title,smallDesc,type},
  //       'info':*[_type=="office"]{desc, contacts[], info, "fullTime":timezones[]{name,code},"timeA":timezones[]{name,code}[0...2],"timeB":timezones[]{name,code}[2...4], serviceIntro, legalOne, legalTwo, "imageUrl": logo.asset->url,'footerUrl':footerLogo.asset->url, "footerImg": footerImage.asset->url,"footerImgService": footerImageService.asset->url,"footerImgNews": footerImageNews.asset->url, "mobileURL": headerLogoMobile.asset->url}}`)

  const [phase, setPhase] = useState(0)

        return (
    <html lang="en">
      <body>
    <div className='relative w-full'>
        <Navbar phase={phase} setPhase={setPhase}/>
          {children}
          
        </div>
          </body>
    </html>
  );
}
