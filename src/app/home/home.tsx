"use client"
import { NextPage } from "next";
import Image from "next/image";
import Cardpage from "../ui/card";
import Titlecomponentpage from "../ui/titlecomponent";
import Card2page from "../ui/card2";
import SimpleCardPage from "../ui/simplecard";
import bannermain from "@/../public/cardImage/bannermain.webp"
import ImageCardPage from "../ui/imagecard";
import image1 from "@/../public/cardImage/9.webp";
import image2 from "@/../public/cardImage/10.webp";
import image3 from "@/../public/cardImage/11.webp";
import image4 from "@/../public/cardImage/fj.webp";
import arrow from "@/../public/cardImage/arrow2.webp"
import Advisory from "@/../public/cardImage/Advisory.webp"
import newicon1 from "@/../public/cardImage/newicon1.webp"
import newicon2 from "@/../public/cardImage/newicon2.webp"
import newicon3 from "@/../public/cardImage/newicon3.webp"
import icon from "@/../public/cardImage/Icon.webp"
import icon2 from "@/../public/cardImage/Icon-2.webp"
import icon1 from "@/../public/cardImage/Icon-1.webp"
import Card3page from "../ui/car3";
import Card4Page from "../ui/card4";
import TablePage from "../ui/table";
import Card5Page from "../ui/card5";
import Card6Page from "../ui/card6";
import Card7Page from "../ui/card7";
import m1 from "@/../public/cardImage/m1.webp";
import m2 from "@/../public/cardImage/m2.webp";
import m3 from "@/../public/cardImage/m3.webp";
import m4 from "@/../public/cardImage/m4.webp";
import m5 from "@/../public/cardImage/5 (1).webp";
import m6 from "@/../public/cardImage/6 (1).webp";
import m7 from "@/../public/cardImage/7 (1).webp";
import m8 from "@/../public/cardImage/8 (1).webp";
import m9 from "@/../public/cardImage/9 (1).webp";
import m10 from "@/../public/cardImage/10 (1).webp";
import m11 from "@/../public/cardImage/11 (1).webp";
import m12 from "@/../public/cardImage/12.webp";
import m13 from "@/../public/cardImage/13.webp";
import imet from "@/../public/cardImage/imet.webp"
import angryBoy from "@/../public/cardImage/angryBoy.webp"
import imet1 from "@/../public/cardImage/problem.webp"
import imet3 from "@/../public/cardImage/Jaipuria.webp"
import ABP from "@/../public/cardImage/abp.webp"
import TodayIndia from "@/../public/cardImage/india_today.webp"
import Quint from "@/../public/cardImage/quint.webp"
import HinduTimes from "@/../public/cardImage/download.png"
import Card8Page from "../ui/card8";
import Card9Page from "../ui/card9";
import Card10Page from "../ui/card10";
import ss1 from "@/../public/cardImage/ss1.webp";
import ss2 from "@/../public/cardImage/ss2.webp"
import ss3 from "@/../public/cardImage/ss3.webp"
import ss4 from "@/../public/cardImage/ss4.webp"
import Gallary1 from "@/../public/cardImage/Gallery1.webp"
import Gallary2 from "@/../public/cardImage/Gallery2.webp"
import Gallary3 from "@/../public/cardImage/Gallery3.webp"
import Gallary4 from "@/../public/cardImage/Gallery4.webp"
import GallaryBig from "@/../public/cardImage/GalleryBig.webp"
import Cimg1 from "@/../public/cardImage/Cimg1.webp"
import Cimg2 from "@/../public/cardImage/Cimg2.webp"
import Cimg3 from "@/../public/cardImage/Cimg3.webp"
import Cimg4 from "@/../public/cardImage/Cimg4.webp"
import Imagebutton from "../ui/imagebutton";
import YoutubeCardPage from "../ui/youtubecard";
import court from "@/../public/cardImage/Cohort 01.webp"
import court1 from "@/../public/cardImage/Cohort 02 (A).webp"
import court2 from "@/../public/cardImage/Cohort 02 (B).webp"
import court3 from "@/../public/cardImage/Cohort 02 (C).webp"
import court4 from "@/../public/cardImage/Cohort 03.webp"
import court5 from "@/../public/cardImage/Cohort 04.webp"
import court6 from "@/../public/cardImage/Cohort 05.webp"
import court7 from "@/../public/cardImage/Cohort 06.webp"
import court8 from "@/../public/cardImage/Cohort 07.webp"
import Marquee from "react-marquee-slider";
import { useRef, useState } from "react";



