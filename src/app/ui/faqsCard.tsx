import { NextPage } from "next";
interface FaqsCardPageProps {
    Heading:string,
    Desc:string,
}

const FaqsCardPage:NextPage<FaqsCardPageProps> =({Heading,Desc}) => {
    return (
        <div className="border rounded-lg">
            <button className="w-full flex justify-between items-center p-4 text-lg font-medium text-left bg-blue-100 hover:bg-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            <span className="text-xl font-medium"><div>Who is eligible to enrol in 
                    <span className="font-bold">
                        ECP?
                        </span>
                        </div>
                        </span>
                        <svg className="w-5 h-5 transform transition-transform rotate-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                        </button>
                        <div className="p-4 text-xl bg-blue-50 text-gray-700 font-medium"><div><p><span className="font-bold">Cohort -I:</span> PG students including MBA/MCA/MS | CA/CS/CMA</p><p><span className="font-bold">Cohort -II:</span> Dropped out from CA/CS/CMA/CFA | Not interested in conventional PG | Not interested in government exams / UPSC anymore</p><p><span className="font-bold">Cohort -III:</span> Graduates (including Hotel Management | BBA/BCA) with 1+ year of experience | BTechs</p><p><span className="font-bold">Cohort -IV:</span> Working professionals with 1+ years of work experience</p></div></div>
                        </div>
    )
}