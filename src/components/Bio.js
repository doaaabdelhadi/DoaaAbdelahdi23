import React from "react";

const Bio = () => { 
  return (
    <div
      name="Bio"
      id="Bio"
      className="w-full h-screen bg-[#0a192f] text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className=" py-16 rounded-md bg-cyan-800 flex flex-col justify-center items-center w-4/6">
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4">
            <div className="sm:text-right pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-4 border-cyan-500">
                Bio
              </p>
            </div>
            <div></div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl font-bold">
              <p>
              Hi. I'm Doaa Abdelhadi, nice to meet you. Please take a
                look around.
              </p>
            </div>
            <div>
              <p>
                {" "}
                 Data analyst with 2 years of experience, currently working at BDF.
                 Looking forward to understand more about human behavior uisng AI. 
                 The greatest achievement was that living alone without my family 
                 and shifted my career to her lovely track "Data Science".
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Bio;