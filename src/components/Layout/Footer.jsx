import React from "react";
import img from "../assets/Casa logo (1).png";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  const socialIcons = [FaFacebookF, BsTwitterX, FaLinkedinIn, FaInstagram];

  return (
    <>
      <section className="w-full bg-[#0F4E23] py-16 sm:py-20 md:py-24 rounded-3xl max-w-5xl mx-auto mt-12 px-4 sm:px-6 md:px-8 text-center text-white shadow-xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
          Unlock Instant Cash Flow for <br className="hidden md:block" /> Your Business!
        </h1>
        <p className="text-gray-200 max-w-xl sm:max-w-2xl mx-auto mt-4 sm:mt-6 text-base sm:text-lg leading-relaxed">
          Running a business shouldn’t mean waiting weeks for credit card payments to clear. With CASA, you can convert your daily transactions into instant cash.
        </p>
        <button className="mt-6 sm:mt-8 px-6 sm:px-8 py-3 sm:py-4 bg-[#F1F68E] text-[#0F4E23] font-bold rounded-full text-base sm:text-lg hover:bg-[#e0e67a] transition shadow-md">
          Let’s get started
        </button>
      </section>

      <footer className="w-full mt-12 sm:mt-16 pt-12 sm:pt-16 pb-8 sm:pb-12 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 px-4 sm:px-6 md:px-6 lg:px-8">
          <div>
            <h2 className="flex items-center text-2xl sm:text-3xl font-black tracking-wider text-gray-900">
              <img src={img} alt="CASA Logo" className="h-10 sm:h-12" />
            </h2>
            <p className="mt-3 sm:mt-4 text-gray-600 text-sm sm:text-base leading-relaxed">
              CASA provides fast, reliable, and transparent factoring services, helping business owners turn credit card transactions into instant cash flow.
            </p>
            <p className="mt-6 sm:mt-8 font-semibold text-gray-800">Follow us on</p>
            <div className="flex gap-2 sm:gap-3 mt-2 sm:mt-3">
              {socialIcons.map((Icon, i) => (
                <a key={i} href="#" aria-label="Social Icon" className="w-8 h-8 sm:w-9 sm:h-9 bg-[#0F4E23] text-white rounded-full flex items-center justify-center hover:bg-[#0c3a1b] transition">
                  <Icon />
                </a>
              ))}
            </div>
          </div>
          {/* Quick Links, Support, Get In Touch sections (same as your previous code) */}
        </div>
      </footer>
    </>
  );
};

export default Footer;