const Homepage: NextPage = () => {
    const [isVisible, setIsVisible] = useState([false, false, false, false, false, false, false]);

  // Toggle visibility for a specific div
  const toggleVisibility = (index: number) => {
    const updatedVisibility = [...isVisible];
    updatedVisibility[index] = !updatedVisibility[index];
    setIsVisible(updatedVisibility);
  };
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const scrollContainerRefNext = useRef<HTMLDivElement | null>(null);


  
  
    const scrollLeft = () => {
      scrollContainerRef.current?.scrollBy({
        left: -300, // Adjust the value to scroll more or less
        behavior: "smooth",
      });
    };

    const scrollLeftLear = () => {
        scrollContainerRefNext.current?.scrollBy({
          left: -300, // Adjust the value to scroll more or less
          behavior: "smooth",
        });
      };
  
    const scrollRight = () => {
        scrollContainerRef.current?.scrollBy({
        left: 300, // Adjust the value to scroll more or less
        behavior: "smooth",
      });
    };

    const scrollRightLear = () => {
        scrollContainerRefNext.current?.scrollBy({
        left: 300, // Adjust the value to scroll more or less
        behavior: "smooth",
      });
    };
 

    return (
        <main className=" bg-[#68bfde]">
            <section className="bg-[#c5e2d5] md:py-16 py-10 md:px-10 px-6">
                <main className="max-w-7xl mx-auto">
                    <div className="flex justify-center items-center gap-10 flex-col lg:flex-row">
                        <div className="text-center lg:text-left aos-init aos-animate" data-aos="fade-right">
                            <h2 className="lg:text-6xl text-4xl font-rubik font-normal pb-4 text-[#981d26] leading-tight">
                                New age skills-driven
                                <br />
                                B-School,
                                <span className="text-black font-bricolage font-medium">
                                    Only in
                                </span>

                            </h2>
                            <h2 className="lg:text-6xl text-4xl font-medium font-bricolage pb-5 leading-tight">
                                Digital/AI Enabled
                            </h2>
                            <p className="text-[#981d26] font-rubik font-normal lg:text-6xl text-4xl leading-tight">
                                Education
                            </p>
                        </div>
                        <div className="w-full lg:w-auto flex-shrink-0 aos-init aos-animate" data-aos="fade-left">
                            <Image alt="girl" width={440} height={440} decoding="async" src={bannermain} />
                        </div>
                    </div>
                    <div className="flex justify-center items-center flex-col text-[#ffffff] text-lg md:text-xl font-bold mt-8 gap-12 w-full flex-wrap">
                        <div className="flex flex-col justify-center items-center lg:flex-row gap-6 lg:w-[1200px] md:w-[1200px] md:ml-[-220px] lg:ml-0">
                            <button className="bg-[#E5A632] md:w-1/4 p-6 md:p-4 rounded-2xl shadow-none hover:shadow-[7px_7px_0px_0px_rgba(0,0,0,1)] text-center">
                                Short-term Courses
                            </button>
                            <button className="flex-1  md:w-1/4 bg-[#06b5c5] p-6 md:p-4 rounded-2xl shadow-none hover:shadow-[7px_7px_0px_0px_rgba(0,0,0,1)] text-center">
                                Executive Up-Skilling
                            </button>
                            <button className="flex-1  md:w-1/4 bg-[#CC6B49] p-6 md:p-4 rounded-2xl shadow-none hover:shadow-[7px_7px_0px_0px_rgba(0,0,0,1)] text-center">
                                Formal Qualification
                            </button>
                            <button className="flex-1  md:w-1/4 bg-[#981d26] p-6 md:p-4 rounded-2xl shadow-none hover:shadow-[7px_7px_0px_0px_rgba(0,0,0,1)] text-center">
                                Entrepreneurship
                            </button>
                        </div>
                    </div>
                </main>
            </section>
            <section className="bg-[#f5edd9] py-16">
                <section className="px-4 md:px-10 lg:px-15 bg-main">
                    <main className="max-w-7xl mx-auto">
                        <Titlecomponentpage title="Cohorts" titleName="based Batches for " which="Effective Learning: " colorCode="text-[#981d26]" />
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" >
                            <Cardpage Image={<Image alt="COHORT 01 Image" loading="lazy" width={400} height={400} decoding="async" data-nimg="1" className="rounded-xl mb-4 color:transparent;width:100%;height:auto" sizes="100vw" src={court} />} title="COHORT 01" titletext="PG Students" coruse="MBA/MCA/MS CA/CS/CMA " />
                            <Cardpage Image={<Image alt="COHORT 02 Image" loading="lazy" width={400} height={400} decoding="async" data-nimg="1" className="rounded-xl mb-4 color:transparent;width:100%;height:auto" sizes="100vw" src={court1} />} title="COHORT 02 (A)" titletext="Drop-outs/Career Change" coruse="Dropped out from CA/CS/CMA/CFA" />
                            <Cardpage Image={<Image alt="COHORT 03 Image" loading="lazy" width={400} height={400} decoding="async" data-nimg="1" className="rounded-xl mb-4 color:transparent;width:100%;height:auto" sizes="100vw" src={court2} />} title="COHORT 02 (B)" titletext="Drop-outs/Career Change" coruse="Not interested to do conventional PG including MBA/MCA/MS" />
                            <Cardpage Image={<Image alt="COHORT 04 Image" loading="lazy" width={400} height={400} decoding="async" data-nimg="1" className="rounded-xl mb-4 color:transparent;width:100%;height:auto" sizes="100vw" src={court3} />} title="COHORT 02 (C)" titletext="Drop-outs/Career Change" coruse="Not interested to give competitive government exams / UPSC anymore" />
                            <Cardpage Image={<Image alt="COHORT 05 Image" loading="lazy" width={400} height={400} decoding="async" data-nimg="1" className="rounded-xl mb-4 color:transparent;width:100%;height:auto" sizes="100vw" src={court4} />} title="COHORT 03" titletext="Graduates" coruse="Hotel Management | BBA/BCA with 1+ year of experience BTechs" />
                            <Cardpage Image={<Image alt="COHORT 06 Image" loading="lazy" width={400} height={400} decoding="async" data-nimg="1" className="rounded-xl mb-4 color:transparent;width:100%;height:auto" sizes="100vw" src={court5} />} title="COHORT 04" titletext="Working Professionals" coruse="with 5+ years of work experience" />
                            <Cardpage Image={<Image alt="COHORT 07 Image" loading="lazy" width={400} height={400} decoding="async" data-nimg="1" className="rounded-xl mb-4 color:transparent;width:100%;height:auto" sizes="100vw" src={court6} />} title="COHORT 05" titletext="" coruse="Startup Founders | Business Owners | Self Employed | Business Leadership | Aspirants - Content Creators/ Budding Influencers" />
                            <Cardpage Image={<Image alt="COHORT 08 Image" loading="lazy" width={400} height={400} decoding="async" data-nimg="1" className="rounded-xl mb-4 color:transparent;width:100%;height:auto" sizes="100vw" src={court7} />} title="COHORT 06" titletext="10+2 Pursuing Graduation, Schooling" coruse="10+2 Pursuing Graduation, Schooling" />
                            <Cardpage Image={<Image alt="COHORT 09 Image" loading="lazy" width={400} height={400} decoding="async" data-nimg="1" className="rounded-xl mb-4 color:transparent;width:100%;height:auto" sizes="100vw" src={court8} />} title="COHORT 07" titletext="Entrepreneurship" coruse="" />
                        </div>
                        <div><button className="mt-16 p-4 rounded-2xl md:text-2xl text-[#ffffff] text-md flex font-medium mx-auto hover:bg-[#06b5c5] bg-[#06b5c5] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">Check - Online | In-Class | Hybrid</button></div>
                    </main>
                </section>
            </section>
            <section className="bg-[#c5e2d5] md:py-16 py-10 px-10">
                <section className="px-4 py-8 md:px-4 lg:px-0 mx-auto max-w-7xl">
                    <Titlecomponentpage title="Total" titleName="Employment" which="" colorCode="text-[#981d26]" />
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 ">
                        <Card2page title="Side Gigs" li={<ul className="space-y-1 text-md text-black font-semibold"><li>Internships</li><li>Freelancing</li></ul>} colorCode="#e5a632" />
                        <Card2page title="Job Centric" li={<ul className="space-y-1 text-md text-black font-semibold"><li>Placements</li><li>New-Gen Job Opportunities</li></ul>} colorCode="#d06c49" />
                        <Card2page title="Career Centric" li={<ul className="space-y-1 text-md text-black font-semibold"><li>Appraisal</li><li>Industry Change</li><li>Profile Switch</li><li>Intrapreneurship</li></ul>} colorCode="#e5a632" />
                        <Card2page title="Career Centric" li={<ul className="space-y-1 text-md text-black font-semibold"><li>Business Owners</li><li>Start-Up</li><li>Content Creation</li><li>Freelancing Career</li></ul>} colorCode="#d06c49" />
                    </div>
                </section>
            </section>
            <section className="bg-[#f5edd9] md:py-16 py-10 px-10">
                <section className="px-4 py-8 md:px-4 lg:px-0 mx-auto max-w-7xl">
                    <Titlecomponentpage title="Qualification" titleName="Pathway" which="" colorCode="text-black" />
                    <div className="flex flex-col gap-6">
                        <SimpleCardPage title="Cohorts" titleSubHeading="High-School (Class 9-12)" button="Immersive Programs" buttonDes="Summer/Winter Camps in Digital Social Media" li={<ul className="mt-2 list-disc pl-5 text-gray-500 text-lg"><li className="mt-1">High-School (Class 9-12)</li></ul>} />
                        <SimpleCardPage title="Cohorts" titleSubHeading="10+2 | Under-graduates| Graduates" button="Immersive Programs" buttonDes="Certificate Program (CP) in Digital Marketing & Analytics" li={<ul className="mt-2 list-disc pl-5 text-gray-500 text-lg"><li className="mt-1">10+2 Schooling</li><li className="mt-1">Graduates</li><li className="mt-1">Drop-outs</li></ul>} />
                        <SimpleCardPage title="Cohorts" titleSubHeading="Post-Graduation" button="Formal Qualification" buttonDes="Post Graduate Program (PGP) in Digital Social Media & AI Enablement" li={<ul className="mt-2 list-disc pl-5 text-gray-500 text-lg"><li className="mt-1">Working Professionals</li><li className="mt-1">Drop-Outs From CA/CS | Govt Exams</li><li className="mt-1">Not Interested To Pursue Conventional PG Degree</li><li className="mt-1">Min Qualification - Graduate</li></ul>} />
                        <SimpleCardPage title="Cohorts" titleSubHeading="Working Professional" button="Executive Up-Skilling" buttonDes="Executive Certificate Program (ECP) in Digital Social Media & AI Enablement" li={<ul className="mt-2 list-disc pl-5 text-gray-500 text-lg"><li className="mt-1">Graduates</li><li className="mt-1">Working Professionals (Mid-Senior)</li><li className="mt-1">PG Students</li><li className="mt-1">Working Professionals (Mid-Senior)</li><li className="mt-1">Drop-Outs From CA/CS | Govt Exams</li><li className="mt-1">Min 1 Year Work Ex + Graduate</li></ul>} />
                        <SimpleCardPage title="Cohorts" titleSubHeading="Senior Leadership" button="C-Suite" buttonDes="Master Class Certificate Program  (MCCP) in Digital Social Media & AI Enablement" li={<ul className="mt-2 list-disc pl-5 text-gray-500 text-lg"><li className="mt-1">Working Professionals With Min 5 Years Of Work Experience</li><li className="mt-1">At Leadership/C-Level Position</li></ul>} />
                        <SimpleCardPage title="Cohorts" titleSubHeading="Business Owners/Start-Ups" button="Entrepreneurship" buttonDes="Digital Entrepreneurship Certificate Program (DECP) in Digital Social Media & AI Enablement" li={<ul className="mt-2 list-disc pl-5 text-gray-500 text-lg"><li className="mt-1">Everyone Aiming To Pursue Entrepreneurship</li><li className="mt-1">With A Business Plan And A Registered Company At His/Her Own Name</li></ul>} />
                    </div>

                </section>

            </section>
            <main className="flex items-center justify-center p-4 bg-[#f5edd9]">
                <div className="relative overflow-hidden bg-main">
                    <div className="flex gap-4">
                        <Marquee
                            direction="rtl"
                            velocity={30}
                            scatterRandomly={false}
                            resetAfterTries={3}
                            onInit={() => console.log("Marquee initialized")}
                            onFinish={() => console.log("Marquee finished")}
                        >
                            <ImageCardPage imageSrc="/cardImage/1.webp" />
                            <ImageCardPage imageSrc="/cardImage/2.webp" />
                            <ImageCardPage imageSrc="/cardImage/3.webp" />
                            <ImageCardPage imageSrc="/cardImage/4.webp" />
                            <ImageCardPage imageSrc="/cardImage/5.webp" />
                            <ImageCardPage imageSrc="/cardImage/6.webp" />
                            <ImageCardPage imageSrc="/cardImage/7.webp" />
                            <ImageCardPage imageSrc="/cardImage/8.webp" />
                        </Marquee>

                    </div>
                </div>
            </main>
            <section className=" p-6 md:p-10 lg:px-20 md:py-20 py-16 bg-[#c5e2d5] text-center">
                <div className="max-w-[1400px] mx-auto flex items-center flex-col">
                    <div className="flex justify-left gap-4 lg:gap-10 mb-8 flex-col md:flex-row md:items-center aos-init aos-animate" data-aos="fade-right" >
                        <div className="border-[1px] border-black w-[28%]"></div>
                        <div className="text-left w-full md:w-[60%] lg:w-[40%] font-bricolage_grotesque">
                            <h2 className="md:text-5xl text-5xl font-bold mb-8 font-bricolage">
                                Not just any other
                                <br />
                                <span className="text-[#981d26]">B-School</span>
                            </h2>
                            <p className="mb-10">Backed up by a digital agency and a community of digital social media professionals. Giving iMET a unique edge with “Teach what we practice. And Practice what we teach</p>
                        </div>
                    </div>
                    <Image alt="" loading="lazy" width="600" height="100" decoding="async" data-nimg="1" className="text-center hidden lg:block md:-mb-[80px] -rotate-[15deg]" src={arrow} />
                    <div className="flex flex-col lg:flex-row justify-center items-center gap-8 md:gap-6 ">
                        <div className="flex flex-col lg:w-[70%] ">
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full mx-auto ">
                                <Card3page title="Helped" subtitle="65+" phara="Institutes" image={<Image alt="Image for Helped" loading="lazy" width="100" height="50" decoding="async" data-nimg="1" className="mt-4 rounded-xl shadow w-[200px] mx-auto mb-6" src={image1} />} />
                                <Card3page title="Trained" subtitle="30k+" phara="Students" image={<Image alt="Image for Helped" loading="lazy" width="100" height="50" decoding="async" data-nimg="1" className="mt-4 rounded-xl shadow w-[200px] mx-auto mb-6" src={image2} />} />
                                <Card3page title="Trained" subtitle="1.5+" phara="Professionals" image={<Image alt="Image for Helped" loading="lazy" width="100" height="50" decoding="async" data-nimg="1" className="mt-4 rounded-xl shadow w-[200px] mx-auto mb-6" src={image3} />} />
                            </div>
                        </div>
                        <div className="flex flex-col gap-6 items-center lg:w-[40%] w-full px-12">
                            <div className="bg-[#06b5c5] rounded-md w-full p-4 text-center text-[#ffffff] flex flex-col items-center shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:shadow-none" >
                                <h3 className="text-3xl font-bold text-black">
                                    Nationalities Covered
                                </h3>
                                <p className="text-xl my-6">Countries Represented:</p>
                                <div className="flex flex-wrap justify-center gap-4 ">
                                    <Image alt="Flag 0" loading="lazy" width="70" height="25" decoding="async" data-nimg="1" className="rounded shadow border-2 border-[#ffffff]" src={image4} />
                                    <Image alt="Flag 0" loading="lazy" width="70" height="25" decoding="async" data-nimg="1" className="rounded shadow border-2 border-[#ffffff]" src={image4} />
                                    <Image alt="Flag 0" loading="lazy" width="70" height="25" decoding="async" data-nimg="1" className="rounded shadow border-2 border-[#ffffff]" src={image4} />
                                    <Image alt="Flag 0" loading="lazy" width="70" height="25" decoding="async" data-nimg="1" className="rounded shadow border-2 border-[#ffffff]" src={image4} />
                                    <Image alt="Flag 0" loading="lazy" width="70" height="25" decoding="async" data-nimg="1" className="rounded shadow border-2 border-[#ffffff]" src={image4} />
                                    <Image alt="Flag 0" loading="lazy" width="70" height="25" decoding="async" data-nimg="1" className="rounded shadow border-2 border-[#ffffff]" src={image4} />
                                    <Image alt="Flag 0" loading="lazy" width="70" height="25" decoding="async" data-nimg="1" className="rounded shadow border-2 border-[#ffffff]" src={image4} />
                                    <Image alt="Flag 0" loading="lazy" width="70" height="25" decoding="async" data-nimg="1" className="rounded shadow border-2 border-[#ffffff]" src={image4} />
                                    <Image alt="Flag 0" loading="lazy" width="70" height="25" decoding="async" data-nimg="1" className="rounded shadow border-2 border-[#ffffff]" src={image4} />
                                </div>

                            </div>

                            <div className="bg-[#ff0000] w-full  rounded-md p-4 text-center text-[#ffffff] shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:shadow-none">
                                <p className="text-2xl my-6 capitalize"><span className="text-3xl font-semibold">Now... </span><br />learner’s can directly enrol for iMET’s qualifications</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <button className="mt-16 p-4 rounded-2xl md:text-2xl text-[#ffffff] text-md flex font-medium mx-auto hover:bg-[#06b5c5] bg-[#06b5c5] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">Check - Online | In-Class | Hybrid</button>
                </div>
            </section>
            <section className="bg-[#e5a632] md:py-24 py-10 px-10">
                <main className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center">
                    <div className=""><div className="text-center lg:text-left aos-init aos-animate" data-aos="fade-right"><h2 className="lg:text-6xl text-6xl font-rubik font-normal pb-4 text-[#06b5c5] leading-tight">IVY League<br /><span className="text-black font-bricolage font-medium"></span> </h2><div><h2 className="lg:text-6xl text-4xl font-medium font-bricolage pb-5 leading-tight text-black">Curriculum</h2></div><p className="text-[#931c25] font-rubik font-normal lg:text-xl text-lg leading-tight">Corporate approved curriculum with IVY League delivery format</p></div><div className="mb-10 md:mb-0 flex justify-center md:items-start md:justify-start items-center"><div><button className="mt-6 p-4 md:text-xl text-md flex font-medium bg-[#06b5c5] hover:bg-[#06b5c5] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] text-[#ffffff] rounded-lg">Explore Program</button></div></div></div><div className="rounded-xl border-2 mt-6"><iframe width="560" height="315" src="https://www.youtube.com/embed/fBGPGEoAvbM?autoplay=1&amp;mute=1&amp;controls=0&amp;loop=1&amp;playlist=fBGPGEoAvbM&amp;si=uMI1fS2KicrCb_H8" title="YouTube video player" className="rounded-2xl border-4 border-black md:w-[560px] w-[400px] z-10" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" loading="lazy"></iframe></div></main></section>
            <section className="bg-[#f5edd9] flex justify-left lg:gap-10 flex-col md:flex-row md:items-center px-10 ">
                <div className="w-full max-w-7xl mx-auto p-4">
                    <Titlecomponentpage title="The" titleName="iMET Global" which="Advantage" colorCode="text-[#981d26]" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
                        <Card4Page title="Paid Internships" dec="Upon 50% course completion" />
                        <Card4Page title="Placements" dec="Upon 50% course completion" />
                        <Card4Page title="No theoretical written tests/exams" dec="Only practical and market-centric assessments" />
                        <Card4Page title="Flexible Course Delivery" dec="Offers | Hybrid | classes" />
                        <Card4Page title="Flexible Fees Payment Options" dec="with scholarship and concessions" />
                        <Card4Page title="Flexible Timings" dec="weekdays and weekend batches" />
                        <Card4Page title="Designed Curriculum" dec="appraised by industry professionals (not professors)" />
                        <Card4Page title="Spirituality2Productivity" dec="special sessions for enhanced mental and professional growth" />
                        <Card4Page title="Specialisations/Elective Subjects" dec="based on qualifications,  industry, experience and country/region" />
                        <Card4Page title="Diversity in Delivery" dec="Approach for className room sessions based on learners’ as: Freshers | With Work Ex (Entry, Middle & Senior)" />
                        <Card4Page title="Practitioners as Professionals (PAP)" dec="Global interface and Professional Acclimatization with a GuruPool of Industry Experts and Practitioners" />
                        <Card4Page title="Of-For-By Corporates" dec="Driven by 100% Corporate Character to impart formal professional education with Office style B-School" />
                    </div>
                    <div className="mt-8 text-center flex gap-5 flex-col lg:flex-row">
                        <div className="bg-[#ffffff] lg:h-36 justify-center items-center p-4 rounded-lg inline-block lg:w-1/2 shadow-[7px_7px_0px_0px_rgba(0,0,0,1)] hover:shadow-none">
                            <h3 className="font-semibold mb-2 text-[#931c25] text-2xl">UNESCO endorsed alumni status</h3>
                            <p className="text-lg text-gray-600">Learners get the alumni status along with UNESCO endorsd student identity card, valid in 125+ countries across the globe.</p>
                        </div>
                        <div className="lg:w-1/2 flex flex-col justify-center items-center gap-4 p-2">
                            <h2 className="text-lg text-center">
                                iMET is a global community to develop, promote and encourage
                                <span className="text-black font-bold ">
                                    Innovation, Mentorship, Entrepreneurship and Talent Building
                                </span>
                                with Practitioner’s or Doer’s perspective.
                            </h2>
                            <a className="text-[#ffffff] bg-black p-4 rounded-full font-bold text-lg hover:underline" href="/about">
                                Know More
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="px-4 md:px-8 lg:px-16 py-8 bg-[#c5e2d5]">
                <div className="overflow-x-auto rounded-lg border-main max-w-[1700px] mx-auto">
                    <Titlecomponentpage title="" titleName="Alliances | Partnerships | Institutes" which="Served" colorCode="text-[#941c25]" />
                </div>
                <TablePage />
            </section>
            <section className="bg-[#f5edd9] py-24 px-4 md:px-16 lg:px-32 text-center">
                <main className="max-w-7xl mx-auto">
                    <Titlecomponentpage title="" titleName="Career Prospects " which="and Placement" colorCode="text-[#941c25]" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Card5Page icon={<Image alt="..." width={100} height={100} src={newicon1} />} heading="Internships | LIVE Assignments" subHeading="10K+ per month Stipend" colorCode="bg-[#e4a532]" />
                        <Card5Page icon={<Image alt="..." width={100} height={100} src={newicon2} />} heading="Placements for Students" subHeading="1st year (3L+) 2nd year(5L+) 3rd year(8L+)" colorCode="bg-[#06b5c5]" />
                        <Card5Page icon={<Image alt="..." width={100} height={100} src={newicon3} />} heading="Lateral Placements for Working Professionals" subHeading="Min 30% increment on present CTC" colorCode="bg-[#cc6b49]" />
                    </div>
                </main>
                <div className="flex justify-center items-center">
                    <div>
                        <button className="mt-6 p-4 md:text-xl text-lg text-md flex font-medium bg-[#06b5c5] hover:bg-[#06b5c5] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] text-[#ffffff] rounded-lg">
                            Apply for free Counseling
                        </button>
                    </div>
                </div>
            </section>
            <section className="px-4 md:px-8 lg:px-16 py-8 bg-[#c5e2d5]">
                <main className="max-w-7xl mx-auto">
                    <div className="overflow-x-auto rounded-lg border-main max-w-[1700px] mx-auto">
                        <Titlecomponentpage title="" titleName="How to " which="Enroll" colorCode="text-[#941c25]" />
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Card6Page icon={<Image alt="..." width={100} height={100} src={icon} />} heading="Send Email Application" subHeading="Learner can apply by sending his/her profile and admission request at contact@imetglobal.com OR WhatsApp at +91-9810409943" colorCode="bg-[#e4a532]" />
                            <Card6Page icon={<Image alt="..." width={100} height={100} src={icon1} />} heading="Admission Counselling Session" subHeading="After receiving the application, we will fix a half an hour Admission Counselling Session (ACS) with our Learning & Development Team" colorCode="bg-[#06b5c5]" />
                            <Card6Page icon={<Image alt="..." width={100} height={100} src={icon2} />} heading="Enrollment Finalisation" subHeading="After attending ACS, an admission representative will connect with learner to complete the enrollment process and generate a unique Learner ID." colorCode="bg-[#cc6b49]" />
                        </div>
                    </div>
                </main>
                <div><button className="mt-16 p-4 rounded-2xl md:text-2xl text-[#ffffff] text-md flex font-medium mx-auto hover:bg-[#06b5c5] bg-[#06b5c5] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">Check - Online | In-Class | Hybrid</button></div>
            </section>
            <section className="bg-[#f5edd9] py-14 aos-init aos-animate" data-aos="fade-up">
                <main className="max-w-7xl mx-auto">
                    <div className="flex justify-left gap-4 lg:gap-10 mb-8 flex-col md:flex-row md:items-center aos-init aos-animate" data-aos="fade-right">
                        <div className="border-[1px] border-black w-[28%]"></div>
                        <div className="text-left w-full md:w-[60%] lg:w-[45%] font-bricolage_grotesque">
                            <h2 className="md:text-6xl text-5xl text-[#06b5c5] font-bold mb-4 pt-4 md:pt-0 font-bricolage">
                                Gurupool
                            </h2>
                        </div>
                    </div>
                    <div className="relative w-full">
                        
                            <div className="flex -ml-4 overflow-hidden no-scrollbar" ref={scrollContainerRef} >
                                <Card7Page icon={<Image alt="Deepak Goel" loading="lazy" width="560" height="200" decoding="async" className="object-cover mb-4 rounded-2xl" src={m1} />} heading="Deepak Goel" subHeading="Global Strategy | Media Planning | Celebrity Marketing" />
                                <Card7Page icon={<Image alt="Deepak Goel" loading="lazy" width="560" height="200" decoding="async" className="object-cover mb-4 rounded-2xl" src={m2} />} heading="Ms Lorraine S Young" subHeading="Digital Story Telling | Content | ORM" />
                                <Card7Page icon={<Image alt="Deepak Goel" loading="lazy" width="560" height="200" decoding="async" className="object-cover mb-4 rounded-2xl" src={m3} />} heading="Kartik Sharma" subHeading="IOT | Digital Transformation" />
                                <Card7Page icon={<Image alt="Deepak Goel" loading="lazy" width="560" height="200" decoding="async" className="object-cover mb-4 rounded-2xl" src={m4} />} heading="Stephen Dantas" subHeading="IOT | Digital Transformation" />
                                <Card7Page icon={<Image alt="Deepak Goel" loading="lazy" width="560" height="200" decoding="async" className="object-cover mb-4 rounded-2xl" src={m5} />} heading="Dr. Latika Sahni" subHeading="Creative Quotient Enhancement | Spirituality | Productivity | Communication Skills" />
                                <Card7Page icon={<Image alt="Deepak Goel" loading="lazy" width="560" height="200" decoding="async" className="object-cover mb-4 rounded-2xl" src={m6} />} heading="Pallab Mitra" subHeading="IOT | Digital Transformation" />
                                <Card7Page icon={<Image alt="Deepak Goel" loading="lazy" width="560" height="200" decoding="async" className="object-cover mb-4 rounded-2xl" src={m7} />} heading="Sandipan Ray" subHeading="Case Study - Sales and Start-ups" />
                                <Card7Page icon={<Image alt="Deepak Goel" loading="lazy" width="560" height="200" decoding="async" className="object-cover mb-4 rounded-2xl" src={m8} />} heading="Rajesh Kumar" subHeading="Search Engine Marketing | Search Engine Optimization" />
                                <Card7Page icon={<Image alt="Deepak Goel" loading="lazy" width="560" height="200" decoding="async" className="object-cover mb-4 rounded-2xl" src={m9} />} heading="Vivek Mahindru" subHeading="Language Proficiency | Content" />
                                <Card7Page icon={<Image alt="Deepak Goel" loading="lazy" width="560" height="200" decoding="async" className="object-cover mb-4 rounded-2xl" src={m10} />} heading="Aditya Vidyasagar" subHeading="Language Proficiency | Content" />
                                <Card7Page icon={<Image alt="Deepak Goel" loading="lazy" width="560" height="200" decoding="async" className="object-cover mb-4 rounded-2xl" src={m11} />} heading="Dr. Amit Nagpal" subHeading="Digital Story Telling | Content | ORM" />
                                <Card7Page icon={<Image alt="Deepak Goel" loading="lazy" width="560" height="200" decoding="async" className="object-cover mb-4 rounded-2xl" src={m12} />} heading="Dr. Rishi R Singh" subHeading="Systematic Thinking | Right Brain Activation" />
                                <Card7Page icon={<Image alt="Deepak Goel" loading="lazy" width="560" height="200" decoding="async" className="object-cover mb-4 rounded-2xl" src={m13} />} heading="Shamshir Rai Luthra" subHeading="Visual Impact | Spirituality" />
                            </div>
                        
                        <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input shadow-sm hover:text-accent-foreground h-8 w-8 top-1/2 absolute scale-150 z-30 md:left-0 left-[2px] transform -translate-y-1/2 bg-[#68bfde] p-2 rounded-full text-[#ffffff] hover:bg-[#981d26] transition" onClick={scrollLeft}><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4"><path d="M6.85355 3.14645C7.04882 3.34171 7.04882 3.65829 6.85355 3.85355L3.70711 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70711L6.85355 11.1464C7.04882 11.3417 7.04882 11.6583 6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645L6.14645 3.14645C6.34171 2.95118 6.65829 2.95118 6.85355 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg><span className="sr-only">Previous slide</span></button>
                        <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input shadow-sm hover:text-accent-foreground h-8 w-8 top-1/2 absolute scale-150 z-30 md:right-0 right-[2px] transform -translate-y-1/2 bg-[#68bfde] p-2 rounded-full text-[#ffffff] hover:bg-[#981d26] transition" onClick={scrollRight}><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg><span className="sr-only">Next slide</span></button>
                    </div>
                </main>
            </section>
            <section className="bg-[#c5e2d5] py-12">
                <div className="container mx-auto max-w-7xl px-4">
                    <Titlecomponentpage title="" titleName="Hear From " which="Our Learners" colorCode="text-[#981d26]" />
                    <div className="flex  justify-center">
                        <div className="relative w-full max-w-[1350px] ">
                            <div className="relative" role="region" aria-roledescription="carousel">
                                
                                    <div className="flex -ml-4 px-2 overflow-hidden no-scrollbar" ref={scrollContainerRefNext}>
                                        <Card8Page imag={<Image alt="Stefania Procida's picture" loading="lazy" width="64" height="64" decoding="async" data-nimg="1" className="w-16 h-16 rounded-full object-cover" src={icon} />} title="Stefania Procida Batch 2021 | Italy" titleDisc="I would like to thank you for succeeding in conveying during your lectures the enthusiasm of learning new ways of communicating, but above all transporting us all into the fascinating changing world of digital and media. Your dedication and joy have been a great example and a great stimulus to our curiosity." />
                                        <Card8Page imag={<Image alt="Stefania Procida's picture" loading="lazy" width="64" height="64" decoding="async" data-nimg="1" className="w-16 h-16 rounded-full object-cover" src={icon} />} title="Stefania Procida Batch 2021 | Italy" titleDisc="I would like to thank you for succeeding in conveying during your lectures the enthusiasm of learning new ways of communicating, but above all transporting us all into the fascinating changing world of digital and media. Your dedication and joy have been a great example and a great stimulus to our curiosity." />
                                        <Card8Page imag={<Image alt="Stefania Procida's picture" loading="lazy" width="64" height="64" decoding="async" data-nimg="1" className="w-16 h-16 rounded-full object-cover" src={icon} />} title="Stefania Procida Batch 2021 | Italy" titleDisc="I would like to thank you for succeeding in conveying during your lectures the enthusiasm of learning new ways of communicating, but above all transporting us all into the fascinating changing world of digital and media. Your dedication and joy have been a great example and a great stimulus to our curiosity." />
                                        <Card8Page imag={<Image alt="Stefania Procida's picture" loading="lazy" width="64" height="64" decoding="async" data-nimg="1" className="w-16 h-16 rounded-full object-cover" src={icon} />} title="Stefania Procida Batch 2021 | Italy" titleDisc="I would like to thank you for succeeding in conveying during your lectures the enthusiasm of learning new ways of communicating, but above all transporting us all into the fascinating changing world of digital and media. Your dedication and joy have been a great example and a great stimulus to our curiosity." />
                                        <Card8Page imag={<Image alt="Stefania Procida's picture" loading="lazy" width="64" height="64" decoding="async" data-nimg="1" className="w-16 h-16 rounded-full object-cover" src={icon} />} title="Stefania Procida Batch 2021 | Italy" titleDisc="I would like to thank you for succeeding in conveying during your lectures the enthusiasm of learning new ways of communicating, but above all transporting us all into the fascinating changing world of digital and media. Your dedication and joy have been a great example and a great stimulus to our curiosity." />
                                        <Card8Page imag={<Image alt="Stefania Procida's picture" loading="lazy" width="64" height="64" decoding="async" data-nimg="1" className="w-16 h-16 rounded-full object-cover" src={icon} />} title="Stefania Procida Batch 2021 | Italy" titleDisc="I would like to thank you for succeeding in conveying during your lectures the enthusiasm of learning new ways of communicating, but above all transporting us all into the fascinating changing world of digital and media. Your dedication and joy have been a great example and a great stimulus to our curiosity." />
                                    </div>
                                
                                    <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input shadow-sm hover:bg-accent hover:text-accent-foreground h-8 w-8 absolute md:-left-4 left-0 top-1/2 transform -translate-y-1/2           bg-[#06b5c5] text-[#ffffff] p-2 rounded-full" onClick={scrollLeftLear}><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4"><path d="M6.85355 3.14645C7.04882 3.34171 7.04882 3.65829 6.85355 3.85355L3.70711 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70711L6.85355 11.1464C7.04882 11.3417 7.04882 11.6583 6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645L6.14645 3.14645C6.34171 2.95118 6.65829 2.95118 6.85355 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg><span className="sr-only">Previous slide</span></button>
                                < button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input shadow-sm hover:bg-accent hover:text-accent-foreground h-8 w-8 absolute md:-right-4 right-4 top-1/2 transform -translate-y-1/2 bg-[#06b5c5] text-[#ffffff] p-2 rounded-full" onClick={scrollRightLear}><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg><span className="sr-only">Next slide</span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-[#f5edd9] py-16">
                <div className="max-w-7xl mx-auto">
                    <Titlecomponentpage title="" titleName="Go Digital" which="Or Die" colorCode="text-[#981d26]" />
                    <section>
                        <div className="max-w-7xl mx-auto">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
                                <Card9Page imag={<Image alt="Tech Layoffs Impact At Least 8,000 Individuals In India In 2024 As Firms Cut Down Jobs To Reduce Costs" loading="lazy" decoding="async" data-nimg="fill" className="object-cover transition-transform duration-300 group-hover:scale-110" src={imet} />} title="Technology" titleHeading="Tech Layoffs Impact At Least 8,000 Individuals In India In 2024 As Firms Cut Down Jobs To Reduce Costs" discription="Layoffs.fyi, a real-time layoff tracker in the tech industry, found that the highest number of layoffs in the country came from Paytm which announced a job cut for at least 3,500 employees in June..." icon={<Image alt="Tech Layoffs Impact At Least 8,000 Individuals In India In 2024 As Firms Cut Down Jobs To Reduce Costs" loading="lazy" decoding="async" data-nimg="fill" className="object-cover transition-transform duration-300 group-hover:scale-110" src={ABP} />} iconDesc="ABP News " />
                                <Card9Page imag={<Image alt="Tech Layoffs Impact At Least 8,000 Individuals In India In 2024 As Firms Cut Down Jobs To Reduce Costs" loading="lazy" decoding="async" data-nimg="fill" className="object-cover transition-transform duration-300 group-hover:scale-110" src={angryBoy} />} title="Education" titleHeading="India's skill gap is stealing futures: How right education can tackle the job crisis" discription="India's education system needs urgent reform to bridge the skills gap, which can help solve the unemployment issue...." icon={<Image alt="Tech Layoffs Impact At Least 8,000 Individuals In India In 2024 As Firms Cut Down Jobs To Reduce Costs" loading="lazy" decoding="async" data-nimg="fill" className="object-cover transition-transform duration-300 group-hover:scale-110" src={TodayIndia} />} iconDesc="India Today " />
                                <Card9Page imag={<Image alt="Tech Layoffs Impact At Least 8,000 Individuals In India In 2024 As Firms Cut Down Jobs To Reduce Costs" loading="lazy" decoding="async" data-nimg="fill" className="object-cover transition-transform duration-300 group-hover:scale-110" src={imet1} />} title="Finance, Technology" titleHeading="At Least 8,000 Lose Jobs as India's Startups, Big Tech Focus on Profits, AI" discription="Across the world, over 1.30 lakh layoffs have taken place this year alone, including major ones among the Big Tech..." icon={<Image alt="Tech Layoffs Impact At Least 8,000 Individuals In India In 2024 As Firms Cut Down Jobs To Reduce Costs" loading="lazy" decoding="async" data-nimg="fill" className="object-cover transition-transform duration-300 group-hover:scale-110" src={Quint} />} iconDesc="The Quint" />
                                <Card9Page imag={<Image alt="Tech Layoffs Impact At Least 8,000 Individuals In India In 2024 As Firms Cut Down Jobs To Reduce Costs" loading="lazy" decoding="async" data-nimg="fill" className="object-cover transition-transform duration-300 group-hover:scale-110" src={imet3} />} title="Education" titleHeading="Find out how this B-School is shaping a bright future for its students" discription="The placement cell at Jaipuria with their unflinching commitment and adaptive approach to new normal is all set for another excellent placement season. With over 55 new recruiters along with an existing 375 is racing to finish the placement ahead of time...." icon={<Image alt="Tech Layoffs Impact At Least 8,000 Individuals In India In 2024 As Firms Cut Down Jobs To Reduce Costs" loading="lazy" decoding="async" data-nimg="fill" className="object-cover transition-transform duration-300 group-hover:scale-110" src={HinduTimes} />} iconDesc="Hindustan Times" />
                            </div>
                        </div>
                    </section>
                </div>
            </section>
            <section className="bg-[#c5e2d5] py-10 px-4 md:px-20">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-black-600 text-3xl md:text-4xl font-bold mb-2 font-bricolage">
                        8 additional sessions with special emphasis on iMET:
                    </h2>
                    <p className="text-black text-lg mb-8">
                        Innovation, Mentoring, Entrepreneurship, Talent Building for Professional Character Building and Spiritual Development
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Card10Page imag={<Image alt="I : innovation - TiM (Total innovation Management)" loading="lazy" width="100" height="150" decoding="async" data-nimg="1" className="object-contain" src={ss1} />} heading="I : innovation - TiM (Total innovation Management)" />
                        <Card10Page imag={<Image alt="I : innovation - TiM (Total innovation Management)" loading="lazy" width="100" height="150" decoding="async" data-nimg="1" className="object-contain" src={ss2} />} heading="M : Mentoring - Holistic professional grooming" />
                        <Card10Page imag={<Image alt="I : innovation - TiM (Total innovation Management)" loading="lazy" width="100" height="150" decoding="async" data-nimg="1" className="object-contain" src={ss3} />} heading="E : Entrepreneurship - I2E (Idea 2 Execution) Workshop" />
                        <Card10Page imag={<Image alt="I : innovation - TiM (Total innovation Management)" loading="lazy" width="100" height="150" decoding="async" data-nimg="1" className="object-contain" src={ss4} />} heading="T : Talent Building - CCC (Career Continuity Cohort)" />
                    </div>
                    <div><button className="mt-16 p-4 rounded-2xl md:text-2xl text-[#ffffff] text-md flex font-medium mx-auto hover:bg-[#06b5c5] bg-[#931c25] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">Apply for Pradurbhav Scholarships</button></div>
                </div>
            </section>
            <section className="py-10 bg-[#f5edd9]">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <Titlecomponentpage title="" titleName="In The " which="Spotlight" colorCode="text-[#931c25]" />

                    <div className="flex flex-col md:flex-row items-center justify-center gap-10 aos-init aos-animate" data-aos="fade-up">
                        <div className="w-full md:w-1/2 mb-6 md:mb-0">
                            <div>
                                <Image alt="Tab 1" loading="lazy" width="800" height="600" decoding="async" data-nimg="1" className="w-full relative h-64 md:h-96 bg-gray-300 lg:hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] shadow-none rounded-[79px] overflow-hidden" src={GallaryBig} />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 w-full md:w-1/2">
                            <Imagebutton imge={<Image alt="Tab 1" loading="lazy" width="400" height="300" decoding="async" data-nimg="1" className="h-full w-full rounded-3xl object-cover" src={Gallary1} />} />
                            <Imagebutton imge={<Image alt="Tab 1" loading="lazy" width="400" height="300" decoding="async" data-nimg="1" className="h-full w-full rounded-3xl object-cover" src={Gallary2} />} />
                            <Imagebutton imge={<Image alt="Tab 1" loading="lazy" width="400" height="300" decoding="async" data-nimg="1" className="h-full w-full rounded-3xl object-cover" src={Gallary3} />} />
                            <Imagebutton imge={<Image alt="Tab 1" loading="lazy" width="400" height="300" decoding="async" data-nimg="1" className="h-full w-full rounded-3xl object-cover" src={Gallary4} />} />
                        </div>
                    </div>
                    <div><button className="mt-16 p-4 rounded-2xl md:text-2xl text-[#ffffff] text-md flex font-medium mx-auto hover:bg-[#06b5c5] bg-[#06b5c5] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">Visit Gallery</button></div>
                </div>
            </section>

            <section className="py-10  bg-[#c5e2d5] px-8 md:px-0">
                <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10 aos-init aos-animate" data-aos="fade-right"  >
                        <div className="hidden md:block border-[1px] border-black w-full md:w-[28%]"></div>
                        <div className="text-center md:text-left w-full md:w-[60%] lg:w-[50%]">
                            <h2 className="md:text-6xl text-5xl font-bold mb-8 font-bricolage"
                            >Innovation
                                <br />
                                <span className="text-[#931c25]">
                                    center
                                </span>
                            </h2>
                        </div>
                        <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-[#18181b] text-[#ffffff] shadow hover:bg-[#18181b]/90 h-9 w-full md:w-auto p-4 md:p-6 my-4 md:my-8"><a href="https://www.youtube.com/@imetglobalnewdelhi">Learn More</a></button>
                    </div>
                    <div className="mt-10 relative w-full aos-init aos-animate" data-aos="fade-left">
                        <div className="relative w-full" role="region" aria-roledescription="carousel">
                            <div className="overflow-hidden">
                                <div className="flex -ml-4 px-4">
                                    <YoutubeCardPage ifrm={<iframe src="https://www.youtube.com/embed/h3QyJeA8BZg?si=TEaDYC5h5P8mpeJ3?autoplay=0&amp;controls=1" className="absolute inset-0 w-full h-full rounded-2xl z-10" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" title="Our Journey" loading="lazy"  ></iframe>} />
                                    <YoutubeCardPage ifrm={<iframe src="https://www.youtube.com/embed/h3QyJeA8BZg?si=TEaDYC5h5P8mpeJ3?autoplay=0&amp;controls=1" className="absolute inset-0 w-full h-full rounded-2xl z-10" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" title="Our Journey" loading="lazy"  ></iframe>} />
                                    <YoutubeCardPage ifrm={<iframe src="https://www.youtube.com/embed/h3QyJeA8BZg?si=TEaDYC5h5P8mpeJ3?autoplay=0&amp;controls=1" className="absolute inset-0 w-full h-full rounded-2xl z-10" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" title="Our Journey" loading="lazy"  ></iframe>} />
                                    <YoutubeCardPage ifrm={<iframe src="https://www.youtube.com/embed/h3QyJeA8BZg?si=TEaDYC5h5P8mpeJ3?autoplay=0&amp;controls=1" className="absolute inset-0 w-full h-full rounded-2xl z-10" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" title="Our Journey" loading="lazy"  ></iframe>} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-24 bg-[#f5edd9]">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <Titlecomponentpage title="" titleName="iMET Global" which="Social Sphere" colorCode="text-[#931c25]" />
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mx-auto">
                        <a href="https://facebook.com/imetglobal" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center p-4 bg-[#ffffff] hover:shadow-lg rounded-lg transition-transform transform hover:scale-105 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]"><div className="flex flex-row-reverse items-center gap-2 mb-4"><span className="text-2xl font-bold text-black  -mb-[px]">Facebook</span><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="text-[#0866FF]" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"></path></svg></div><Image alt="Facebook" loading="lazy" width="1200" height="100" decoding="async" data-nimg="1" className="mb-4 w-[400px] rounded-md" src={Cimg1} />  </a>
                        <a href="https://www.linkedin.com/company/imet-global/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center p-4 bg-[#ffffff] hover:shadow-lg rounded-lg transition-transform transform hover:scale-105 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]"><div className="flex flex-row-reverse items-center gap-2 mb-4"><span className="text-2xl font-bold text-black  -mb-[px]">LinkdIn</span><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="text-[#0A66C2]" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg></div><Image alt="Facebook" loading="lazy" width="1200" height="100" decoding="async" data-nimg="1" className="mb-4 w-[400px] rounded-md" src={Cimg2} />  </a>
                        <a href="https://www.quora.com/topic/iMET-Global" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center p-4 bg-[#ffffff] hover:shadow-lg rounded-lg transition-transform transform hover:scale-105 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]"><div className="flex flex-row-reverse items-center gap-2 mb-4"><span className="text-2xl font-bold text-black  -mb-[px]">Quora</span><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="text-[#931c25]" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M440.5 386.7h-29.3c-1.5 13.5-10.5 30.8-33 30.8-20.5 0-35.3-14.2-49.5-35.8 44.2-34.2 74.7-87.5 74.7-153C403.5 111.2 306.8 32 205 32 105.3 32 7.3 111.7 7.3 228.7c0 134.1 131.3 221.6 249 189C276 451.3 302 480 351.5 480c81.8 0 90.8-75.3 89-93.3zM297 329.2C277.5 300 253.3 277 205.5 277c-30.5 0-54.3 10-69 22.8l12.2 24.3c6.2-3 13-4 19.8-4 35.5 0 53.7 30.8 69.2 61.3-10 3-20.7 4.2-32.7 4.2-75 0-107.5-53-107.5-156.7C97.5 124.5 130 71 205 71c76.2 0 108.7 53.5 108.7 157.7.1 41.8-5.4 75.6-16.7 100.5z"></path></svg></div><Image alt="Facebook" loading="lazy" width="1200" height="100" decoding="async" data-nimg="1" className="mb-4 w-[400px] rounded-md" src={Cimg3} />  </a>
                        <a href="https://www.instagram.com/imet.global/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center p-4 bg-[#ffffff] hover:shadow-lg rounded-lg transition-transform transform hover:scale-105 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]"><div className="flex flex-row-reverse items-center gap-2 mb-4"><span className="text-2xl font-bold text-black  -mb-[px]">Instagram</span><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="text-pink-500" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg></div><Image alt="Facebook" loading="lazy" width="1200" height="100" decoding="async" data-nimg="1" className="mb-4 w-[400px] rounded-md" src={Cimg4} />  </a>
                    </div>
                </div>
            </section>
            <section className="bg-[#c5e2d5] py-14">
                <main className="max-w-7xl mx-auto">
                    <Titlecomponentpage title="FAQS" titleName="Answers to Your" which="Questions" colorCode="text-[#151817]" />
                    <div className="space-y-4">
                        <div className="border rounded-lg">
                            <button className="w-full flex justify-between items-center p-4 text-lg font-medium text-left bg-[#06b5c5]-100 hover:bg-[#06b5c5]-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#06b5c5]-500"  onClick={() => toggleVisibility(0)}>
                                <span className="text-xl font-medium"><div>Who is eligible to enrol in 
                                    <span className="font-bold">
                                         ECP?
                                    </span>
                                </div>
                                </span>
                                <svg className={`${isVisible[0] ?  'w-5 h-5 transform transition-transform rotate-180' : 'w-5 h-5 transform transition-transform rotate-0'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </button>
                            <div className={`${isVisible[0] ?  'hidden' : ''}hidden p-4 text-xl bg-[#06b5c5]-50 text-gray-700 font-medium`}>
                                <div>
                                <p>
                                    <span className="font-bold">Cohort -I:</span> PG students including MBA/MCA/MS | CA/CS/CMA
                                </p>
                                <p>
                                    <span className="font-bold">
                                        Cohort -II:
                                    </span>
                                    Dropped out from CA/CS/CMA/CFA | Not interested in conventional PG | Not interested in government exams / UPSC anymore
                                </p>
                                <p>
                                    <span className="font-bold">
                                        Cohort -III:
                                    </span>
                                    Graduates (including Hotel Management | BBA/BCA) with 1+ year of experience | BTechs
                                </p>
                                <p>
                                    <span className="font-bold">Cohort -IV:</span>
                                    Working professionals with 1+ years of work experience
                                </p>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="border rounded-lg">
                            <button className="w-full flex justify-between items-center p-4 text-lg font-medium text-left bg-[#06b5c5]-100 hover:bg-[#06b5c5]-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#06b5c5]-500"  onClick={() => toggleVisibility(1)}>
                                <span className="text-xl font-medium"><div>Can I apply for
                                    <span className="font-bold">
                                    if I don't belong to the applicable cohorts?
                                    </span>
                                </div>
                                </span>
                                <svg className={`${isVisible[1] ?  'w-5 h-5 transform transition-transform rotate-180' : 'w-5 h-5 transform transition-transform rotate-0'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </button>
                            <div className={`${isVisible[1] ?  'hidden' : ''}hidden p-4 text-xl bg-[#06b5c5]-50 text-gray-700 font-medium`}><div>
                            <p>
                                    Yes, you can apply for the program and can be shortlisted based on an
                                        <span className="font-bold"> entrance qualification interview.</span>
                                    </p>
                               
                            </div>
                            </div>
                        </div><div className="border rounded-lg">
                            <button className="w-full flex justify-between items-center p-4 text-lg font-medium text-left bg-[#06b5c5]-100 hover:bg-[#06b5c5]-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#06b5c5]-500"  onClick={() => toggleVisibility(2)}>
                                
                                    <span>
                                    I am a working professional aiming for a leadership role in marketing, how will this program help me?
                                    </span>
                                
                                <svg className={`${isVisible[2] ?  'w-5 h-5 transform transition-transform rotate-180' : 'w-5 h-5 transform transition-transform rotate-0'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </button>
                            <div className={`${isVisible[2] ?  'hidden' : ''}hidden p-4 text-xl bg-[#06b5c5]-50 text-gray-700 font-medium`}><div>
                                <p>
                                The ECP program will help you develop
                                    <span className="font-bold">advanced digital marketing and strategy skills.</span>  The 360-degree orientation, hands-on experience, and specialized tracks will equip you with competencies for leadership roles in digital social media, branding, and CMO-level positions.
                                </p>
                                
                            </div>
                            </div>
                        </div><div className="border rounded-lg">
                            <button className="w-full flex justify-between items-center p-4 text-lg font-medium text-left bg-[#06b5c5]-100 hover:bg-[#06b5c5]-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#06b5c5]-500"  onClick={() => toggleVisibility(3)}>
                                <span className="text-xl font-medium">Being a working professional, it&apos;s important for me to network with like-minded people, will I get an opportunity for the same?
                                
                                </span>
                                <svg className={`${isVisible[0] ?  'w-5 h-5 transform transition-transform rotate-180' : 'w-5 h-5 transform transition-transform rotate-0'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </button>
                            <div className={`${isVisible[3] ?  'hidden' : ''}hidden p-4 text-xl bg-[#06b5c5]-50 text-gray-700 font-medium`}><div>
                                <p>
                                    <span className="font-bold">LIVE assignments:</span> , guest lectures, and modules taught by practitioners. It also provides a <span className="font-bold">lifetime membership of iSoCIAL</span>  (Online community for Digital Social Media and AI enablement) and access to the iMET Alumni network.
                                </p>
                                
                            </div>
                            </div>
                        </div><div className="border rounded-lg">
                            <button className="w-full flex justify-between items-center p-4 text-lg font-medium text-left bg-[#06b5c5]-100 hover:bg-[#06b5c5]-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#06b5c5]-500"  onClick={() => toggleVisibility(4)}>
                                <span className="text-xl font-medium">
                                    As a student pursuing MBA/PGDM, will I get an edge during my placement?
                                </span>
                                <svg className={`${isVisible[4] ?  'w-5 h-5 transform transition-transform rotate-180' : 'w-5 h-5 transform transition-transform rotate-0'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </button>
                            <div className={`${isVisible[4] ?  'hidden' : ''}hidden p-4 text-xl bg-[#06b5c5]-50 text-gray-700 font-medium`}><div>
                                <p>
                                The ECP program offers 
                                    <span className="font-bold">specialized tracks</span>
                                    in emerging areas like digital marketing, personal branding, and data analytics—skills highly valued by employers. Additionally, the focus on <span className="font-bold">AI-powered tools</span>
                                    and practical projects ensures you stand out during placements.
                                </p>
                                
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 text-center"><button className="px-6 py-2 text-[#ffffff] bg-[#06abba] rounded-md hover:bg-[#06abba] font-bold">Load More ⟳</button></div>
                </main>
            </section>
        </main>

    )
}

export default Homepage;