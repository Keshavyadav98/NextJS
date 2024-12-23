import { NextPage } from "next";
interface Card6PageProps{
    icon:React.ReactNode,
    heading:string,
    subHeading:string,
    colorCode:string,
}

const Card6Page:NextPage<Card6PageProps> = ({icon,heading,subHeading,colorCode}) => {
return (
    <div className="bg-white rounded-lg p-6 text-center shadow-lg ">
        <div className="flex justify-center mb-4 ">
            {icon}
        </div>
        <h3 className={`text-lg font-semibold text-red-700 mb-2  text-white p-8 rounded-xl ${colorCode}`}>{heading}</h3>
        <p className="text-gray-700">
            <span className="font-bold">{subHeading}</span>
        </p>
    </div>
)
}

export default Card6Page;