import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import me from '../assets/me.png';
import { Link } from "react-scroll"; 
import { useTypewriter, Cursor } from 'react-simple-typewriter';


  

const Home = () => {
  const [introdoaa] = useTypewriter({
    words: ['Bi Developer', 'Data Analyst', 'SQL Developer', 'ETL Developer'],
    loop: true,
    typeSpeed: 20,
    deleteSpeed:10,
    delaySpeed:2000
  })

  return (
    <div
    name="home"
    className="h-screen w-full bg-[#0a192f]"
  >
    <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
      <div className="flex flex-col justify-center h-full">
        <h2 className="text-3xl sm:text-5xl font-bold text-white">
          I'm Doaa Abdelhadi
        </h2>
        <h5 className="text-gray-500 py-4 max-w-md text-3xl sm:text-3xl font-bold">
         {introdoaa}
         <Cursor cursorColor='orange' />
         </h5>
         <p className="text-gray-500 py-4 max-w-md text-xl sm:text-xl">
         Welcome to The Era Of Data, nice to meet you. Please take a
                look around. {" "}   <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
          
        </p>
        <div>
          <Link
            to="Bio"
            smooth
            duration={500}
            className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
          >
            About Me
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight size={25} className="ml-3" />
            </span>
          </Link>
        </div>
        <div>
          <a
            href="https://drive.google.com/file/d/1293wmZWndMBjv1ltMmAn4g6DqJRp8sX7/view?usp=sharing"
            target="_blank" rel="noreferrer"  className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            
            duration={1000}
          >
            Resume
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight size={25} className="ml-3" />
            </span>
          </a>
        </div>
      </div>
      <div>
        <img
          src={me}  
          alt="my profile"
          className="rounded-2xl mx-auto w-4/3 md:w-full"
        />
      </div>
    </div>
  </div>
  );
};
export default Home;