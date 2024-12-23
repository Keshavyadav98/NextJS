import { NextPage } from "next";

interface card2PageProps {
    title: string,
    li: React.ReactNode,
    colorCode:string,
  }
const Card2page:NextPage<card2PageProps> = ({title,li,colorCode}) => {
    return (
        <div className={`rounded-lg p-4 text-white shadow-[7px_7px_0px_0px_rgba(0,0,0,1)]
        hover:shadow-none bg-[${colorCode}]`}>
            <h3 className="text-3xl font-bold mb-2 text-white">
                {title}
                </h3>
                    {li}
                    </div>
    )
}

export default Card2page;