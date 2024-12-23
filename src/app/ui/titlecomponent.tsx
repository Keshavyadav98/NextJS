import { NextPage } from "next";

interface TitleComponentPageProps {
    title: string;
    titleName: string;
    which: string;
    colorCode: string;
  }

const Titlecomponentpage:NextPage<TitleComponentPageProps> = ({title , titleName, which, colorCode}) => {
    return(
        <div className="flex justify-left gap-4 lg:gap-10 mb-8 flex-col md:flex-row md:items-center aos-init aos-animate" data-aos="fade-right">
                            <div className="border-[1px] border-black w-[28%]"></div>
                            <div className="text-left w-full md:w-[60%] lg:w-[45%] font-bricolage_grotesque">
                                <h2 className="md:text-6xl text-5xl text-[#06b5c5] font-bold mb-4 pt-4 md:pt-0 font-bricolage">
                                    {title}
                                </h2>
                                <h2 className="md:text-6xl text-5xl font-bold mb-8 font-bricolage"
                                >{titleName}
                                    <br />
                                    <span className={colorCode}>
                                        {which}
                                    </span>
                                </h2>
                            </div>
                        </div>
    )
}

export default Titlecomponentpage;