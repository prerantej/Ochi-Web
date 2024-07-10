import React from 'react'

function About() {
  return (
    <div className='w-full h-auto bg-[#B8D25E] pt-1 rounded-tl-3xl rounded-tr-3xl -mt-3'>
        <div className=" HEADERLINE py-20 px-10 border-b-[0.1vw] font-[Neue Montreal] font-normal  border-black">
          <h1 className='md:w-[90%]  text-black text-[6vw] md:text-[4vw] xl:text-[3.5vw] leading-[5vw] md:leading-8 lg:leading-10 xl:leading-10'>Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>
        </div>

        <div className="SMALL HEADER text-black flex flex-col md:flex md:flex-row font-[Neue Montreal] font-normal py-10 px-10 border-b-[0.1vw] border-black">
            <div className="a py-4 md:py-0 md:w-[30%] lg:w-[50%] ">What you can expect:</div>
            <div className="b py-4 md:py-0 md:w-[30%]  flex flex-col gap-9" >
              <div className="textbox h-[50%] lg:w-[75%]">We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people.</div>
              <div className="textbox h-[50%] lg:w-[75%]">We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.</div>
            </div>
            <div className="c py-4 md:py-0 md:w-[30%]  leading-8 ">
              <p className='pl-3'>S:</p>
              <ul>
                <li><a className='px-3  hover:text-gray-600' href="https://www.instagram.com/ochi_design/">Instagram</a></li>
                <li><a className='px-3 hover:text-gray-600' href="https://www.behance.net/ochi_design">Behance</a></li>
                <li><a className='px-3 hover:text-gray-600' href="https://www.facebook.com/profile.php?id=100067218942460">Facebook</a></li>
                <li><a className='px-3 hover:text-gray-600' href="https://www.linkedin.com/company/ochi-design/">LinkedIn</a></li>
              </ul>
            </div>
        </div>

        <div className="our_approach flex flex-col md:flex md:flex-row py-20 px-8  font-[Neue Montreal] font-normal  border-black text-black gap-7">
          <div className="1stbox py-4 md:py-0 md:w-[50%] e flex flex-col gap-7 ">
            <h1 className='text-[6vw] md:text-[4vw] xl:text-[3.5vw] leading-[5vw] md:leading-8 lg:leading-10 xl:leading-10'>Our approach:</h1>
            <button className='uppercase h-[8vh] w-[30vw] md:w-[20vw] lg:w-[15vw] rounded-full text-white bg-zinc-900 border-zinc-700 border-2 hover:bg-white hover:text-black'>read more</button>
          </div>
          <div className="2ndbox ">
            <img src="images/about photo.jpg" alt="" className='rounded-2xl' />
          </div>
        </div>
    </div>
  )
}

export default About