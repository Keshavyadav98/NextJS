import { NextPage } from "next";
import Image from "next/image";
import Advisory from "@/../public/cardImage/Advisory.webp"
import Therise from "@/../public/cardImage/TheRise.webp"
import International from "@/../public/cardImage/International.webp";
import RICS from "@/../public/cardImage/Rics.webp"
import ATOS from "@/../public/cardImage/Atos.webp"
import Airtel from "@/../public/cardImage/airtel.webp"
import helloMeets from "@/../public/cardImage/helloMeets.webp"
import Deloitte from "@/../public/cardImage/Deloitte.webp"
import CSC from "@/../public/cardImage/csc.webp"
import EY from "@/../public/cardImage/EY.webp"
import edu19 from "@/../public/cardImage/edu (19).webp"
import image1 from "@/../public/cardImage/image (4).webp"
import image2 from "@/../public/cardImage/image (5).webp"
import image3 from "@/../public/cardImage/image (6).webp"
import image4 from "@/../public/cardImage/image (7).webp"
import image5 from "@/../public/cardImage/image (8).webp"
import image6 from "@/../public/cardImage/image (9).webp"
import image7 from "@/../public/cardImage/image (10).webp"
import image8 from "@/../public/cardImage/image (11).webp"
import image9 from "@/../public/cardImage/image (12).webp"
import image10 from "@/../public/cardImage/image (13).webp"
import image11 from "@/../public/cardImage/image (14).webp"
import image12 from "@/../public/cardImage/image (15).webp"
import image13 from "@/../public/cardImage/image (16).webp"
import image14 from "@/../public/cardImage/image (17).webp"
import image15 from "@/../public/cardImage/image (18).webp"
import image16 from "@/../public/cardImage/image (19).webp"
import image17 from "@/../public/cardImage/image (20).webp"
import image18 from "@/../public/cardImage/image (22).webp"
import image19 from "@/../public/cardImage/image (23).webp"
import image20 from "@/../public/cardImage/image (24).webp"
import image21 from "@/../public/cardImage/image (25).webp"
import image22 from "@/../public/cardImage/image (26).webp"
import image23 from "@/../public/cardImage/image (27).webp"
import image24 from "@/../public/cardImage/image (28).webp"
import image25 from "@/../public/cardImage/image (29).webp"
import image26 from "@/../public/cardImage/image (30).webp"
import image27 from "@/../public/cardImage/image (31).webp"





