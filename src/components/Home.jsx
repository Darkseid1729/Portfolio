import React, { useRef, useEffect } from "react";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { SiMongodb, SiExpress, SiReact } from "react-icons/si";
import { ReactTyped } from "react-typed";
import { typedStrings, homeDescription, socialLinks, workingOn } from "../data/homeData";
import myImg from "../data/image/myImg.jpg";
import gsap from "gsap";

const iconMap = {
    FaGithub: <FaGithub />,
    FaLinkedin: <FaLinkedin />,
    FaYoutube: <FaYoutube />,
    BiLogoGmail: <BiLogoGmail />,
};

const techIconMap = {
    SiReact: <SiReact className="text-xl md:text-3xl hover:scale-110 ease-in-out duration-200 rounded-full border-[2px]" />,
    SiMongodb: <SiMongodb className="text-xl md:text-3xl hover:scale-110 ease-in-out duration-200 rounded-full border-[2px]" />,
    SiExpress: <SiExpress className="text-xl md:text-3xl hover:scale-110 ease-in-out duration-200 rounded-full border-[2px]" />,
};

function Home() {
    const imgRef = useRef(null);
    const iconRefs = useRef([]);
    const techRefs = useRef([]);

    useEffect(() => {
        if (imgRef.current) {
            gsap.fromTo(
                imgRef.current,
                { opacity: 0, scale: 0.7, y: 40 },
                {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    duration: 2.5,
                    ease: "power3.out"
                }
            );
        }
    }, []);

    useEffect(() => {
        if (iconRefs.current.length) {
            gsap.fromTo(
                iconRefs.current,
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    stagger: 0.1,
                    ease: "power2.out"
                }
            );
        }
    }, []);

    useEffect(() => {
        if (techRefs.current.length) {
            gsap.fromTo(
                techRefs.current,
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    stagger: 0.12,
                    ease: "power2.out"
                }
            );
        }
    }, []);

    return (
        <>
        <div name="Home" className="max-w-screen-2xl container mx px-4 md:px-20 my-20 mt-24">
            <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
                <span className="text-xl">Welcome to my portfolio</span>
                <div className="flex space-x-1 text-xl md:text-4xl ">
                    <h1>Hello I am a</h1> 
                    <ReactTyped
                        strings={typedStrings}
                        typeSpeed={40}
                        backSpeed={60}
                        loop={true}
                        className="text-red-700 font-semibold"
                    />  
                </div>
                <br />
                <p className="text-sm md:text-md text-justify">{homeDescription}</p>
                <br />
                {/* Add buttons or links here if needed */}
                <div className="flex flex-col md:flex-row justify-between space-y-6 md:space-y-0 items-center">
                    <div className="space-y-2">
                    <h1 className="text-xl font-semibold">Available on </h1>
                    <ul className="flex space-x-4 text-2xl">
                        {socialLinks.map((link, idx) => (
                            <li
                                key={idx}
                                className={`text-2xl cursor-pointer duration-200 transition-transform transform hover:scale-105 ease-in-out ${link.colorClass}`}
                                ref={el => iconRefs.current[idx] = el}
                            >
                                {link.url ? (
                                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                                        {iconMap[link.icon]}
                                    </a>
                                ) : (
                                    iconMap[link.icon]
                                )}
                            </li>
                        ))}
                    </ul>
                    </div>
                <div className="space-y-2">
                    <h1 className="text-bold">currently working on</h1>
                    <div className="flex space-x-5">
                        {workingOn.map((tech, idx) => (
                            <span
                                key={idx}
                                ref={el => techRefs.current[idx] = el}
                            >
                                {techIconMap[tech.icon]}
                            </span>
                        ))}
                    </div>
                </div>
                </div>
                </div>
            <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1">
                <img
                    className="rounded-full md:w-[450px] y-[450px]"
                    src={myImg}
                    alt=""
                    ref={imgRef}
                />
            </div>
            </div>
        </div>
        <hr />
        </>
    )
}

export default Home;