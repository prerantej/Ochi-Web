import React from 'react';

function LandingPage() {
  return (
    <div className='h-screen w-full bg-zinc-900 pt-1'>
      <div className='px-8 mt-28 md:px-10  xl:px-12 xl:mt-36'>
        <div className="masker">
          <h1 className="uppercase text-5xl md:text-7xl xl:text-8xl font-['Poppins']">We create</h1>
        </div>
        <div className="masker flex flex-row space-x-3">
          <div className="mt-2 h-20 w-28 rounded-md bg-[#01453C]"></div>
          <h1 className="uppercase text-5xl md:text-7xl xl:text-8xl font-['Poppins']">EYE-OPENING</h1>
        </div>
        <div className="masker">
          <h1 className="uppercase text-5xl md:text-7xl xl:text-8xl font-['Poppins']">PRESENTATIONS</h1>
        </div>
      </div>

      <div className="mt-52 border-t-2 border-zinc-700 xl:mt-32"></div>

      <div className="bottombox mt-2 px-8 font-[Neue Montreal] font-light flex flex-col space-y-8 justify-start md:flex-row md:mt-1 md:space-y-2 md:space-x-8 md:justify-between md:items-center md:text-center md:px-10 xl:px-8">
        <h2 className=''>For public and private companies</h2>
        <h2 className=''>From the first pitch to IPO</h2>
        <button className='uppercase h-8 w-40 rounded-full border-zinc-700 border-2 hover:bg-white hover:text-black'>Start the project</button>
      </div>
    </div>
  );
}

export default LandingPage;
