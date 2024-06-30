'use client'

import React, { useState, useEffect } from 'react';
import { menuItems } from './menuItems';
import { MdClose } from "react-icons/md";
import { usePathname } from 'next/navigation'

export const Navbar = () => {

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const pathname = usePathname();
    console.log(pathname);

    const handleDrawerToggle = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    const handleCloseDrawer = () => {
        setIsDrawerOpen(false);
    };

    const [active, setActive] = useState(pathname ? menuItems.find(item => item.link === pathname)?.name : 'Home');

    return (
        <nav className="bg-transparent p-5 flex-col">
            <div className="max-w-screen-2xl flex flex-wrap items-center justify-end mx-auto p-4">
                {!isDrawerOpen && (
                    <button
                        onClick={handleDrawerToggle}
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-300 rounded-lg md:block lg:hidden hover:bg-gray-800 focus:outline-none focus:ring-2"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                )}

                <div className="hidden lg:block md:hidden w-full text-right md:w-auto">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg bg-transparent md:flex-row md:space-x-1 rtl:space-x-reverse md:mt-0 md:border-0 gap-4 transition-all duration-300 ease-in-out">
                        {menuItems.map(item => (
                            <li key={item.id}>
                                <a onClick={() => setActive(item.name)} href={item.link} className="block text-lg py-2 px-2 group text-gray-200 transition-all duration-300 ease-in-out">
                                    <span className={`bg-left-bottom bg-gradient-to-r from-green-400 to-green-400 ${active === item.link ? 'bg-[length:100%_2px]' : 'bg-[length:0%_2px]'} bg-no-repeat transition-all duration-500 group-hover:bg-[length:100%_2px] ease-out`}>
                                        {item.name}
                                    </span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div id="drawer-navigation" className={`lg:hidden md:fixed fixed top-0 right-0 z-40 h-screen p-6 bg-black opacity-75 w-56 flex flex-col transform transition-transform duration-300 ${isDrawerOpen ? 'translate-x-0' : 'translate-x-full'}`} aria-labelledby="drawer-navigation-label">
                <div className="py-4 px-4">
                    <button
                        type="button"
                        onClick={handleCloseDrawer}
                        aria-controls="drawer-navigation"
                        className="text-white bg-transparent hover:bg-gray-800 hover:text-white  rounded-lg text-sm w-10 h-10 top-2.5 end-2.5 inline-flex items-center justify-center transition-all duration-300 ease-in-out"
                    >
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                        <span className="sr-only">Close menu</span>
                    </button>
                    <ul className="font-medium flex flex-col pt-4 rounded-lg bg-transparent rtl:space-x-reverse gap-4">
                        {menuItems.map(item => (
                            <li key={item.id} className="text-white">
                                <a onClick={() => setActive(item.name)} href={item.link} className="block text-lg py-2 px-2 group text-white transition-all duration-300 ease-in-out">
                                    <span className={`bg-left-bottom bg-gradient-to-r from-green-400 to-green-400 ${active === item.link ? 'bg-[length:100%_2px]' : 'bg-[length:0%_2px]'} bg-no-repeat transition-all duration-500 ease-out group-hover:bg-[length:100%_2px]`}>
                                        {item.name}
                                    </span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};
