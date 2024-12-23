import { NextPage } from "next";
import Image from "next/image";
interface Cardpageprops {
    Image:React.ReactNode,
    title:string,
    titletext:string,
    coruse:string,
}

const Cardpage:NextPage<Cardpageprops> = ({Image,title , titletext , coruse}) => {
    return(
        <div className="bg-white p-4 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between h-full">
            <div className="flex flex-col">{Image}
            <div className="bg-[#06b5c5] rounded-2xl px-4 pt-2 pb-2"><h3 className="text-lg sm:text-xl font-bold text-left pb-2 text-red">
                {title}
                </h3>
                <h4 className="md:text-2xl text-3xl font-semibold font-bricolage text-left text-black pb-2">
                    {titletext}
                    </h4>
                    <h4 className="font-semibold text-left md:text-base mb-4 text-white">
                        {coruse}
                        </h4>
                        </div>
                        </div>
                        <div className="py-4">
                            <p>
                                </p>
                                <button className="text-white font-semibold mt-4 p-4 rounded-2xl bg-[#e5a632] w-full">
                                    Learn More
                                    </button>
                                    </div>
                                    </div>
    )
}

export default Cardpage;