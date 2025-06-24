import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { footerLinks, copyright, builtWith } from "../data/footerData";

const iconMap = {
    FaGithub: <FaGithub size={24} />,
    FaLinkedin: <FaLinkedin size={24} />,
    FaTwitter: <FaTwitter size={24} />,
    BiLogoGmail: <BiLogoGmail />,
};

function Footer() {
    return (
        <>
            <hr />
            <footer className="py-12">
                <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 ">
                    <div className="flex flex-col items-center justify-between">
                        <div className="flex space-x-4 text-2xl">
                            {footerLinks.map((link, idx) =>
                                link.icon === "BiLogoGmail" ? (
                                    <a
                                        key={idx}
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
                                        }}
                                    >
                                        {iconMap[link.icon]}
                                    </a>
                                ) : (
                                    <a key={idx} href={link.url} target="_Blank" rel="noopener noreferrer">
                                        {iconMap[link.icon]}
                                    </a>
                                )
                            )}
                        </div>
                        <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center ">
                            <p className="text-gray-600 text-sm">{copyright}</p>
                            <p className="text-gray-600 text-sm">{builtWith}</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;