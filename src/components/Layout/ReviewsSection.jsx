import React, { useState, useEffect, useRef } from "react";
import img from "../../assets/Other Company.png";
import img2 from "../../assets/Group.png";
import img3 from "../../assets/Profile (3).png";

export default function ReviewsSection() {
  const cards = [
    {
      title: "Game-Changer for My Business!",
      text: `CASA has completely transformed my cash flow. As a restaurant owner,
      waiting for credit card payments used to be a struggle. Now, I get my funds within 
      24 hours, allowing me to pay suppliers and staff on time. The process is seamless, 
      and the transparency in pricing is a huge plus.!`,
      img: img,
      userImg: img3,
      name: "Michael R",
      position: "Restaurant Owner",
    },
    {
      title: "Fast, Reliable, and Stress-Free!",
      text: `CASA has completely transformed my cash flow. As a restaurant owner,
      waiting for credit card payments used to be a struggle. Now, I get my funds within 
      24 hours, allowing me to pay suppliers and staff on time. The process is seamless, 
      and the transparency in pricing is a huge plus.!`,
      img: img2,
      userImg: img3,
      name: "Sarah M.",
      position: "Café Owner",
    },
    {
      title: "Game-Changer for My Business!",
      text: `CASA has completely transformed my cash flow. As a restaurant owner,
      waiting for credit card payments used to be a struggle. Now, I get my funds within 
      24 hours, allowing me to pay suppliers and staff on time. The process is seamless, 
      and the transparency in pricing is a huge plus.!`,
      img: img,
      userImg: img3,
      name: "Michael R",
      position: "Restaurant Owner",
    },
    {
      title: "Fast, Reliable, and Stress-Free!",
      text: `CASA has completely transformed my cash flow. As a restaurant owner,
      waiting for credit card payments used to be a struggle. Now, I get my funds within 
      24 hours, allowing me to pay suppliers and staff on time. The process is seamless, 
      and the transparency in pricing is a huge plus.!`,
      img: img2,
      userImg: img3,
      name: "Sarah M.",
      position: "Café Owner",
    },
  ];

  const [index, setIndex] = useState(0);
  const [cardsPerSlide, setCardsPerSlide] = useState(2);
  const totalSlides = Math.ceil(cards.length / cardsPerSlide);
  const carouselRef = useRef();

  useEffect(() => {
    const handleResize = () => {
      setCardsPerSlide(window.innerWidth < 768 ? 1 : 2);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % totalSlides);
    }, 3000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  return (
    <section className="py-20 max-w-6xl mx-auto text-center">
      <span className="text-sm bg-[#DFEDE3] text-[#0F4E23] px-3 py-1 rounded-full">
        Reviews
      </span>

      <h2 className="text-4xl font-bold mt-4">
        Hear What Customers Say <br /> About CASA!
      </h2>

      <p className="mt-3 text-gray-600 max-w-md mx-auto">
        Trusted by Thousands of Business Owners. See what our satisfied
        customers have to say about CASA.
      </p>

      <div className="relative mt-12 overflow-hidden" ref={carouselRef}>
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {Array.from({ length: totalSlides }).map((_, slideIndex) => (
            <div
              key={slideIndex}
              className="flex justify-center gap-4 w-full flex-shrink-0"
            >
              {cards
                .slice(
                  slideIndex * cardsPerSlide,
                  slideIndex * cardsPerSlide + cardsPerSlide
                )
                .map((card, i) => (
                  <div
                    key={i}
                    className="p-8 w-[550px] h-[385px] bg-[#F8F8F8] shadow rounded-xl text-left"
                  >
                    <div className="flex justify-between items-center">
                      <div className="flex text-yellow-400 text-xl">★★★★★</div>
                      <img
                        className="w-20 h-10 object-contain"
                        src={card.img}
                        alt="Review logo"
                      />
                    </div>

                    <h3 className="text-xl font-semibold mt-4">
                      "{card.title}"
                    </h3>

                    <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                      {card.text}
                    </p>

                    <div className="flex items-center gap-3 mt-6">
                      <img
                        className="w-10 h-10 rounded-full object-cover"
                        src={card.userImg}
                        alt={card.name}
                      />
                      <div>
                        <p className="font-semibold text-sm">{card.name}</p>
                        <p className="text-xs text-gray-500">{card.position}</p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-6 gap-2">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <div
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all 
                ${index === i ? "bg-[#0F4E23]" : "bg-gray-300"}`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
}
