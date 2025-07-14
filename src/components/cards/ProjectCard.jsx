import React, { useState } from "react";

function ProjectCard({
  id,
  logos = [], // <-- changed from logo, logo2
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
      <div className="relative flex items-center justify-center mt-2 h-[120px]">
        {logos.map((logoSrc, idx) => {
          const baseSize = 120;
          const decrement = 10;
          const size = Math.max(baseSize - idx * decrement, 40); // Minimum size 40px
          return (
            <img
              key={idx}
              src={logoSrc}
              alt={`${name} logo ${idx + 1}`}
              className="absolute rounded-full border-[2px]"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${idx * 30}px`,
                zIndex: logos.length - idx,
                objectFit: "cover"
              }}
            />
          );
        })}
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
            {Array.isArray(source) ? (
              source.map((src, idx) => (
                <a key={idx} href={src.url} target="_blank" rel="noopener noreferrer">
                  <button className="bg-green-500 hover:bg-blue-700 active:bg-blue-600 text-white font-bold px-4 py-2 rounded cursor-pointer">
                    {src.text}
                  </button>
                </a>
              ))
            ) : (
              <a href={source} target="_blank" rel="noopener noreferrer">
                <button className="bg-green-500 hover:bg-blue-700 active:bg-blue-600 text-white font-bold px-4 py-2 rounded cursor-pointer">{sourceText}</button>
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}



export default ProjectCard;
