import React from "react";
import img from "/src/assets/illustration.png";

const Banner = () => {
  return (
    <div className="flex justify-center items-center px-4">
      <div className="max-w-[1042px] w-full mx-auto text-center mt-20 sm:mt-28 md:mt-36">
        <div
          className="inline-block px-5 py-2 rounded-full bg-[#DFEDE3] text-emerald-700 mb-6 font-manrope font-medium 
        text-sm sm:text-base md:text-lg leading-tight"
        >
          Fast. Secure. Hassle-Free
        </div>
        <h1
          className="font-roboto font-extrabold text-[#141414]
        text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl
        leading-snug sm:leading-[50px] md:leading-[58px] lg:leading-[72px] xl:leading-[82px]
        mb-4 sm:mb-5 md:mb-6"
        >
          <span className="inline-flex flex-col sm:flex-row lg:flex-row items-center justify-center gap-2 sm:gap-3 md:gap-4 whitespace-nowrap">
            <span>Get Paid Faster</span>
            <img
              src={img}
              alt="illustration"
              className="w-8 sm:w-10 md:w-12 lg:w-[72px] xl:w-[72px] inline-block align-middle"
            />
            <span>Instant Cash</span>
          </span>

          <br className="block sm:hidden lg:block" />

          <span>for Businesses!</span>
        </h1>
        <p
          className="text-[#555555] text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 
        leading-6 sm:leading-7 md:leading-8 lg:leading-9 font-manrope font-normal 
        mx-auto max-w-[700px] mb-8 md:mb-10 lg:mb-12"
        >
          Stop waiting months for credit card payments. CASA helps business
          owners access cash instantly by converting card transactions into
          immediate funds.
        </p>
        <button
          type="button"
          className="w-[160px] sm:w-[180px] md:w-[192px] lg:w-[210px] xl:w-[220px] 
          h-[48px] sm:h-[52px] md:h-[58px] py-3 rounded-full bg-[#0F4E23] text-white 
          font-manrope font-semibold text-base sm:text-lg md:text-lg lg:text-xl xl:text-xl leading-tight"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Banner;
