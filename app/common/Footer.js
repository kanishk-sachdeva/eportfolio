
import React from 'react'
import { menuItems } from './menuItems';
import { motion } from "framer-motion";

export const Footer = () => {
    return (
        <div className="border-t-2 pb-3 border-t-gray-500 pt-2 flex flex-wrap justify-between items-center w-full px-5">
            <p className="">&copy; 2024 KanishkSachdeva.com</p>
            <a href="/" className="decoration-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="26" fill="#aaaaaa" className="bi bi-house-fill" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" />
                    <path fillRule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z" />
                </svg>
            </a>
            <div className="hidden md:flex lg:flex">
                <ul className="flex md:flex-row lg:flex-row gap-4 px-2">
                    {menuItems.filter(item => item.showInNav === true).map((item) => (
                        <li key={item.id}><a href={item.link} className="text-gray-300">{item.name}</a></li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
