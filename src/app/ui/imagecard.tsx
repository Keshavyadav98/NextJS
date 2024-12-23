import { NextPage } from "next";
import Image  from "next/image";
interface ImageCardPageProps{
    imageSrc:string,
}

const ImageCardPage:NextPage <ImageCardPageProps> = ({imageSrc}) => {
    return (
        <div className="flex-shrink-0 w-72 h-auto rounded-lg overflow-hidden"><Image alt="Image 1" loading="lazy" width="1200" height="100" decoding="async" data-nimg="1" className="w-full h-full object-cover color:transparent mx-2"  src={imageSrc}/></div>
    )
}


export default ImageCardPage;