import React from 'react';
import video from '../assets/video.jpg';
import Presentation from '../assets/Presentation.jpg';
const Portfolio  = () => {
  return (
    <div name='Portfolio' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8 w-full flex justify-center items-center flex-col'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-500'>
            Portfolio
          </p>
          <p className='py-6 text-2xl'>Check out some of my most recent Portfolio</p>
        </div>
{/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${video})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
              <span className=' text-lg font-bold text-white tracking-wider'>
              Education  video
              </span>
              <p className='text-center'>Teach Me application</p>
              <div className='pt-8 text-center'>
                <a href='https://drive.google.com/file/d/1D2CgPMIEFwJiPCLncN8dBSSzA_hu_T25/view?usp=sharing' target="_blank" rel="noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-600 font-bold text-lg'>
                    Project  video
                  </button>
                </a>
             
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Presentation})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
              <span className=' text-lg font-bold text-white tracking-wider'>
              Education Presentation
              </span>
              <p className='text-center'>Teach Me application </p>
              <div className='pt-8 text-center'>
                <a href='https://drive.google.com/file/d/1KLqd_6aAN_uWmOeeNqzQOK6A9tEWnI9H/view?usp=sharing' target="_blank" rel="noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-600 font-bold text-lg'>
                    Project Presentation
                  </button>
                </a>
              
              </div>
            </div>
          </div>
        
          
        
        </div>
      </div>
    </div>
  );
};
export default Portfolio ;