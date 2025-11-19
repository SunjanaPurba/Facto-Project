import React from "react";
import img1 from "../../assets/1 (1).png";
import img2 from "../../assets/3 (1).png";
import img3 from "../../assets/4 (2).png";
import img4 from "../../assets/5 (2).png";
import img5 from "../../assets/6.png";

const Trusted = () => {
  const logos = [img1, img2, img3, img4, img5];

  return (
    <section className="bg-[#0F3E1E]  max-w-[1920px] py-8 md:py-12 px-4 md:px-16 lg:px-40 font-roboto overflow-hidden">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
        <div className="text-center md:text-left flex-shrink-0">
          <p className="text-[#f8f8f8] text-[18px] sm:text-[20px] font-bold leading-[28px]">
            Trusted by <br /> Top Companies
          </p>
        </div>
        <div className="hidden md:block h-10 w-px border-l-2 border-[#1f9741]" />
        <div className="w-full overflow-hidden">
          <div className="flex whitespace-nowrap animate-marquee">
            {logos.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt="Company"
                className="inline-block h-7 mx-4"
              />
            ))}
            {logos.map((logo, index) => (
              <img
                key={`dup-${index}`}
                src={logo}
                alt="Company"
                className="inline-block h-7 mx-4"
              />
            ))}
          </div>
        </div>
      </div>
      <style>
        {`
                    @keyframes marquee {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                    }
                    .animate-marquee {
                        display: flex;
                        animation: marquee 20s linear infinite;
                    }
                    @media (max-width: 640px) {
                        .animate-marquee {
                            animation: marquee 15s linear infinite;
                        }
                    }
                `}
      </style>
    </section>
  );
};

export default Trusted;
