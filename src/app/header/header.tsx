import { NextPage } from "next";
import Image from "next/image";
import logo from "@/../public/cardImage/mainLogo.webp";

const Headerpage: NextPage = () => {
  return (
    <header className="top-0 sticky z-50 bg-main border-dashed flex items-center bg-[#f5edd9] justify-around py-[15px] px-4 lg:px-6">
      <div className="max-w-[95%] w-full md:gap-16 gap-0 mx-auto flex md:justify-center justify-between items-center z-50">
        {/* Logo */}
        <a href="/" className="flex items-center gap-x-2 " >
          <Image
            src={logo}
            alt="Logo"
            width={100}
            height={18}
            loading="lazy"
            decoding="async"
            className="aos-init aos-animate"
            data-aos="fade-right"
          />
        </a>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-8 aos-init aos-animate" data-aos="fade-down">
          <ul className="flex items-center gap-6 text-md font-medium">
            <li>
              <a href="/" className="text-[#06b5c5]">
                Home
              </a>
            </li>
            <li className="relative group">
              <button
                className="flex items-center text-[#7A7C6C]"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Courses
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative top-[1px] ml-1 h-3 w-3 transition transition-transform duration-300 hover:rotate-180 group-data-[state=open]:rotate-180" aria-hidden="true"><path d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
              </button>
              {/* Dropdown Menu */}
              <ul
                className="absolute hidden group-hover:block bg-white shadow-lg left-0  right-0  flex justify-center rounded-md w-[30vw]  py-2 w-40 "
                role="menu" data-state="open">
                <li role="menuitem" className="px-4 py-2 hover:bg-gray-100">
                  <a href="/react" className="block px-4 py-2 rounded-md w-[30vw] hover:text-blue ">
                  Executive Certificate Program (ECP) in Strategic Digital Marketing, AI Enablement & Analytics
                  </a>
                </li>
                <li role="menuitem" className="px-4 py-2 hover:bg-gray-100">
                  <a href="/next" className="block px-4 py-2 rounded-md w-[30vw] hover:text-blue ">
                  Digital Entrepreneurship Certificate Program (DECP)
                  </a>
                </li>
                <li role="menuitem" className="px-4 py-2 hover:bg-gray-100">
                  <a href="/more" className="block px-4 py-2 rounded-md w-[30vw] hover:text-blue">
                  Certificate Program (CP) Digital Marketing & Analytics
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/" className="text-[#7A7C6C]">
                About
              </a>
            </li>
            <li>
              <a href="/" className="text-[#7A7C6C]">
                Gurupool
              </a>
            </li>
            <li>
              <a href="/" className="text-[#7A7C6C]">
                Gallery
              </a>
            </li>
            <li>
              <a href="/" className="text-[#7A7C6C]">
                In News & Media
              </a>
            </li>
            <li>
              <a href="/" className="text-[#7A7C6C]">
                Blog
              </a>
            </li>
            <li>
              <a href="/" className="text-[#7A7C6C]">
                Contact Us
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu */}
        <button
          className="lg:hidden text-black"
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Headerpage;
