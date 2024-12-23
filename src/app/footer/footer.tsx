import { NextPage } from "next";
import Image from "next/image";
import logo from "@/../public/cardImage/mainLogo.webp";

const Footerpage:NextPage = () =>{
    return(
        <footer>
            <div className="bg-[#68bfde] flex justify-center flex-col items-center space-y-5 py-24">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center justify-center flex-col gap-5">
                        <h2 className="text-4xl md:text-6xl font-bricolage font-semibold text-white text-center">
                        Career Continuity <br/>  Cohort Helpline
                        </h2>
                        <p className="text-center text-white text-sm md:text-base md:px-0 px-10 mb-10">
                        Book your slot to attend career counselling sessions from industry practitioners
                        </p>
                        <div className="flex justify-center items-center">
                            <div>
                                <button className=" p-4 md:text-lg text-md flex font-medium bg-red-800 hover:bg-[#68bfde] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] text-white rounded-lg">Know More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-4 md:px-[10vw] bg-red-800 text-white py-10 md:py-20">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row text-center md:text-left justify-center">
                        <div className="flex-1 space-y-4 mb-10 aos-init aos-animate" data-aos="fade-right">
                            <div className="flex justify-center md:justify-start">
                                <Image alt="Logo" src={logo} width="300" height="48" decoding="async" className="aos-init aos-animate"/>
                            </div>
                            <p className="text-lg font-semibold font-bricolage aos-init aos-animate">Follow Us</p>
                            <div className="flex justify-center md:justify-start space-x-4 aos-init aos-animate">
                                <a href="/" target="_blank" rel="noopener noreferrer">
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="text-2xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                                    </svg>
                                </a>
                                <a href="https://www.facebook.com/imetglobal" target="_blank" rel="noopener noreferrer"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512" className="text-2xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg></a>
                                <a href="https://www.quora.com/profile/IMET-Global-2" target="_blank" rel="noopener noreferrer"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="text-2xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M440.5 386.7h-29.3c-1.5 13.5-10.5 30.8-33 30.8-20.5 0-35.3-14.2-49.5-35.8 44.2-34.2 74.7-87.5 74.7-153C403.5 111.2 306.8 32 205 32 105.3 32 7.3 111.7 7.3 228.7c0 134.1 131.3 221.6 249 189C276 451.3 302 480 351.5 480c81.8 0 90.8-75.3 89-93.3zM297 329.2C277.5 300 253.3 277 205.5 277c-30.5 0-54.3 10-69 22.8l12.2 24.3c6.2-3 13-4 19.8-4 35.5 0 53.7 30.8 69.2 61.3-10 3-20.7 4.2-32.7 4.2-75 0-107.5-53-107.5-156.7C97.5 124.5 130 71 205 71c76.2 0 108.7 53.5 108.7 157.7.1 41.8-5.4 75.6-16.7 100.5z"></path></svg></a>
                                <a href="https://www.youtube.com/channel/UCt4YK04oYKu7JiEKCyvUpDg" target="_blank" rel="noopener noreferrer"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" className="text-2xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path></svg></a>
                                <a href="https://www.threads.net/@imetglobal" target="_blank" rel="noopener noreferrer"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="text-2xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM294.2 244.3c19.5 9.3 33.7 23.5 41.2 40.9c10.4 24.3 11.4 63.9-20.2 95.4c-24.2 24.1-53.5 35-95.1 35.3h-.2c-46.8-.3-82.8-16.1-106.9-46.8C91.5 341.8 80.4 303.7 80 256v-.1-.1c.4-47.7 11.5-85.7 33-113.1c24.2-30.7 60.2-46.5 106.9-46.8h.2c46.9 .3 83.3 16 108.2 46.6c12.3 15.1 21.3 33.3 27 54.4l-26.9 7.2c-4.7-17.2-11.9-31.9-21.4-43.6c-19.4-23.9-48.7-36.1-87-36.4c-38 .3-66.8 12.5-85.5 36.2c-17.5 22.3-26.6 54.4-26.9 95.5c.3 41.1 9.4 73.3 26.9 95.5c18.7 23.8 47.4 36 85.5 36.2c34.3-.3 56.9-8.4 75.8-27.3c21.5-21.5 21.1-47.9 14.2-64c-4-9.4-11.4-17.3-21.3-23.3c-2.4 18-7.9 32.2-16.5 43.2c-11.4 14.5-27.7 22.4-48.4 23.5c-15.7 .9-30.8-2.9-42.6-10.7c-13.9-9.2-22-23.2-22.9-39.5c-1.7-32.2 23.8-55.3 63.5-57.6c14.1-.8 27.3-.2 39.5 1.9c-1.6-9.9-4.9-17.7-9.8-23.4c-6.7-7.8-17.1-11.8-30.8-11.9h-.4c-11 0-26 3.1-35.6 17.6l-23-15.8c12.8-19.4 33.6-30.1 58.5-30.1h.6c41.8 .3 66.6 26.3 69.1 71.8c1.4 .6 2.8 1.2 4.2 1.9l.1 .5zm-71.8 67.5c17-.9 36.4-7.6 39.7-48.8c-8.8-1.9-18.6-2.9-29-2.9c-3.2 0-6.4 .1-9.6 .3c-28.6 1.6-38.1 15.5-37.4 27.9c.9 16.7 19 24.5 36.4 23.6l-.1-.1z"></path></svg></a>
                                <a href="https://www.linkedin.com/company/imet-global/" target="_blank" rel="noopener noreferrer"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="text-2xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg></a>
                            </div>

                        </div>
                        <div className="flex-1 space-y-2 mb-10 aos-init aos-animate" data-aos="fade-up">
                            <h3 className="text-lg font-semibold font-bricolage">Quick Links</h3>
                            <ul className="space-y-1"><li><a href="/course/ecp" className="hover:text-gray-300">Executive Certificate Program(ECP)</a></li><li><a href="/course/decp" className="hover:text-gray-300">Digital Executive Certificate Program(DECP)</a></li><li><a href="/course/cp" className="hover:text-gray-300">Certificate Program Digital Marketing &amp; Analytics(CP)</a></li><li><a href="/gurupool" className="hover:text-gray-300">Gurupool</a></li><li><a href="/about" className="hover:text-gray-300">About Us</a></li><li><a href="/refund" className="hover:text-gray-300">Refund Policy</a></li><li><a href="/disclaimer" className="hover:text-gray-300">Disclaimer</a></li></ul>
                        </div>
                        <div className="flex-1 space-y-4 aos-init aos-animate" data-aos="fade-left"><h3 className="text-lg font-semibold font-bricolage">Contact Us</h3><div className="flex items-center space-x-4 justify-center lg:justify-start"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path></svg><a href="mailto:contact@imetglobal.com" className="hover:text-gray-300 text-sm md:text-base">contact@imetglobal.com</a></div><div className="flex items-center space-x-4 justify-center lg:justify-start w-[60%] lg:w-full ml-16 lg:ml-0"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 384 512" className="text-6xl md:text-4xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path></svg><p className="text-sm md:text-base">Business India Complex, Uday Park, Adjacent to August Kranti Marg, Behind South Ex-II 110049 Delhi, India</p></div><div className="flex items-center space-x-4 justify-center lg:justify-start"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-xl rotate-[80deg]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"></path></svg><a href="tel:+919810409943" className="hover:text-gray-300 text-sm md:text-base">+91-9810409943</a></div></div>
                    </div>
                </div>
            </div>
            <div className=" z-30">
                <p className=" bg-white text-[#68bfde] text-sm md:text-xl font-bricolage text-center w-full font-bold p-4 md:p-6">© 2024 - iMET Global | All Rights Reserved</p>
            </div>
        </footer>
    )
}

export default Footerpage;