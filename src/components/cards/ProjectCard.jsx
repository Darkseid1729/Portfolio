import React, { useState } from "react";

function ProjectCard({
  id,
  logo,
  logo2,
  name,
  description,
  run,
  runText,
  source,
  sourceText
}) {
  const [expanded, setExpanded] = useState(false);
  const truncate = (str, n) => str.length > n ? str.slice(0, n) + "..." : str;

  return (
    <div
      className={`flex flex-col md:w-[295px] border-[2px] rounded-xl shadow-xl p-1 cursor-pointer hover:scale-103 transition-all duration-300 ease-in-out m-[8px] bg-white overflow-hidden ${expanded && description.length > 130 ? 'h-auto min-h-[370px]' : 'max-h-[340px] min-h-[350px]'}`}
    >
      <div className="flex items-center space-x-2 justify-center mt-2">
        <img src={logo}
          alt={name}
          className="w-[120px] h-[120px] p-1 rounded-full border-[2px] md:w-[100px] md:h-[100px]" />
        {logo2 && (
          <>
            <span className="text-2xl font-bold mx-1">+</span>
            <img src={logo2}
              alt={name + ' secondary logo'}
              className="w-[60px] h-[60px] p-1 rounded-full border-[2px] md:w-[50px] md:h-[50px]" />
          </>
        )}
      </div>
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <div className="font-bold text-xl mt-2 mb-3 ml-2 text-center">{name}</div>
          <p className="text-gray-700 ml-6  text-left">
            {expanded ? description : truncate(description, 80)}
            {description.length > 80 && (
              <button
                className="text-blue-500 ml-2 underline focus:outline-none"
                onClick={() => setExpanded(!expanded)}
              >
                {expanded ? "Show less" : "Read more"}
              </button>
            )}
          </p>
        </div>
        {!expanded && (
          <div className="px-6 py-4 space-x-3 flex justify-center items-end transition-opacity duration-300">
            <a href={run} target="_blank" rel="noopener noreferrer">
              <button className="bg-blue-500 hover:bg-blue-700 active:bg-blue-600 text-white font-bold px-4 py-2 rounded cursor-pointer">{runText}</button>
            </a>
            <a href={source} target="_blank" rel="noopener noreferrer">
              <button className="bg-green-500 hover:bg-blue-700 active:bg-blue-600 text-white font-bold px-4 py-2 rounded cursor-pointer">{sourceText}</button>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
