"use client"
import Image from "next/image";
import Headerpage from "./header/header";
import Footerpage from "./footer/footer";
import Homepage from "./home/home";
import {  useEffect } from 'react'
import "aos/dist/aos.css";
import AOS from 'aos';

import 'aos/dist/aos.css';
import { once } from "events";

export default function Home() {
  useEffect(() => {
    console.log(AOS.init(once));
    
    AOS.init({
         duration: 2000,
         once: true,
       });
       AOS.refresh();
 }, [])
  return (
    <section className="w-full overflow-x-clip">
     <Headerpage />
     <Homepage />
     <Footerpage />
    </section>
  );
}
