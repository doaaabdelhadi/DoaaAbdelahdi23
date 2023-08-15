import React from "react";

const Bio = () => { 
  return (
    <div
      name="Bio"
      id="Bio"
      className="w-full h-screen bg-[#0a192f] text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className=" py-6 rounded-md bg-cyan-800 flex flex-col justify-center items-center w-4/6">
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-5 mb-6">
            <div className="sm:text-right pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-4 border-cyan-500">
                Bio
              </p>
            </div>
            <div></div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 items-center">
            <div className="sm:text-left text-3xl font-bold text-gray-400  ">
              <p>
              Welcome to The Era Of Data
              </p>
            </div>
            <div>
              <text className="text-gray-300 py-4 max-w-md text-xl sm:text-xl">
                {" "}
                 Data analyst with <span className=" text-cyan-500 font-bold"> 3 years of experience</span>, 
                 currently working at <span className=" text-cyan-500 font-bold">
                 BDF
                  </span>.
                 Looking forward to understand more about 
                 <span className="text-cyan-500  font-bold"> human behavior uisng AI.</span>
                 
              </text>
              <text className="text-gray-300 py-4 max-w-md text-xl sm:text-xl">
              {"  "}
                 The greatest achievement was that living alone without my family 
                 and shifted my career to her lovely track <span className="text-cyan-500 font-bold"> Data Science</span>.
              </text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Bio;