import React, { useRef, useEffect } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { footerLinks, copyright, builtWith } from "../data/footerData";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const iconMap = {
    FaGithub: <FaGithub size={28} className="hover:text-black transition-colors duration-200" />,
    FaLinkedin: <FaLinkedin size={28} className="hover:text-blue-600 transition-colors duration-200" />,
    FaTwitter: <FaTwitter size={28} className="hover:text-blue-400 transition-colors duration-200" />,
    BiLogoGmail: <BiLogoGmail size={28} className="hover:text-red-500 transition-colors duration-200" />,
};

function Footer() {
    const iconRefs = useRef([]);
    const footerRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        if (footerRef.current) {
            gsap.fromTo(
                footerRef.current,
                { opacity: 0, y: 60, scale: 0.97 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: footerRef.current,
                        start: "top 92%",
                        toggleActions: "play reverse play reverse"
                    }
                }
            );
        }

        if (iconRefs.current.length) {
            gsap.fromTo(
                iconRefs.current,
                { opacity: 0, y: 30, scale: 0.8 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.5,
                    stagger: 0.13,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: footerRef.current,
                        start: "top 94%",
                        toggleActions: "play reverse play reverse"
                    }
                }
            );
        }
    }, []);

    return (
        <>
            <hr className="border-t-2 border-green-200" />
            <footer
                className="py-12 bg-gradient-to-t from-green-50 via-white to-white"
                ref={footerRef}
            >
                <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
                    <div className="flex flex-col items-center justify-between">
                        <div className="flex space-x-6 text-2xl mb-4">
                            {footerLinks.map((link, idx) =>
                                link.icon === "BiLogoGmail" ? (
                                    <a
                                        key={idx}
                                        href="#"
                                        ref={el => iconRefs.current[idx] = el}
                                        className="rounded-full bg-white shadow-md p-2 hover:bg-green-100 transition-all duration-200"
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
                                        }}
                                    >
                                        {iconMap[link.icon]}
                                    </a>
                                ) : (
                                    <a
                                        key={idx}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        ref={el => iconRefs.current[idx] = el}
                                        className="rounded-full bg-white shadow-md p-2 hover:bg-green-100 transition-all duration-200"
                                    >
                                        {iconMap[link.icon]}
                                    </a>
                                )
                            )}
                        </div>
                        <div className="mt-6 border-t border-green-200 pt-6 flex flex-col items-center w-full">
                            <p className="text-gray-600 text-sm mb-1 tracking-wide">{copyright}</p>
                            <p className="text-gray-500 text-xs italic">{builtWith}</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;