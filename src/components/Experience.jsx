import React from "react";
import java from "../../public/java.png";


function Experience() {

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
<div name="Experience" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
            <h1 className="text-3xl font-bold mb-5">Experience</h1>
            <span className="">I have more than a year of experience in below technologies</span>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 my-9">
                {cardItem.map(({id,logo,name})=>(
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