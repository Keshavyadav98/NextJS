import { NextPage } from "next";
interface Card5PageProps{
    icon:React.ReactNode,
    heading:string,
    subHeading:string,
    colorCode:string,
}

const Card5Page:NextPage<Card5PageProps> = ({icon,heading,subHeading,colorCode}) => {
return (
    <div className="bg-white rounded-lg p-6 flex flex-col items-center text-center shadow-[7px_7px_0px_0px_rgba(0,0,0,1)]">
        <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-full">
            {icon}
        </div>
        <h3 className={`text-2xl font-bold font-bricolage text-black mb-2 p-3 rounded-3xl ${colorCode}`}>{heading}</h3>
        <p className="text-gray-600 text-xl">
            <span className="font-bold">{subHeading}</span>
        </p>
    </div>
)
}

export default Card5Page;