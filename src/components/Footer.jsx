import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

function Footer() {
    return (
        <>
            <hr />
            <footer className="py-12">
                <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 ">
                    <div className="flex flex-col items-center justify-between">
                        <div className="flex space-x-4 text-2xl">
                            <a href="https://github.com/Darkseid1729" target="_Blank"><FaGithub size={24} /></a>
                            <a href="https://linkedin.com/in/aditya-gautam-316843204" target="_Blank"><FaLinkedin size={24} /></a>
                            <a href="https://x.com" target="_Blank"><FaTwitter size={24} /></a>
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
                                <BiLogoGmail />
                            </a>
                        </div>
                        <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center ">
                            <p className="text-gray-600 text-sm">© 2025 Aditya Gautam. All rights reserved.</p>
                            <p className="text-gray-600 text-sm">Built with React and Tailwind CSS</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}



export default Footer;