import { NextPage } from "next";
interface Card9PageProps{
    imag:React.ReactNode,
    title:string,
    titleHeading:string,
    discription:string,
    icon:React.ReactNode,
    iconDesc:string,
}

const Card9Page:NextPage<Card9PageProps> = ({imag,title,titleHeading,discription,icon,iconDesc}) =>{
    return (
        <article className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
            <div className="relative h-48 w-full overflow-hidden group">
                {imag}
            </div>
            <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                    <span className="bg-[#68bfde]/10 text-[#68bfde] px-3 py-1 rounded-full text-sm">{title}</span>
                </div>
                <h3 className="font-bold text-xl mb-3 line-clamp-2 hover:text-[#68bfde] transition-colors">{titleHeading}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{discription}</p>
                <div className="flex items-center gap-2 mb-4">
                    <div className="relative w-12 h-12">
                        {icon}
                    </div>
                    <span className="text-sm text-gray-500">{iconDesc}</span>
                </div>
                <a target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full px-4 py-2 bg-[#68bfde] text-white font-semibold rounded-lg hover:bg-[#68bfde]-700 transition-colors" href="https://news.abplive.com/business/layoffs-impact-at-least-8-000-individuals-in-india-in-2024-as-firms-cut-down-jobs-to-reduce-costs-1710243">Read More<svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="ml-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></a>
            </div>
        </article>
    )
}

export default Card9Page;