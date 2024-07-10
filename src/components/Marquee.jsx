import React from 'react';
import { motion } from 'framer-motion';

function Marquee() {
  return (
    <div className='w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#01453C] font-[Poppins]'>
      <div className="border-t-[0.1vw] border-b-[0.1vw] border-zinc-400 flex whitespace-nowrap gap-20 overflow-hidden">
        <motion.h1
          initial={{ x: '0%' }}
          animate={{ x: '-300%' }}
          transition={{
            repeat: Infinity,
            ease: 'linear',
            duration: 20, // Adjust the duration to control the speed
          }}
          className='capitalize text-[22vw] -my-7 md:-my-12 lg:-my-16 xl:-my-20'
        >
          We are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: '0%' }}
          animate={{ x: '-300%' }}
          transition={{
            repeat: Infinity,
            ease: 'linear',
            duration: 20, // Adjust the duration to control the speed
          }}
          className='capitalize text-[22vw] -my-7 md:-my-12 lg:-my-16 xl:-my-20'
        >
          We are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: '0%' }}
          animate={{ x: '-300%' }}
          transition={{
            repeat: Infinity,
            ease: 'linear',
            duration: 20, // Adjust the duration to control the speed
          }}
          className='capitalize text-[22vw] -my-7 md:-my-12 lg:-my-16 xl:-my-20'
        >
          We are ochi
        </motion.h1>
       
      </div>
    </div>
  );
}

export default Marquee;
