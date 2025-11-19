import React from "react";
import img from "../../assets/Group 554.png";

export default function PricingSection() {
  return (
    <section className="py-10 sm:py-20 bg-gray-50 text-center">
      <span className="text-sm bg-[#DFEDE3] text-[#0F4E23] px-3 py-1 rounded-full tracking-wider">
        Pricing
      </span>
      <h2 className="text-3xl sm:text-4xl font-bold mt-4 leading-tight">
        Simple, Transparent
        <br />
        Pricing&nbsp;&nbsp;No Hidden Fees!
      </h2>
      <p className="mt-3 text-[#686868] max-w-xl mx-auto text-sm sm:text-base">
        Trusted by Thousands of Business Owners See what our <br /> satisfied
        customers have to say about CASA.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto mt-12">
        <div className="p-6 sm:p-8 bg-[#F2F2F2] shadow-lg rounded-2xl text-left transform transition duration-300 hover:bg-[#0F4E23] hover:scale-105">
          <h3 className="text-[#686868] font-bold text-xl">Basic Plan</h3>
          <div className="flex justify-center sm:justify-start mt-3">
            <p className="text-[#141414] text-4xl sm:text-5xl font-bold">2%</p>
            <p className="text-center text-[#686868] text-sm sm:mt-6 pl-4">Discount Rate</p>
          </div>
          <button className="mt-6 w-full bg-[#FFFFFF] py-3 rounded-lg font-semibold hover:bg-[#F1F68E] transition">
            Get Started
          </button>
          <p className="mt-4 text-sm text-[#686868] font-semibold">
            For businesses processing up to <br />
            $10,000/month
          </p>
          <div className="mt-6 p-4 bg-gray-50 text-[#686868] font-semibold rounded-xl space-y-3 text-sm">
            <h1 className="text-[#141414] font-semibold">What’s Included?</h1>
            {["Instant Fund Transfers", "Real-time Transaction Monitoring", "Seamless POS Integration", "24/7 Customer Support"].map((item, index) => (
              <p key={index} className="flex gap-2 items-center">
                <img src={img} alt="" className="w-4 h-4" />
                {item}
              </p>
            ))}
          </div>
        </div>

        <div className="p-6 sm:p-8 bg-[#0F4E23] text-white shadow-2xl rounded-2xl text-left relative transform transition duration-300 hover:scale-105 hover:bg-green-800">
          <h3 className="font-semibold text-xl">Enterprise Plan</h3>
          <p className="text-3xl font-bold mt-3">Custom Rate</p>
          <button className="mt-6 w-full bg-[#F1F68E] py-3 rounded-lg font-semibold text-[#141414]">
            Get Started
          </button>
          <p className="text-sm text-[#FFFFFF] mt-1 pt-4">
            Tailored for high-volume businesses
          </p>
          <div className="mt-6 p-4 bg-white text-[#686868] font-semibold rounded-xl space-y-3 text-sm">
            <h1 className="text-[#141414] font-semibold">What’s Included?</h1>
            {["Instant Fund Transfers", "Real-time Transaction Monitoring", "Seamless POS Integration", "24/7 Customer Support"].map((item, index) => (
              <p key={index} className="flex gap-2 items-center">
                <img src={img} alt="" className="w-4 h-4" />
                {item}
              </p>
            ))}
          </div>
        </div>

        <div className="p-6 sm:p-8 bg-[#F2F2F2] shadow-lg rounded-2xl text-left transform transition duration-300 hover:bg-[#0F4E23] hover:scale-105">
          <h3 className="font-bold text-[#686868] text-xl">Growth Plan</h3>
          <div className="flex justify-center sm:justify-start mt-3">
            <p className="text-[#141414] text-4xl sm:text-5xl font-bold">1.5%</p>
            <p className="text-center text-[#686868] text-sm sm:mt-6 pl-4">Discount Rate</p>
          </div>
          <button className="mt-6 w-full bg-[#FFFFFF] text-[#141414] py-3 rounded-lg font-semibold hover:bg-[#F1F68E] transition">
            Get Started
          </button>
          <p className="mt-4 text-sm text-[#686868] font-semibold">
            For businesses processing up to $10,000 – $50,000/month
          </p>
          <div className="mt-6 p-4 bg-gray-50 text-[#686868] font-semibold rounded-xl space-y-3 text-sm">
            <h1 className="text-[#141414] font-semibold">What’s Included?</h1>
            {["Instant Fund Transfers", "Real-time Transaction Monitoring", "Seamless POS Integration", "24/7 Customer Support"].map((item, index) => (
              <p key={index} className="flex gap-2 items-center">
                <img src={img} alt="" className="w-4 h-4" />
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}