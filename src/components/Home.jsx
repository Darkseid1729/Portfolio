import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiReact } from "react-icons/si";

import { ReactTyped,Typed } from "react-typed";


function Home() {
    return (
        <>
        <div name="Home" className="max-w-screen-2xl container mx px-4 md:px-20 my-20 mt-24">
            <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
                <span className="text-xl">Welcome to my portfolio</span>
                <div className="flex space-x-1 text-xl md:text-4xl ">
                    <h1>Hello I am a</h1> 
                    <ReactTyped
                    strings={["Developer", "Designer", "Creator"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop={true}
                    className="text-red-700 font-semibold"
                    />  
                </div>
                <br />
                <p className="text-sm md:text-md text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus magnam neque totam expedita provident sit optio nam labore quae cumque tempore perspiciatis autem at illo vero dolore, impedit quasi esse rerum eum assumenda, blanditiis doloremque veniam? Assumenda neque officia dolor dicta, asperiores, optio, itaque autem ipsum veritatis id et deserunt!</p>
            
                <br />
                {/* Add buttons or links here if needed */}
                <div className="flex flex-col md:flex-row justify-between space-y-6 md:space-y-0 items-center">
                    <div className="space-y-2">
                    <h1 className="text-xl font-semibold">Available on </h1>
                    <ul className="flex space-x-4 text-2xl">
                        <li className="text-2xl cursor-pointer hover:text-black duration-200 transition-transform transform hover:scale-105  ease-in-out">
                            <a href="https://github.com/Darkseid1729?tab=repositories" target="_Blank"><FaGithub/>
                            </a>
                            
                        </li>
                        <li className="transition-transform transform hover:scale-105  ease-in-out text-2xl cursor-pointer hover:text-blue-500 duration-200"> 
                            <a href="https://linkedin.com/in/aditya-gautam-316843204"
                            target="_Blank"><FaLinkedin/>
                            </a>
                            
                        </li>
                        <li className="text-2xl cursor-pointer hover:text-red-500 duration-200 transition-transform transform hover:scale-115  ease-in-out">
                            <FaYoutube/>
                        </li>
                        <li className="text-2xl cursor-pointer hover:text-red-500 duration-200 transition-transform transform hover:scale-105  ease-in-out">
                           <a
                            href="#"
                            onClick={e => {
                                e.preventDefault();
                                window.open(
                                    'https://mail.google.com/mail/?view=cm&fs=1'
                                    + '&to=oryh143@example.com'
                                    + '&su=' + encodeURIComponent('Query about my portfolio')
                                    + '&body=' + encodeURIComponent('Hello, I have a query regarding your portfolio.'),
                                    '_blank'
                                );
                                return false; 
                            }}>
                        <BiLogoGmail/>
                            </a> 
                        </li>
                    </ul>
                    </div>
                
                <div className="space-y-2">
                    <h1 className="text-bold">currently working on</h1>
                    <div className="flex space-x-5">
                    <SiReact className="text-xl md:text-3xl hover:scale-110 ease-in-out duration-200 rounded-full border-[2px]"/>
                    <SiMongodb className="text-xl md:text-3xl hover:scale-110 ease-in-out duration-200 rounded-full border-[2px]"/>
                    <SiExpress className="text-xl md:text-3xl hover:scale-110 ease-in-out duration-200 rounded-full border-[2px]"/>

                    </div>
                </div>
                </div>
                </div>
            <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1">
                <img className="rounded-full md:w-[450px] y-[450px]" src="/myImg.jpg" alt="" />
            
            </div>
            </div>
        </div>
        <hr />
        </>
    )
}

export default Home;