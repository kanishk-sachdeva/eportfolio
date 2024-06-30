import React from 'react'
import { Poppins } from "next/font/google";
import Image from 'next/image';

const poppins = Poppins({
  weight: '700',
  subsets: ['latin']
});

const About = () => {
  return (
    <div className='mx-auto lg:w-3/4 max-h-3/4 p-6 bg-black opacity-90'>

      <h1 className={`${poppins.className} relative text-md font-bold uppercase after:absolute after:content-[''] after:w-[120px] after:h-[1px] after:bg-[#4ceb95] after:my-[10px] after:mx-[10px]`}>About</h1>
      <h3 className='text-2xl font-semibold uppercase mt-2'>Learn more about me</h3>

      <div className='flex flex-col md:flex-row lg:flex-row mt-5'>
        <div className='lg:w-1/3 w-full p-3'>
          <Image src='/images/mypic.jpeg' alt='Kanishk Sachdeva' width={350} height={350} />
        </div>
        <div className='lg:w-2/3 mx-[18px]'>
          <h3 className='text-2xl font-semibold'>Kanishk Sachdeva</h3>
          <p className='text-md lg:text-md font-normal mt-2'>I am a full-stack developer with a passion for building web applications. I have experience in building web applications using React, Node.js, and MongoDB. I am also familiar with other technologies such as Express.js, Next.js, and Firebase. I am always looking to learn new technologies and improve my skills.</p>

          <ul className='grid relative text-md list-none grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 mt-5'>
            <li className="before:content-['▶'] text-gray-100 before:mx-2 before:text-white ps-6"><span className='font-bold text-white'>Birthday</span>: 2 September 2002</li>
            <li className="before:content-['▶'] text-gray-100 before:mx-2 before:text-white ps-6"><span className='font-bold text-white'>Phone</span>:</li>
            <li className="before:content-['▶'] text-gray-100 before:mx-2 before:text-white ps-6"><span className='font-bold text-white'>Email</span>: ksachde7@my.centennialcollege.ca</li>
            <li className="before:content-['▶'] text-gray-100 before:mx-2 before:text-white ps-6"><span className='font-bold text-white'>City</span>: 33 Dolobram Tr, Brampton</li>
        
            </ul>

            {/* <p className='text-md lg:text-md font-normal mt-5'>Software has been my interest since I was a small kid. I recall sitting on my laptop for hours generating fresh innovative ideas and executing them on my laptop by debugging from scratch all the time. It was incredible experience to combat intricate problems and mental handler questions from "Hello, world" to creating huge, complex web apps. My training starts with WordPress and then proceeds to create the Android App every day in JAVA. I couldn't stop learning new things at that time.

.</p> */}
        </div>

      </div>
    </div>
  )
}
export default About;
