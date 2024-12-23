import { NextPage } from "next";
interface Card4PageProps{
title:string,
dec:string,
}

const Card4Page:NextPage <Card4PageProps> = ({title,dec}) => {
    return(
        <div className=" flex-col p-6 bg-white rounded-xl transition-all duration-300 ease-in-out shadow-[7px_7px_0px_0px_rgba(0,0,0,1)] hover:shadow-none border border-gray-100 group hover:border-blue-500 relative overflow-hidden">
        <div className=" z-10" >
        <h2 className="font-bricolage md:text-xl font-semibold mb-3 transition-colors duration-300 text-red">{title}</h2>
        <div className="flex items-start gap-2">
        <span className="text-gray-400 font-medium">-</span>
        <p className="text-gray-600 text-sm font-normal leading-relaxed group-hover:text-gray-700">{dec}</p>
        </div>
        </div>
        </div>
    )
}

export default Card4Page;