import React, { useState, useEffect } from 'react';
import Frame42 from '../assets/Frame42.png'; 

function Eyes() {
  const divStyle = {
    backgroundImage: `url(${Frame42})`, 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      let elX = e.clientX;
      let elY = e.clientY;

      let deltaX = elX - window.innerWidth / 2;
      let deltaY = elY - window.innerHeight / 2; 

      let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove); // Cleanup the event listener
    };
  }, []);

  return (
    <div className='eyes w-full h-screen overflow-hidden'>
      <div className="relative w-full h-screen" style={divStyle}>
        <div className="flex gap-[1vw] absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
          <div className="relative w-[30vw] h-[30vw] md:w-[15vw] md:h-[15vw] bg-white rounded-full">
            <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-2/3 h-2/3 rounded-full bg-zinc-900">
              <div
                style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }}
                className="LINE absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-[3vh]"
              >
                <div className="w-[4vw] h-[4vw] md:w-[2.57vw] md:h-[2.57vw] lg:w-[1.8vw] lg:h-[1.8vw] xl:w-[1.5vw] xl:h-[1.5vw] bg-white rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="relative w-[30vw] h-[30vw] md:w-[15vw] md:h-[15vw] bg-white rounded-full">
            <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-2/3 h-2/3 rounded-full bg-zinc-900">
              <div
                style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }}
                className="LINE absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-[3vh]"
              >
                <div className="w-[4vw] h-[4vw] md:w-[2.57vw] md:h-[2.57vw] lg:w-[1.8vw] lg:h-[1.8vw] xl:w-[1.5vw] xl:h-[1.5vw] bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;
