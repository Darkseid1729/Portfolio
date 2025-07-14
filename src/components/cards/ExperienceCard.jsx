import React from "react";

function ExperienceCard({ logo, name }) {
    return (
        <div className="flex flex-col justify-center items-center border-[2px] md:w-[200px] md:h-[200px] rounded-full p-1 cursor-pointer hover:scale-103 transition-all duration-300 ease-in-out m-[8px] shadow-2xl bg-[#f6fff6] hover:bg-[#e2f9f3] active:bg-[#d0f2f0] hover:shadow-lg">
            <img src={logo}
                alt={name}
                className="rounded-full h-[130px]" />
            <div>
                <div className="font-bold text-xl mb-2 ml-2">{name}</div>
            </div>
        </div>
    );
}

export default ExperienceCard;
