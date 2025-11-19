import React from "react";
import img1 from "../../assets/Icon (8).png";
import img2 from "../../assets/Icon (9).png";
import img3 from "../../assets/Icon (10).png";

const About = () => {
  const cards = [
    {
      img: img1,
      title: "Secure and Instant Cash Advances",
      text: "No more waiting weeks—convert daily credit card transactions into cash within 24 hours to keep your business running smoothly.",
      bg: "bg-[#FAFAFA]",
      textColor: "text-gray-800",
      hover: true,
    },
    {
      img: img2,
      title: "Transparent and Fair Pricing Process",
      text: "No Hidden Fees. No Surprises! Enjoy clear, upfront pricing with flexible funding options, so you always know what to expect.",
      bg: "bg-[#FAFAFA]",
      textColor: "text-gray-800",
      hover: true,
    },
    {
      img: img3,
      title: "Flexible and Secure Payout Options",
      text: "We offer flexible and easy payout options tailored to your needs, ensuring quick access to your funds. Choose from multiple payment methods.",
      bg: "bg-[#0F4E23]",
      textColor: "text-white",
      hover: false,
    },
  ];

  return (
    <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-[1350px] mx-auto px-4 sm:px-6 md:px-8 font-roboto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 mb-16">
          <div className="text-center lg:text-left">
            <span className="inline-block bg-[#E5F7E5] text-[#1A4D16] text-xs sm:text-sm md:text-base px-3 py-1 rounded-full mb-4">
              About Casa Service
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[46px] font-bold text-[#141414] leading-snug lg:leading-[56px]">
              Revolutionizing Cash Flow for Business Owners!
            </h2>
          </div>

          <div className="text-center lg:text-left lg:pt-6">
            <p className="text-base sm:text-lg md:text-xl lg:text-[20px] text-gray-600 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Empowering businesses with faster cash access, CASA provides a secure,
              fast, and flexible solution to get early payments for credit card sales.
            </p>

            <button className="bg-[#0F4E23] text-white rounded-full w-[150px] sm:w-[160px] md:w-[170px] h-[48px] sm:h-[52px] md:h-[56px] text-sm sm:text-base md:text-lg font-medium hover:bg-[#0b3a18] transition">
              Join Now
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">

          {cards.map((card, index) => (
            <div
              key={index}
              className={`
                ${card.bg}
                rounded-2xl p-8 sm:p-10 md:p-12
                transition-all duration-300
                group
                ${card.hover ? "hover:bg-[#0F3E1E] hover:text-white" : ""}
              `}
            >
              <img
                src={card.img}
                alt={card.title}
                className="w-12 h-12 sm:w-14 sm:h-14 mb-6"
              />

              <h3
                className={`text-lg sm:text-xl md:text-2xl font-bold mb-3 ${card.textColor} 
                ${card.hover ? "group-hover:text-white" : ""}`}
              >
                {card.title}
              </h3>

              <p
                className={`text-sm sm:text-base md:text-lg leading-relaxed ${card.textColor}
                ${card.hover ? "group-hover:text-white" : ""}`}
              >
                {card.text}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default About;
