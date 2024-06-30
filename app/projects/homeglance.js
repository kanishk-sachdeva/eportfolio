import React from 'react'
import { Margarine, Libre_Baskerville } from 'next/font/google';
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { projects } from './projects';

const margarine = Margarine({
    weight: '400',
    subsets: ['latin']
});

const libre_Baskerville = Libre_Baskerville({
    weight: '700',
    subsets: ['latin']
});

const Projectatglance = ({ projectName, projectDesc }) => {
    return (

        <a href="#" className="block max-w-sm p-4 bg-transparent border border-gray-200 opacity-70 rounded-lg shadow hover:text-black hover:bg-gray-100">

            <h5 className="mb-2 text-2xl font-bold tracking-tight">{projectName}</h5>
            <p className="font-normal">{projectDesc.substring(0, 40)}...</p>
        </a>

    )
}

const HomeGlance = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    return (
        <div>
            <h3 className={`text-3xl ${libre_Baskerville.className} font-extrabold`}>Projects at Glance</h3>
            <div className="">
                <motion.div
                    ref={ref}
                    variants={{
                        initial: { x: 50, opacity: 0 },
                        animate: { x: 0, opacity: 1 },
                    }}
                    initial="initial"
                    animate={isInView ? "animate" : "initial"}
                    transition={{ ease: "easeIn" }}
                    className="grid grid-cols-1 gap-2 mt-3"
                >
                    {projects.map((project) => (
                        <Projectatglance key={project.title} projectName={project.title} projectDesc={project.content} />
                    ))}
                </motion.div>
                {/* <Projectatglance />
                <Projectatglance />
                <Projectatglance /> */}
            </div>
        </div>
    )
}

export default HomeGlance;


