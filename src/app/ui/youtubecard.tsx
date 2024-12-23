import { NextPage } from "next";
interface YoutubeCardPageProps {
    ifrm: React.ReactNode,
}

const YoutubeCardPage:NextPage<YoutubeCardPageProps> =({ifrm}) => {
    return (
        <div role="group" aria-roledescription="slide" className="min-w-0 shrink-0 grow-0 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 p-2 md:p-4">
            <div className="relative aspect-[9/16] max-w-[290px] mx-auto">
            <div className="absolute inset-0 rounded-3xl shadow-[7px_7px_0px_0px_rgba(0,0,0,1)] hover:shadow-none transition-shadow duration-300 overflow-hidden">
            <div className="absolute inset-0 z-0">
        </div>
        {ifrm}
        </div></div></div>
    )
}

export default YoutubeCardPage;