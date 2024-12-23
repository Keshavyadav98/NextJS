import { NextPage } from "next";
interface Card7PageProps {
    icon: React.ReactNode,
    heading: string,
    subHeading: string,
}

const Card7Page: NextPage<Card7PageProps> = ({ icon, heading, subHeading }) => {
    return (
        <div role="group" aria-roledescription="slide" className="min-w-0 shrink-0 grow-0 basis-full pl-4 lg:basis-1/4 md:basis-1/2">
            <div className="flex flex-col items-center px-4">
                {icon}
                <div className="flex items-start" >
                    <div className="text-left">
                        <h3 className="text-xl font-semibold text-red uppercase mb-4">
                            {heading} 
                        </h3>
                        <p className="text-black">
                            {subHeading} 
                        </p>
                    </div>
                    <a href="https://www.linkedin.com/in/deegoel/" target="_blank" rel="noopener noreferrer" className="ml-4 inline-flex items-center justify-center bg-[#68bfde]-600 text-[#68bfde] p-2 rounded-xl hover:bg-[#68bfde]-700 transition border-[1px] border-[#68bfde]" >
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="w-6 h-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                        </svg></a>
                </div>
            </div>
        </div>
    )
}

export default Card7Page;