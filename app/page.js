'use client'

import { Poppins } from "next/font/google";
import { Navbar } from "./common/Navbar";
import { HomeHero } from "./components/home";
import { Footer } from "./common/Footer";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import HomeGlance from "./projects/homeglance";


const poppins = Poppins({
  weight: '700',
  subsets: ['latin']
});

const cardVariants = {
  initial: { y: 50, opacity: 0 },
  animate: { y: 0, opacity: 1 },
};

const Home = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (

    <div className="flex flex-row justify-between max-w-screen-2xl mx-20">
      <motion.div
        ref={ref}
        variants={cardVariants}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
        transition={{ ease: "easeOut" }}
        className="flex justify-between items-center flex-col m-auto md:p-12 lg:p-20"
      >
        <HomeHero />
      </motion.div>
      <div className="hidden md:hidden lg:block">
        <HomeGlance />
      </div>
    </div>
  );
}

export default Home;
