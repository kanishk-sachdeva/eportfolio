'use client'

import React from 'react'
import { Poppins } from "next/font/google";
import { TypeAnimation } from 'react-type-animation';

const poppins = Poppins({
    weight: '700',
    subsets: ['latin']
});

import {
    BiLinkExternal,
    BiLogoCodepen,
    BiLogoDribbble,
    BiLogoGithub,
    BiLogoGitlab,
    BiLogoInstagram,
    BiLogoLinkedinSquare,
    BiLogoStackOverflow,
    BiLogoSteam,
    BiLogoUnsplash,
    BiLogoYoutube,
} from "react-icons/bi";
import { FaFreeCodeCamp, FaProductHunt } from "react-icons/fa";
import { SiCodewars } from "react-icons/si";
import { FaHashnode, FaHashtag, FaSquareXTwitter } from "react-icons/fa6";
import Link from 'next/link';

const socialLinks = [
    {
        id: 1,
        name: "GitHub",
        url: "https://github.com/kanishk-sachdeva",
        icon: BiLogoGithub,
        status: "social",
    },
    {
        id: 2,
        name: "X",
        url: "https://twitter.com/kanu00047",
        icon: FaSquareXTwitter,
        status: "social",
    },
    {
        id: 3,
        name: "Linkedin",
        url: "https://linkedin.com/in/kanishk-sachdeva",
        icon: BiLogoLinkedinSquare,
        status: "social",
    },
    {
        id: 4,
        name: "Instagram",
        url: "https://instagram.com/kanu00047",
        icon: BiLogoInstagram,
        status: "social",
    }
];

export const HomeHero = () => {
    return (
        <div className="lg:py-20 md:py-15 py-12 flex-col">


            <h1 className={`text-[4rem] md:text-[5rem] lg:text-[6rem] leading-[60px] lg:leading-[80px] italic ${poppins.className}`}>Kanishk Sachdeva</h1>

            <p className="text-[20px] md:text-[28px] lg:text-[32px]"><span className='text-gray-200'>I{"'"}m a passionate </span>
                <TypeAnimation sequence={['Software Developer', 1000,
                    'Devops Engineer', 1000, 'Backend Engineer', 1000
                ]}
                    speed={50}
                    className="underline decoration-green-400"
                    repeat={Infinity}
                />
            </p>

            <ul className="flex items-center flex-wrap gap-x-2 md:gap-x-4 lg:gap-x-5 gap-y-2 my-5">
                {socialLinks
                    .map((value) => (
                        <li key={value.id}>
                            <Link
                                href={value.url}
                                className="flex items-center underline border-zinc-200 text-zinc-500 group  hover:decoration-green-400 hover:text-gray-100"
                            >
                                <value.icon
                                    className="flex-shrink-0 h-5 w-5 pr-1 text-zinc-500 group-hover:dark:text-white group-hover:text-green-400 group-hover:decoration-green-400 duration-300"
                                    aria-hidden="true"
                                />
                                {value.name}
                            </Link>
                        </li>
                    ))}
            </ul>
        </div>
    )
}
