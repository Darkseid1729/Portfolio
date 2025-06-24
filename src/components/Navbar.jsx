import React from 'react';
import { IoMenu } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { useState } from 'react';
import { Link } from 'react-scroll';
import { profileName, profileHighlight, profileTitle } from "../data/navbarData";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const navItems = [
        { id: 1, text: 'Home', href: '' },
        { id: 2, text: 'About'},
        { id: 3, text: 'Portfolio'},
        { id: 4, text: 'Experience'},
        { id: 5, text: 'Contact' },
    ];
    return (
        <>
            <div className='max-w-screen-2xl container mx px-4 md:px-20 shadow-md fixed top-0 left-0 right-0 bg-white z-50'>
                <div className='flex justify-between items-center h-16'>
                    <div className="flex space-x-2">
                        <img
                            src="/myImg.jpg"
                            alt="Profile"
                            className="w-12 h-12 rounded-full object-cover border-2 border-gray-300"
                        />
                        <h1 className="fond-semibold text-xl cursor-pointer text-black">
                            {profileName} <span className='text-green-500 text-2xl'>{profileHighlight}</span>
                            <p className='text-sm'>{profileTitle}</p>
                        </h1>

                    </div>

                    {/* desktop menu */}
                    <div>
                        <ul className="hidden md:flex space-x-4 text-gray-700 font-semibold">
                            {
                                navItems.map(({ id, text }) => (
                                    <li className='hover:scale-105 duration-200 cursor-pointer' key={id}>
                                        <Link to={text}
                                            smooth={true}
                                            duration={500}
                                            offset={-70}
                                            className="hover:text-green-500"
                                    >{text} </Link></li>
                                ))
                            }
                        </ul>
                        <div className='md:hidden text-gray-700 cursor-pointer'
                            onClick={() => setMenuOpen(!menuOpen)}>
                            {menuOpen ? <RxCross1 size={24} /> : <IoMenu size={24} />}
                        </div>
                    </div>
                </div>

                {/* mobile navbar */}
                {menuOpen && (<div className='bg-white'>
                    <ul className="md:hidden flex flex-col h-screen items-center justify-center space-y-4">
                        {
                            navItems.map(({ id, text }) => (
                                <li className='hover:scale-105 duration-200 cursor-pointer' key={id}>
                                    <Link to={text}
                                        smooth={true}
                                        duration={500}
                                        offset={-70}
                                        className="hover:text-green-500"
                                        onClick={() => setMenuOpen(!menuOpen)}
                                    >{text} </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>)}
            </div>

        </>
    );
}

export default Navbar;
// This is a simple Navbar component using React and Tailwind CSS.