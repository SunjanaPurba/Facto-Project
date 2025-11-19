import React from "react";
import icon from "../../assets/icon (3) (1).png";
import img from "../../assets/Profile (3).png";
import img2 from "../../assets/Profile (4).png";
import img3 from "../../assets/Icon (11).png";

const HowItWorks = () => {
  return (
    <div className="bg-[#F8F8F8] py-14 sm:py-20 md:py-24 lg:py-28 px-4 font-roboto overflow-x-hidden">
      <div className="max-w-[900px] mx-auto text-center mb-10 sm:mb-14 md:mb-16">
        <span className="inline-block bg-[#DFEDE3] text-[#0F4E23] text-xs sm:text-sm md:text-base font-medium px-3 sm:px-4 py-1 sm:py-1.5 rounded-full mb-3 sm:mb-5">
          How it works
        </span>

        <h2 className="text-2xl sm:text-3xl md:text-[42px] lg:text-[52px] font-bold text-[#141414] leading-snug md:leading-[58px] lg:leading-[66px] mb-4 sm:mb-6">
          Simple & Fast
          <br className="block sm:hidden" />
          Receive Your Payment in 3 Steps!
        </h2>

        <p className="text-sm sm:text-lg md:text-xl lg:text-[22px] text-gray-500 leading-relaxed sm:leading-7 md:leading-[34px] font-manrope px-2">
          Empowering businesses with faster cash access, CASA provides a secure,
          fast, and flexible solution to get early payments for credit card
          sales.
        </p>
      </div>
     <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
        <div className="bg-white rounded-3xl p-5 sm:p-6 md:p-7 shadow-md flex flex-col">
          <div className="bg-[#DAFFC2] rounded-2xl p-4 sm:p-5 mb-5 sm:mb-6">
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#1B3B1A] mb-3 sm:mb-4">
              Sign Up
            </h3>

            <input
              type="text"
              placeholder="Name"
              className="w-full p-2 sm:p-3 rounded-lg bg-white border border-gray-300 text-gray-700 mb-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#1A4D16]"
            />
            <input
              type="text"
              placeholder="Company name"
              className="w-full p-2 sm:p-3 rounded-lg bg-white border border-gray-300 text-gray-700 mb-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#1A4D16]"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 sm:p-3 rounded-lg bg-white border border-gray-300 text-gray-700 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#1A4D16]"
            />
          </div>

          <div>
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-3 sm:mb-4">
              Connect Your Business
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm mb-4">
              Sign up and link your credit card processor or POS system with
              CASA. We support all major payment providers.
            </p>

            <ul className="space-y-2">
              <li className="flex items-center text-[#686868] text-xs sm:text-sm">
                <img src={icon} alt="check" className="w-4 h-4 mr-2" />
                Fast approval & easy integration
              </li>
              <li className="flex items-center text-[#686868] text-xs sm:text-sm">
                <img src={icon} alt="check" className="w-4 h-4 mr-2" />
                No impact on your credit score
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-white rounded-3xl p-5 sm:p-6 md:p-7 shadow-md flex flex-col">
          <div className="bg-[#F1F68E] rounded-2xl p-4 sm:p-5 mb-5 sm:mb-6">
            <div className="bg-white rounded-2xl p-3 flex flex-col sm:flex-row sm:items-center justify-between mb-4">
              <div className="flex items-center gap-2 mb-3 sm:mb-0 flex-1 min-w-0">
                <img
                  src={img}
                  alt="profile"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex-shrink-0"
                />
                <div className="truncate">
                  <p className="font-semibold text-gray-800 text-sm sm:text-base truncate leading-none">
                    Maria Kosta
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600 truncate">
                    Maria@gmail.com
                  </p>
                </div>
              </div>
              <p className="text-lg sm:text-xl font-bold text-[#1B3B1A] flex-shrink-0">
                +$10K
              </p>
            </div>
            <div className="flex justify-between items-center mb-2 flex-nowrap min-w-0">
              <p className="text-sm sm:text-lg font-bold text-gray-800 truncate">
                $12,000.00
              </p>
              <p className="text-xs sm:text-sm text-gray-600 truncate">
                discount rate
              </p>
            </div>

            <button className="flex items-center justify-between w-full mt-3 bg-[#DAFFC2] py-2 px-3 rounded-lg text-xs sm:text-sm text-gray-700 font-semibold">
              See detail
              <span className="inline-block w-4 h-4 bg-[#1A4D16] text-white flex items-center justify-center rounded-full text-xs rotate-45">
                →
              </span>
            </button>
          </div>

          <div>
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-3 sm:mb-4">
              Transactions for Early Payment
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm mb-4">
              Every morning, your previous day's credit card transactions are
              automatically submitted for funding.
            </p>

            <ul className="space-y-2">
              <li className="flex items-center text-[#686868] text-xs sm:text-sm">
                <img src={icon} alt="check" className="w-4 h-4 mr-2" />
                No waiting for 30-60 day settlements
              </li>
              <li className="flex items-center text-[#686868] text-xs sm:text-sm">
                <img src={icon} alt="check" className="w-4 h-4 mr-2" />
                Transparent discount rates
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-white rounded-3xl p-5 sm:p-6 md:p-7 shadow-md flex flex-col">
          <div className="bg-[#DAFFC2] rounded-2xl p-4 sm:p-5 mb-5 sm:mb-6">
            <div className="bg-white rounded-lg p-3 flex flex-col sm:flex-row items-center gap-3 mb-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                <img
                  src={img3}
                  alt="Receive Money"
                  className="w-10 h-10 object-cover"
                />
              </div>
              <div>
                <p className="text-xs sm:text-sm font-semibold text-gray-800 leading-none">
                  Receive Money from card
                </p>
                <p className="text-[10px] sm:text-xs text-gray-600">
                  Cash Deposited Within 24 Hours
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-2 sm:p-3">
              <div className="flex justify-between items-center mb-2">
                <p className="text-xs sm:text-sm font-semibold text-gray-800">
                  Recent User
                </p>
                <p className="text-xs sm:text-sm text-[#1A4D16] font-semibold cursor-pointer">
                  View All
                </p>
              </div>
              <img src={img2} alt="Recent users" className="w-full mt-2" />
            </div>
          </div>

          <div>
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-3 sm:mb-4">
              Receive Funds & Grow
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm mb-4">
              Every morning, your previous day's credit card transactions are
              automatically submitted for funding.
            </p>

            <ul className="space-y-2">
              <li className="flex items-center text-[#686868] text-xs sm:text-sm">
                <img src={icon} alt="check" className="w-4 h-4 mr-2" />
                Same-day or next-day payouts
              </li>
              <li className="flex items-center text-[#686868] text-xs sm:text-sm">
                <img src={icon} alt="check" className="w-4 h-4 mr-2" />
                Flexible repayment from future sales
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
