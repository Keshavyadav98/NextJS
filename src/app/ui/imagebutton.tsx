import { NextPage } from "next";
import Image from "next/image";
interface ImagebuttonProps {
    imge:React.ReactNode,
}

const Imagebutton:NextPage<ImagebuttonProps> = ({imge}) => {
    return (
        <button className="h-32 md:h-[180px] focus:outline-none rounded-[45px] lg:hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] shadow-none transition-all transform bg-red">
            {imge}
        </button>
    )
}

export default Imagebutton;