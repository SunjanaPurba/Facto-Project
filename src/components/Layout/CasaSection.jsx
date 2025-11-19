import React from "react";
import leaf from "../../assets/Icon (12).png";
import visa from "../../assets/Frame 2121454921.png";
import money from "../../assets/Icon (13).png";
import cardSlash from "../../assets/Icon (14).png";
import cardAdd from "../../assets/Icon (15).png";
import cardTick from "../../assets/Icon (16).png";

const CasaSection = () => {
  const salesData = [28, 38, 32, 80, 68, 55, 48];

  return (
    <section className="pt-[80px] sm:pt-[160px] bg-white">
      <div className="text-center mx-auto px-4 md:px-0 flex flex-col items-center">
        <div className="px-5 sm:px-6 py-2 bg-[#DFEDE3] text-[#0F4E23] rounded-full text-[16px] sm:text-[18px] font-semibold">
          Why CASA Different
        </div>
        <h2
          className="mt-6 sm:mt-8 mb-6 font-roboto font-extrabold text-heading
                       text-[28px] sm:text-[32px] md:text-[36px] lg:text-[42px] xl:text-[48px] 2xl:text-[56px]
                       leading-[36px] sm:leading-[40px] md:leading-[44px] lg:leading-[52px] xl:leading-[56px] 2xl:leading-[68px]"
        >
          Why CASA Stands Out <br /> from the Rest
        </h2>
        <p
          className="font-manrope text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px]
                      leading-[22px] sm:leading-[26px] md:leading-[28px] lg:leading-[32px] xl:leading-[34px] 2xl:leading-[36px]
                      mb-[60px] sm:mb-[130px] max-w-full sm:max-w-[822px] px-2 sm:px-0 text-body"
        >
          Empowering businesses with faster cash access, CASA provides a secure,
          fast, and flexible solution to get early payments for credit card
          sales.
        </p>
      </div>
      <div className="container mx-auto bg-[#F8F8F8] py-[40px] sm:py-[80px] px-4 sm:px-[32px] flex flex-col xl:flex-row justify-between gap-12 xl:gap-[248px] relative">
        <div className="flex flex-col xl:flex-row gap-8 xl:relative">
          <div className="bg-[#E0F0E5] pl-6 sm:pl-[32px] py-10 pr-6 sm:pr-[80px] flex flex-col gap-9 rounded-[25px] w-full xl:w-[600px] shadow-lg relative">
            <div className="bg-white rounded-[25px] p-4 flex gap-3 items-center shadow-md">
              <div className="w-[40px] h-[40px] sm:w-[48px] sm:h-[48px] bg-[#F1F68E] rounded-full flex items-center justify-center">
                <img src={leaf} alt="Leaf Icon" />
              </div>
              <div>
                <h6 className="font-roboto font-semibold text-[16px] sm:text-[18px]">
                  Receive Money from Card
                </h6>
                <p className="font-manrope text-[#686868] text-[12px] sm:text-[14px] md:text-[14px] 2xl:text-[16px]">
                  Cash Deposited Within 24 Hours
                </p>
              </div>
            </div>
            <div className="flex justify-center mt-8 relative">
              <div className="w-full max-w-full sm:max-w-[550px] relative">
                <div className="bg-white rounded-[25px] shadow-lg p-4 overflow-x-auto">
                  <p className="flex gap-2 font-roboto text-[16px] sm:text-[18px] text-[#686868]">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="16" cy="16" r="16" fill="#0F4E23" />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.9911 10.716C13.9008 10.2944 13.2992 10.2944 13.2089 10.716L12.2533 15.1755C12.0161 16.2821 11.0382 17.0727 9.90653 17.0727H8.8C8.35817 17.0727 8 16.7145 8 16.2727C8 15.8308 8.35817 15.4727 8.8 15.4727H9.90653C10.2838 15.4727 10.6097 15.2092 10.6888 14.8403L11.6444 10.3807C12.0961 8.27283 15.1039 8.27281 15.5556 10.3807L18.0089 21.8294C18.0992 22.2509 18.7008 22.2509 18.7911 21.8294L19.7467 17.3698C19.9839 16.2632 20.9618 15.4727 22.0935 15.4727H23.2C23.6418 15.4727 24 15.8308 24 16.2727C24 16.7145 23.6418 17.0727 23.2 17.0727H22.0935C21.7162 17.0727 21.3903 17.3362 21.3112 17.7051L20.3556 22.1646C19.9039 24.2725 16.8961 24.2725 16.4444 22.1646L13.9911 10.716Z"
                        fill="white"
                      />
                    </svg>
                    Total Sales: <b>$12,500</b>
                  </p>
                  <div className="flex items-end justify-between h-[200px] gap-2 sm:gap-3 mt-4 bg-gray-100 p-4 rounded-lg">
                    {salesData.map((h, i) => (
                      <div
                        key={i}
                        className="relative w-[12px] sm:w-[40px] flex items-end"
                      >
                        <div
                          className="w-full transition-all duration-500 rounded-t block"
                          style={{
                            height: `${h * 2}px`, // <-- FIXED (always visible)
                            backgroundColor: i === 3 ? "#0F4E23" : "#E0F0E5",
                          }}
                        />
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-between text-xs sm:text-sm text-gray-500 mt-4">
                    {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                      (d) => (
                        <span key={d}>{d}</span>
                      )
                    )}
                  </div>
                </div>
                <div className="relative xl:absolute top-0 xl:top-1/2 xl:-translate-y-1/2 right-0 xl:right-[-300px] w-full xl:w-[280px] mt-6 xl:mt-0 bg-white rounded-[25px] p-6 flex flex-col gap-6 shadow-lg">
                  <div className="flex flex-col gap-4">
                    <h4 className="font-manrope font-bold text-[24px] leading-[34px]">
                      Top User
                    </h4>
                    <div className="flex items-center -space-x-3 sm:-space-x-4">
                      {[1, 2, 3, 4, 5].map((num) => (
                        <div
                          key={num}
                          className="w-[36px] h-[36px] sm:w-[40px] sm:h-[40px] rounded-full overflow-hidden border-2 border-white shadow-md"
                        >
                          <img
                            src={`https://randomuser.me/api/portraits/women/${num}.jpg`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-[#F8F8F8] rounded-[25px] p-4 flex flex-col gap-2">
                    <p className="text-[#686868] font-roboto font-semibold text-[14px]">
                      Enter Amount
                    </p>
                    <div className="flex items-center justify-between">
                      <p className="font-roboto font-semibold text-[20px]">
                        $50000
                      </p>
                      <img src={visa} alt="Visa" className="w-10 sm:w-12" />
                    </div>
                    <p className="text-[#686868] font-semibold text-[14px] font-roboto">
                      Discount rate : 10%
                    </p>
                  </div>
                  <button className="px-[40px] sm:px-[66px] py-[8px] rounded-full font-semibold text-[14px] bg-[#BFE5A6] flex items-center justify-center mt-2 shadow-md">
                    See Detail
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8 md:gap-9 lg:gap-[40px] px-0 sm:px-0 lg:px-0">
          <div className="flex flex-col gap-6 lg:gap-9 text-start">
            <h3 className="font-roboto font-semibold text-[26px] sm:text-[28px] md:text-[32px] leading-snug sm:leading-snug md:leading-tight">
              CASA offers instant, flexible funding <br /> from card
              transactions.
            </h3>
            <p className="text-[#686868] font-manrope text-[16px] sm:text-[18px] md:text-[20px] leading-relaxed">
              CASA stands out by offering fast, flexible, and transparent
              funding for business owners who need immediate cash flow from
              credit card transactions. Here’s what makes us unique
            </p>
          </div>

          <div className="text-[#686868] flex flex-col gap-4 sm:gap-8 md:gap-9 relative">
            {[
              { icon: money, title: "Instant Cash, No Waiting" },
              { icon: cardSlash, title: "No Hidden Fees, No Surprises" },
              { icon: cardAdd, title: "Seamless POS & Payment Processor" },
              { icon: cardTick, title: "Secure & Compliant Transactions" },
            ].map((item, index) => (
              <div key={index} className="flex gap-5 sm:gap-6 items-center">
                <div className="bg-[#DFEDE3] rounded-full w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center shadow-sm">
                  <img
                    src={item.icon}
                    alt=""
                    className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
                  />
                </div>
                <h4 className="font-roboto font-bold text-[20px] sm:text-[22px] md:text-[24px] leading-snug">
                  {item.title}
                </h4>
              </div>
            ))}

            <div className="relative w-full mt-4">
              <button className="absolute top-0 left-0 bg-[#0F4E23] text-white font-semibold text-[14px] px-6 sm:px-20 py-4 rounded-full shadow-md flex justify-start">
                Become a Member
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CasaSection;