const TablePage:NextPage = () => {
    return (
        <table className="min-w-full border-collapse hidden md:table ">
            <thead>
                <tr className="bg-[#f5edd9] text-lg md:text-2xl border-4 border-[##f5edd9]">
                    <th className="py-2 md:py-4 px-2 md:px-6 text-center font-semibold text-gray-700">
                        Advisory Councils
                    </th>
                    <th className="py-2 md:py-4 px-2 md:px-6 text-center font-semibold text-gray-700">
                        Corporates
                    </th>
                    <th className="py-2 md:py-4 px-2 md:px-6 text-center font-semibold text-gray-700">
                        Educational Institutes
                    </th>
                    <th className="py-2 md:py-4 px-2 md:px-6 text-center font-semibold text-gray-700"></th>
                    <th className="py-2 md:py-4 px-2 md:px-6 text-center font-semibold text-gray-700">
                        International Entities
                    </th>
                    <th className="py-2 md:py-4 px-2 md:px-6 text-center font-semibold text-gray-700">
                        Government and Ministries
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="py-6 px-4 text-center border-4 border-[#f5edd9] w-1/5">
                        <div className="flex flex-col flex-wrap gap-4">
                        <div className="flex items-center justify-center">
                        <Image alt="..." src={Advisory} className="object-Contain w-4/5"  />
                        </div>
                        <div className="flex items-center justify-center">
                        <Image alt="..." src={International} className="object-Contain w-4/5"  />
                        </div>
                        <div className="flex items-center justify-center">
                        <Image alt="..." src={RICS} className="object-Contain w-4/5"  />
                        </div>
                        <div className="flex items-center justify-center">
                        <Image alt="..." src={Therise} className="object-Contain w-4/5"  />
                        </div>
                        </div>
                    </td>
                    <td className="py-6 px-4 text-center border-4 border-[#f5edd9] w-1/5">
                    <div className="flex flex-col flex-wrap gap-4">
                    <div className="flex items-center justify-center">
                    <Image alt="..." src={ATOS} className="object-Contain w-3/5"  />
                    </div>
                    <div className="flex items-center justify-center">
                    <Image alt="..." src={Airtel} className="object-Contain w-3/5"  />
                    </div>
                    <div className="flex items-center justify-center">
                    <Image alt="..." src={helloMeets} className="object-Contain w-3/5"  />
                    </div>
                    <div className="flex items-center justify-center">
                    <Image alt="..." src={Deloitte} className="object-Contain w-3/5"  />
                    </div>
                    <div className="flex items-center justify-center">
                    <Image alt="..." src={CSC} className="object-Contain w-3/5"  />
                    </div>
                    <div className="flex items-center justify-center">
                    <Image alt="..." src={EY} className="object-Contain w-3/5"  />
                    </div>
                    </div>
                    </td>
                    <td colSpan={2} className="py-6 px-4 text-center border-4 border-[#f5edd9] w-2/5">
                    <div className="grid grid-cols-3 justify-center gap-4 ">
                        <div className="flex items-center justify-center ">
                    <Image alt="..." src={image1} className="object-Contain w-full"  />
                        </div>
                        <div className="flex items-center justify-center">
                    <Image alt="..." src={image2} className="object-Contain w-full"  />
                        </div>
                        <div className="flex items-center justify-center">
                    <Image alt="..." src={image3} className="object-Contain w-full"  />
                        </div>
                        <div className="flex items-center justify-center">
                    <Image alt="..." src={image4} className="object-Contain w-full"  />
                        </div>
                        <div className="flex items-center justify-center">
                    <Image alt="..." src={image5} className="object-Contain w-full"  />
                        </div>
                        <div className="flex items-center justify-center">
                    <Image alt="..." src={image6} className="object-Contain w-full"  />
                        </div>
                        <div className="flex items-center justify-center">
                    <Image alt="..." src={image7} className="object-Contain w-full"  />
                        </div>
                        <div className="flex items-center justify-center">
                    <Image alt="..." src={image8} className="object-Contain w-full"  />
                        </div>
                        <div className="flex items-center justify-center">
                    <Image alt="..." src={image8} className="object-Contain w-full"  />
                        </div>
                        <div className="flex items-center justify-center">
                    <Image alt="..." src={image9} className="object-Contain w-full"  />
                        </div>
                        <div className="flex items-center justify-center">
                    <Image alt="..." src={image10} className="object-Contain w-full"  />
                        </div>
                        <div className="flex items-center justify-center">
                    <Image alt="..." src={image11} className="object-Contain w-full"  />
                        </div>
                        <div className="flex items-center justify-center">
                    <Image alt="..." src={image12} className="object-Contain w-full"  />
                        </div>
                        <div className="flex items-center justify-center">
                    <Image alt="..." src={image13} className="object-Contain w-full"  />
                        </div>
                        <div className="flex items-center justify-center">
                    <Image alt="..." src={image14} className="object-Contain w-full"  />
                        </div>
                        <div className="flex items-center justify-center">
                    <Image alt="..." src={image15} className="object-Contain w-full"  />
                        </div>
                        <div className="flex items-center justify-center">
                    <Image alt="..." src={image16} className="object-Contain w-full"  />
                        </div>
                        <div className="flex items-center justify-center">
                    <Image alt="..." src={image17} className="object-Contain w-full"  />
                        </div>
                        <div className="flex items-center justify-center">
                    <Image alt="..." src={edu19} className="object-Contain w-full"  />
                        </div>
                        <div className="flex items-center justify-center">
                    <Image alt="..." src={image18} className="object-Contain w-full"  />
                        </div>
                    </div>
                    </td>
                    <td className="py-6 px-4 text-center border-4 border-[#f5edd9] w-1/5">
                        <div className="flex flex-col justify-center gap-4">
                            <div className="flex items-center justify-center">
                    <Image alt="..." src={image19} className="object-Contain w-3/5"  />
                            </div>
                            <div className="flex items-center justify-center">
                    <Image alt="..." src={image20} className="object-Contain w-3/5"  />
                            </div>
                            <div className="flex items-center justify-center">
                    <Image alt="..." src={image21} className="object-Contain w-3/5"  />
                            </div>
                            <div className="flex items-center justify-center">
                    <Image alt="..." src={image22} className="object-Contain w-3/5"  />
                            </div>
                            <div className="flex items-center justify-center">
                    <Image alt="..." src={image23} className="object-Contain w-3/5"  />
                            </div>
                            <div className="flex items-center justify-center">
                    <Image alt="..." src={image24} className="object-Contain w-3/5"  />
                            </div>
                        </div>
                    </td>
                    <td className="py-6 px-4 text-center border-4 border-[#f5edd9] w-1/5">
                        <div className="flex flex-col flex-wrap justify-center gap-4">
                            <div className="flex items-center justify-center">
                    <Image alt="..." src={image25} className="object-Contain w-full"  />
                            </div>
                            <div className="flex items-center justify-center">
                    <Image alt="..." src={image26} className="object-Contain w-full"  />
                            </div>
                            <div className="flex items-center justify-center">
                    <Image alt="..." src={image27} className="object-Contain w-full"  />
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default TablePage;