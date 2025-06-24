import React from "react";
import { experienceCards } from "../data/experienceData";


function Experience() {

return (
<div name="Experience" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
            <h1 className="text-3xl font-bold mb-5">Experience</h1>
            <span className="">I have more than a year of experience in below technologies</span>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 my-9">
                {experienceCards.map(({id,logo,name})=>(
                    <div className="flex flex-col justify-center items-center border-[2px] md:w-[200px] md:h-[200px] rounded-full p-1 cursor-pointer hover:scale-103 transition-all duration-300 ease-in-out m-[8px] shadow-2xl bg-[#f6fff6] hover:bg-[#e2f9f3] active:bg-[#d0f2f0] hover:shadow-lg" 
                    key={id}>

                        <img src={logo} 
                        alt={name} 
                        className="rounded-full h-[130px]" />
                        <div> 
                            <div className="font-bold text-xl mb-2 ml-2">{name}</div>
                        
                        </div>
                       
                    </div>
                ))}
            </div>
            {/* <hr /> */}
            </div>
);
}


export default Experience;