import React from "react";
import java from "../../public/java.png";


function Portfolio() {

    const cardItem=[
        {
            id:1,
            logo:"/html.png",
            name:"HTML"
        },
        {
            id:2,
            logo:"/express.png",
            name:"Express.js"
        },
        {
            id:3,
            logo:"/reactjs.png",
            name:"React.js"
        },
        {
            id:4,
            logo:"/node.png",
            name:"Node.js"
        },
        {
            id:5,
            logo:java,
            name:"Java"
        },
        {
            id:6,
            logo:"/python.png",
            name:"Python"
        }
    ]

return (
<div name="Portfolio" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 mt-24">
            <h1 className="text-3xl font-bold mb-5">Portfolio</h1>
            <span className="underlined font-semibold">Featured Projects</span>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-9">
                {cardItem.map(({id,logo,name})=>(
                    <div className="md:w-[300px] md:h-[300px] border-[2px] rounded-4xl shadow-xl p-1 cursor-pointer hover:scale-103 transition-all duration-300 ease-in-out m-[8px]" 
                    key={id}>

                        <img src={logo} 
                        alt={name} 
                        className="w-[120px] h-[120] p-1 rounded-full border-[2px] my-1 ml-2 md:w-[100px] md:h-[100px]" />
                        <div> 
                            <div className="font-bold text-xl mb-2 ml-2">{name}</div>
                            <p className="text-gray-700 ml-2" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, numquam!</p>
                        </div>
                        <div className="px-6 py-4 space-x-3 justify-around">
                            <button className="bg-blue-500 hover:bg-blue-700 active:bg-blue-600 text-white font-bold px-4 py-2 rounded cursor-pointer">Video</button>
                            <button className="bg-green-500 hover:bg-blue-700 active:bg-blue-600 text-white font-bold px-4 py-2 rounded cursor-pointer">Source Code</button>
                        </div>
                    </div>
                ))}
            </div>
            <hr />
            </div>
);
}


export default Portfolio;