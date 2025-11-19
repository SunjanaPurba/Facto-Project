import React from "react";
import img from "../../assets/Casa logo (1).png";
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
  return (
    <>
      <section className="w-full bg-[#0F4E23] py-16 sm:py-20 md:py-24 rounded-3xl max-w-5xl mx-auto mt-12 px-4 sm:px-6 md:px-8 text-center text-white shadow-xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
          Unlock Instant Cash Flow for <br className="hidden md:block" /> Your
          Business!
        </h1>

        <p className="text-gray-200 max-w-xl sm:max-w-2xl mx-auto mt-4 sm:mt-6 text-base sm:text-lg leading-relaxed">
          Running a business shouldn’t mean waiting weeks for credit card
          payments to clear. With CASA, you can convert your daily transactions
          into instant cash.
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
              CASA provides fast, reliable, and transparent factoring services,
              helping business owners turn credit card transactions into instant
              cash flow.
            </p>
            <p className="mt-6 sm:mt-8 font-semibold text-gray-800">
              Follow us on
            </p>
            <div className="flex gap-2 sm:gap-3 mt-2 sm:mt-3">
              {[
                <FaFacebookF />,
                <BsTwitterX />,
                <FaLinkedinIn />,
                <FaInstagram />,
              ].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-8 h-8 sm:w-9 sm:h-9 bg-[#0F4E23] text-white rounded-full flex items-center justify-center hover:bg-[#0c3a1b] transition"
                >
                  {Icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-3 sm:mb-4">
              Quick Links
            </h3>
            <ul className="space-y-1 sm:space-y-2 text-gray-600 text-sm sm:text-base">
              {[
                "Home",
                "About service",
                "Procedure of Service",
                "Pricing",
                "Why Casa is Different",
                "Contact",
              ].map((item, i) => (
                <li
                  key={i}
                  className="hover:text-[#0F4E23] cursor-pointer transition"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-3 sm:mb-4">Support</h3>
            <ul className="space-y-1 sm:space-y-2 text-gray-600 text-sm sm:text-base">
              {[
                "Privacy policy",
                "Documentation",
                "Community",
                "Support center",
                "Contact",
              ].map((item, i) => (
                <li
                  key={i}
                  className="hover:text-[#0F4E23] cursor-pointer transition"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-3 sm:mb-4">
              Get In Touch
            </h3>

            <div className="flex items-start gap-2 sm:gap-3 mt-3 sm:mt-4">
              <FaMapMarkerAlt className="text-[#0F4E23] mt-1" size={18} />
              <div>
                <p className="text-sm sm:text-base font-semibold text-gray-800">
                  Address
                </p>
                <p className="text-gray-600 text-sm sm:text-base">
                  123 Business Street, Suite 500, New York, NY 10001
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-3 mt-4 sm:mt-5">
              <FaPhone
                className="text-[#0F4E23] transform rotate-100"
                size={16}
              />
              <div>
                <p className="text-sm sm:text-base font-semibold text-gray-800">
                  Phone
                </p>
                <p className="text-gray-600 text-sm sm:text-base">
                  1 (800) 123-4567
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-3 mt-4 sm:mt-5">
              <FaEnvelope className="text-[#0F4E23]" size={16} />
              <div>
                <p className="text-sm sm:text-base font-semibold text-gray-800">
                  Email
                </p>
                <p className="text-gray-600 text-sm sm:text-base">
                  support@casa.finance
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center border-t text-gray-500 text-xs sm:text-sm mt-12 sm:mt-16 pt-6 sm:pt-8 max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
          <p>Copyright © 2025 All rights reserved.</p>
          <div className="mt-2 sm:mt-0">
            {["Privacy", "Security", "Terms"].map((item, i) => (
              <a
                key={i}
                href="#"
                className="text-gray-400 hover:text-[#0F4E23] mx-1 sm:mx-2"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
