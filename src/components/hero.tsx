import React, { useState, useEffect } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { caretRight } from "./icons";

export default function Hero() {
  const [isHover, setIsHover] = useState(false);
  return (
    <div className='w-full controlled-h flex items-center justify-center'>
      <div className='h-[100%] w-full flex justify-center items-center bg-whiterounded-full'>
        <img
          src='raian-astro/assets/hero1.jpg'
          className='h-screen object-cover'
          alt='Hero image'
        />
        <div className='flex absolute custom-circle opacity-80 backdrop-blur-md flex-col items-center justify-center gap-2 bg-[#C78665] md:h-[35rem] md:w-[35rem] sm:h-[24rem] sm:w-[24rem] h-[19rem] w-[19rem] rounded-full'>
          <h3 className='font-poppins'>Fotografie-videografie nuntă</h3>
          <h1 className='sm:text-[4rem] text-[3rem] font-flower'>
            Raian Visual
          </h1>
          <div className='flex gap-2 items-center z-30'>
            <a href='/photo'>
              <button
                onMouseOver={() => setIsHover(true)}
                onMouseOut={() => setIsHover(false)}
                className=''
              >
                Hai să vezi portofoliul!
              </button>
            </a>
            <span
              className={`${
                isHover ? "translate-x-6" : "translate-x-0"
              } movement text-[#ffdd00] opacity-80`}
            >
              {caretRight}
            </span>
          </div>
          <div>
            <a href='/offer'>
              <button
                onMouseOver={() => setIsHover(true)}
                onMouseOut={() => setIsHover(false)}
                className=''
              >
                Calendar disponibil!
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
