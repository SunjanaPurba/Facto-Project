import React from "react";
import { FiPhoneCall } from "react-icons/fi";

const ContactSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="text-center mb-12">
        <span className="inline-block px-6 py-2 bg-[#DFEDE3] text-[#0F4E23] text-sm font-semibold rounded-full">
          Contact
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 leading-tight">
          We’re Here to Help – Get in <br />
          Touch with CASA
        </h1>
        <p className="text-[#686868] mt-4 max-w-2xl mx-auto">
          Trusted by Thousands of Business Owners See what our <br /> satisfied
          customers have to say about CASA.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-16 items-start">
        <div className="bg-white rounded-3xl shadow-2xl p-10">
          <h2 className="text-3xl font-bold mb-8 leading-tight">
            Have Questions? Feel Free to
            <br />
            Reach Out!
          </h2>
          <form className="space-y-6">
            <h1 className="text-[#141414] font-semibold">Name</h1>
            <input
              type="text"
              placeholder="Full name"
              className="w-full px-5 py-4 bg-[#F2F2F2] rounded-xl focus:outline-none"
            />
            <h1 className="text-[#141414] font-semibold">Email*</h1>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-5 py-4 bg-[#F2F2F2] rounded-xl focus:outline-none"
            />
            <h1 className="text-[#141414] font-semibold">Business Name</h1>
            <input
              type="text"
              placeholder="Company name"
              className="w-full px-5 py-4 bg-[#F2F2F2] rounded-xl focus:outline-none"
            />
            <h1 className="text-[#141414] font-semibold">Message*</h1>
            <textarea
              rows={5}
              placeholder="Write your opinion"
              className="w-full px-5 py-4 bg-[#F2F2F2] rounded-xl resize-none focus:outline-none"
            ></textarea>
            <button className="w-full bg-[#0F4E23] hover:bg-green-900 text-white font-semibold py-4 rounded-full transition shadow-lg">
              Send Message
            </button>
          </form>
        </div>
        <div className="relative mt-10 md:mt-0 flex flex-col items-center md:block">
          <div className="absolute top-8 left-10 w-[32rem] h-[510px] bg-[#F1F68E] rounded-3xl shadow-2xl hidden md:block"></div>
          <div
            className="relative bg-[#FFFFFF] rounded-2xl shadow-2xl p-8
                w-full max-w-md md:w-[30rem] md:h-auto mx-auto md:ml-20
                mt-0 md:mt-15 z-30"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 bg-[#DAFFC2] rounded-full flex items-center justify-center">
                <span className="text-white text-xl font-bold">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.9729 12.1404H11.9989C14.5359 12.1404 16.5999 10.0774 16.5999 7.54141C16.5999 5.00441 14.5359 2.94141 11.9989 2.94141C9.46294 2.94141 7.39894 5.00441 7.39894 7.53941C7.39294 10.0684 9.44294 12.1324 11.9729 12.1404ZM8.89894 7.54141C8.89894 5.83241 10.2899 4.44141 11.9989 4.44141C13.7089 4.44141 15.0999 5.83241 15.0999 7.54141C15.0999 9.25041 13.7089 10.6404 11.9989 10.6404H11.9749C10.2739 10.6344 8.89494 9.24541 8.89894 7.54141Z"
                      fill="#0F4E23"
                    />

                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5.24316 17.8575C5.24316 21.0595 10.3282 21.0595 11.9992 21.0595C13.6702 21.0595 18.7552 21.0595 18.7552 17.8405C18.7552 15.4135 15.7252 13.4375 11.9992 13.4375C8.27316 13.4375 5.24316 15.4195 5.24316 17.8575ZM6.74316 17.8575C6.74316 16.4795 8.99116 14.9375 11.9992 14.9375C15.0072 14.9375 17.2552 16.4705 17.2552 17.8405C17.2552 19.2615 14.3962 19.5595 11.9992 19.5595C9.60216 19.5595 6.74316 19.2645 6.74316 17.8575Z"
                      fill="#0F4E23"
                    />
                    <path
                      d="M18.3897 11.083C18.0577 11.083 17.7547 10.862 17.6647 10.527C17.5577 10.127 17.7957 9.71599 18.1957 9.60799C19.1327 9.35699 19.7877 8.50299 19.7877 7.53099C19.7877 6.51399 19.0677 5.62799 18.0737 5.42599C17.6677 5.34299 17.4067 4.94599 17.4887 4.53999C17.5727 4.13499 17.9667 3.87899 18.3737 3.95499C20.0627 4.29999 21.2877 5.80399 21.2877 7.53099C21.2877 9.18099 20.1757 10.631 18.5837 11.058C18.5187 11.075 18.4527 11.083 18.3897 11.083Z"
                      fill="#0F4E23"
                    />
                    <path
                      d="M20.1912 17.3996C20.2732 17.7456 20.5802 17.9776 20.9202 17.9776C20.9782 17.9776 21.0352 17.9706 21.0932 17.9576C22.1642 17.7056 22.9732 16.7506 22.9732 15.7376C22.9732 14.1666 21.0662 12.7366 18.9712 12.7366C18.5572 12.7366 18.2212 13.0726 18.2212 13.4866C18.2212 13.9006 18.5572 14.2366 18.9712 14.2366C20.4412 14.2366 21.4732 15.2096 21.4732 15.7376C21.4732 15.9846 21.2222 16.3866 20.7492 16.4976C20.3462 16.5926 20.0962 16.9966 20.1912 17.3996Z"
                      fill="#0F4E23"
                    />
                    <path
                      d="M5.61143 11.083C5.54843 11.083 5.48243 11.075 5.41843 11.058C3.82443 10.632 2.71143 9.18199 2.71143 7.53099C2.71143 5.80399 3.93743 4.29999 5.62643 3.95499C6.03343 3.87899 6.42843 4.13499 6.51143 4.53999C6.59343 4.94599 6.33243 5.34299 5.92643 5.42599C4.93243 5.62799 4.21143 6.51399 4.21143 7.53099C4.21143 8.50299 4.86643 9.35699 5.80443 9.60799C6.20543 9.71599 6.44243 10.127 6.33643 10.526C6.24643 10.862 5.94343 11.083 5.61143 11.083Z"
                      fill="#0F4E23"
                    />
                    <path
                      d="M2.90686 17.9576C2.96486 17.9716 3.02186 17.9776 3.07986 17.9776C3.41986 17.9776 3.72686 17.7456 3.80886 17.3996C3.90386 16.9966 3.65386 16.5916 3.25086 16.4976C2.77786 16.3866 2.52686 15.9846 2.52686 15.7376C2.52686 15.2096 3.55886 14.2366 5.02886 14.2366C5.44286 14.2366 5.77886 13.9006 5.77886 13.4866C5.77886 13.0726 5.44286 12.7366 5.02886 12.7366C2.93386 12.7366 1.02686 14.1666 1.02686 15.7376C1.02686 16.7506 1.83586 17.7066 2.90686 17.9576Z"
                      fill="#0F4E23"
                    />
                  </svg>
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                Total user
              </h3>
            </div>

            <div className="flex items-center justify-between mb-8">
              <div className="flex flex-col bg-[#F8F8F8] shadow-xl rounded-full w-20 h-20 items-center justify-center">
                <p className="text-xl font-bold text-gray-900">25k+</p>
                <p className="text-gray-600 text-lg">Users</p>
              </div>

              <div className="flex -space-x-5">
                <img
                  src="https://i.pravatar.cc/60?img=1"
                  alt=""
                  className="w-16 h-16 rounded-full border-4 border-white shadow-xl"
                />
                <img
                  src="https://i.pravatar.cc/60?img=2"
                  alt=""
                  className="w-16 h-16 rounded-full border-4 border-white shadow-xl"
                />
                <img
                  src="https://i.pravatar.cc/60?img=3"
                  alt=""
                  className="w-16 h-16 rounded-full border-4 border-white shadow-xl"
                />
              </div>
            </div>
            <div className="bg-[#BFE5A6] rounded-xl w-full h-24 shadow-lg p-4 overflow-visible">
              <p className="font-semibold text-gray-800 mb-1">Monthly user</p>

              <span className="block text-center text-sm font-bold text-gray-900 mb-1">
                50%
              </span>

              <div className="w-full h-4 bg-[#F2F2F2] rounded-full shadow-inner overflow-hidden">
                <div className="bg-[#0F4E23] h-full rounded-full w-1/2 shadow-inner"></div>
              </div>
            </div>
          </div>
          <div
            className="
              bg-[#E8F3E4] rounded-2xl shadow-2xl px-10 py-12 w-72 text-center z-20
              md:absolute md:top-100 md:left-4 
              mt-8 md:mt-0
            "
          >
            <div className="w-20 h-20 bg-green-800 rounded-full mx-auto mb-6 flex items-center justify-center shadow-2xl">
              <FiPhoneCall className="text-4xl text-white" />
            </div>
            <p className="text-xl font-bold text-gray-900">
              Call for consultation
            </p>
            <p className="text-[#686868] my-4 text-lg">or</p>
            <button className="bg-[#F1F68E] px-10 py-4 rounded-full font-bold text-lg shadow-lg">
              Let's connect
            </button>
          </div>
          <div
            className="
              bg-white rounded-2xl shadow-2xl px-6 py-5 w-50 border border-gray-100 
              transform md:-rotate-12 z-40
              mt-8 md:mt-0 
              md:absolute md:top-100 md:right-8
            "
          >
            <p className="text-xs text-gray-500 font-medium">Total Balance</p>
            <p className="text-3xl font-bold text-gray-900">23,576.00</p>
            <p className="text-green-700 font-bold text-sm mt-1">
              + Add Number
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
