import { NextPage } from "next";
interface SimpleCardPageProps {
    title: string,
    titleSubHeading:string,
    button: string,
    buttonDes: string,
    li: React.ReactNode,
}

const SimpleCardPage: NextPage<SimpleCardPageProps> = ({title,li,titleSubHeading,button,buttonDes}) => {
    return (
        <a className="flex flex-col lg:flex-row bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow" href="/course/ecp">
            <div className="flex-1 flex flex-col justify-center items-start px-4 mb-4 lg:mb-0">
                <h2 className="text-lg md:text-xl font-semibold text-teal-600">{title}</h2>
                <h2 className="text-lg md:text-3xl font-bold text-teal-600">{titleSubHeading}</h2>
                </div>
                <div className="flex-1 flex flex-col justify-center items-start px-4 mb-4 lg:mb-0">
                    <span className="bg-yellow-400 text-black text-lg font-medium py-1 px-3 rounded-lg shadow-sm">
                        {button}
                        </span>
                        <p className="mt-4 text-gray-600 text-lg">{buttonDes}</p>
                        </div><div className="flex-1 flex flex-col justify-center items-start px-4">
                            <h3 className="text-2xl font-semibold text-teal-500">Eligibility</h3>
                                {li}
                                    </div>
                                    </a>
    )
}

export default SimpleCardPage;