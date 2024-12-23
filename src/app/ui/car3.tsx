import { NextPage } from "next";

interface card3PageProps {
    title: string,
    subtitle:string,
    phara: string,
    image: React.ReactNode,
  }
const Card3page:NextPage<card3PageProps> = ({title,subtitle,phara,image}) => {
    return (
        <div className="bg-[#FFA500] rounded-md p-6 text-center text-white flex flex-col justify-between shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:shadow-none">
            <h3 className="text-3xl font-bold text-black">
                {title}
                </h3>
                <h3 className="text-3xl font-bold text-red">{subtitle}</h3>
                    <p className="text-xl  font-bold">{phara}</p>
                    {image}
                    
                    </div>
    )
}

export default Card3page;