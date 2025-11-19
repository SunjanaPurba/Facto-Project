import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import icon from "../../assets/Icon info.png";
import icon1 from "../../assets/Icon info (1).png";
import icon2 from "../../assets/Icon (5).png";
import icon3 from "../../assets/Icon (6).png";
import group from "../../assets/Group 1321314349.png";
import icon4 from "../../assets/Icon (7).png";
import profile1 from "../../assets/Profile (3).png";
import profile2 from "../../assets/2 (1).png";
import profile3 from "../../assets/4 (1).png";

const Card = () => {
  const salesData = [
    { day: "Sun", sales: 1250 },
    { day: "Mon", sales: 2100 },
    { day: "Tue", sales: 1850 },
    { day: "Wed", sales: 3200 },
    { day: "Thu", sales: 1900 },
    { day: "Fri", sales: 2300 },
    { day: "Sat", sales: 1600 },
  ];

  return (
    <div>
      <section className="flex justify-center w-full px-4 mt-16 sm:mt-20 md:mt-24 lg:mt-28">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12 w-full max-w-7xl mx-auto">
          <div className="bg-[#E0F0E5] rounded-2xl shadow-md p-5 sm:p-6 md:p-6 lg:p-7 flex flex-col justify-between min-h-[360px] sm:min-h-[380px] md:min-h-[420px] lg:min-h-[460px]">
            <div className="flex items-center gap-3 sm:gap-4 mb-4">
              <img
                src={icon}
                alt="icon"
                className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10"
              />
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#141414] font-roboto leading-tight">
                Sales overview from Previous Day
              </h2>
            </div>

            <div className="bg-white p-4 sm:p-5 rounded-xl shadow flex flex-col justify-between flex-grow">
              <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3">
                <img
                  src={icon1}
                  alt="sales icon"
                  className="w-5 h-5 sm:w-6 sm:h-6"
                />
                <p className="text-gray-600 text-sm sm:text-base font-manrope">
                  Total sales:&nbsp;
                  <span className="font-bold text-lg sm:text-xl">$12,500</span>
                </p>
              </div>

              <div className="w-full h-40 sm:h-44 md:h-52 lg:h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={salesData}
                    margin={{ top: 10, right: 5, left: -10, bottom: 10 }}
                  >
                    <CartesianGrid
                      strokeDasharray="3 3"
                      vertical={false}
                      stroke="#E0E0E0"
                    />
                    <XAxis
                      dataKey="day"
                      tick={{ fill: "#4B5563", fontSize: 10 }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <YAxis hide />
                    <Tooltip cursor={{ fill: "rgba(0,0,0,0.05)" }} />
                    <Bar
                      dataKey="sales"
                      fill="#0F4E23"
                      radius={[6, 6, 0, 0]}
                      barSize={20}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="text-right text-xs sm:text-sm font-semibold text-[#205A17] mt-2">
                Highest sale → $3,200
              </div>
            </div>

            <div className="flex items-center gap-2 bg-[#D1EACB] text-[#205A17] font-semibold text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mt-4">
              <img
                src={icon2}
                alt="avg sale"
                className="w-4 h-4 sm:w-5 sm:h-5"
              />
              <p>Avg. sale: $104.16 / per transaction</p>
            </div>
          </div>

          <div className="bg-[#DAFFC2] rounded-2xl shadow-md p-5 sm:p-6 md:p-6 lg:p-7 flex flex-col justify-between min-h-[360px] sm:min-h-[380px] md:min-h-[420px] lg:min-h-[460px]">
            <div className="flex items-center gap-3 sm:gap-4 mb-4">
              <img
                src={icon3}
                alt="icon"
                className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10"
              />
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#141414] font-roboto leading-tight">
                Factoring Possible Amount
              </h2>
            </div>

            <div className="bg-white rounded-xl shadow p-4 sm:p-5 text-center mb-4">
              <p className="text-gray-600 text-sm sm:text-base font-semibold">
                Available amount
              </p>
              <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#1B3B1A] mt-1">
                $15,375{" "}
                <span className="text-xs sm:text-sm font-semibold">USD</span>
              </p>
            </div>

            <div className="bg-white rounded-xl shadow p-4 sm:p-5">
              <div className="flex items-center gap-2 sm:gap-3 mb-2">
                <img
                  src={group}
                  alt="group"
                  className="w-7 h-7 sm:w-8 sm:h-8"
                />
                <p className="font-semibold text-[#141414] text-sm sm:text-base">
                  Factored amount vs. remaining balance
                </p>
              </div>
              <div className="bg-green-50 rounded-lg px-3 py-3">
                <div className="flex justify-between text-xs sm:text-sm text-gray-600 font-medium mb-2">
                  <p>Factored balance</p>
                  <p className="font-semibold text-[#1B3B1A]">$11,531.25</p>
                </div>
                <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-[#0F4E23] h-2 rounded-full transition-all duration-500"
                    style={{ width: "75%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#F1F68E] rounded-2xl shadow-md p-5 sm:p-6 md:p-6 lg:p-7 flex flex-col justify-between min-h-[360px] sm:min-h-[380px] md:min-h-[420px] lg:min-h-[460px] relative overflow-hidden">
            <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-6">
              <img
                src={icon4}
                alt="icon"
                className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10"
              />
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#141414] font-roboto leading-tight">
                Secure & Streamlined Workflow
              </h2>
            </div>

            <div className="flex flex-col items-center space-y-6 sm:space-y-7 md:space-y-8 lg:space-y-10 px-3 sm:px-4">
              <div className="bg-white rounded-2xl shadow-lg w-full max-w-[260px] sm:max-w-[300px] md:max-w-[340px] lg:max-w-[360px] p-4 sm:p-5 -rotate-6 transition-all duration-300 hover:rotate-0 hover:shadow-xl">
                <div className="flex justify-between items-center mb-2 sm:mb-3">
                  <p className="font-bold text-xs sm:text-sm lg:text-base text-black">
                    Recent Users
                  </p>
                  <p className="text-gray-400 text-xs cursor-pointer hover:underline">
                    View All
                  </p>
                </div>
                <div className="flex -space-x-2 sm:-space-x-3">
                  <img
                    src={profile1}
                    alt="user"
                    className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-full border-2 border-white"
                  />
                  <img
                    src={profile2}
                    alt="user"
                    className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-full border-2 border-white"
                  />
                  <img
                    src={profile3}
                    alt="user"
                    className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-full border-2 border-white"
                  />
                  <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-full bg-green-200 flex justify-center items-center text-xs sm:text-sm font-semibold text-[#205A17] border-2 border-white">
                    +5
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg w-full max-w-[220px] sm:max-w-[260px] md:max-w-[280px] lg:max-w-[300px] p-4 sm:p-5 text-center rotate-6 transition-all duration-300 hover:rotate-0 hover:shadow-xl">
                <p className="text-gray-500 text-xs sm:text-sm">
                  Total Balance
                </p>
                <p className="text-lg sm:text-xl lg:text-2xl font-bold text-black mt-1">
                  $23,576.00
                </p>
                <div className="flex items-center justify-center gap-1 mt-2 cursor-pointer">
                  <span className="bg-green-200 w-4 h-4 sm:w-5 sm:h-5 flex justify-center items-center text-xs sm:text-sm font-bold text-black rounded-full">
                    +
                  </span>
                  <p className="text-xs sm:text-sm text-gray-500 font-medium">
                    Add Number
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[380px] p-4 sm:p-5 -rotate-6 transition-all duration-300 hover:rotate-0 hover:shadow-xl">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <img
                      src={profile1}
                      alt="Tony Restaurant"
                      className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-full"
                    />
                    <div>
                      <p className="text-sm sm:text-base lg:text-lg font-semibold text-black">
                        Online
                      </p>
                      <p className="text-xs text-gray-500 mt-0.5">
                        Tony Restaurant
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm sm:text-base font-bold text-black">
                      +$10K
                    </p>
                    <span className="inline-block mt-1 bg-[#E5F7E5] text-[#227222] text-xs px-2 py-0.5 rounded-full font-semibold cursor-pointer hover:bg-[#d0f0d0] transition">
                      Confirm
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Card;
