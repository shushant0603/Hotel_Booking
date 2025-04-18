import React from 'react';
import Button from './Button';

const Homepage = () => {
  return (
    <div className="min-h-[calc(100vh-80px)] w-full bg-gradient-to-r from-[#d3dcf5] via-[#cadbf4] to-[#d7f4ca] flex flex-col items-center justify-center text-center px-4">
      <p className="text-base font-medium md:text-2xl  text-gray-700 tracking-wide mb-4 m-10px">
      AI-Powered Hotel Booking
      </p>
      <h1 className="text-5xl sm:text-5xl md:text-9xl font-semibold text-black leading-tight mb-6">
      Discover Your Perfect <span className="text-blue-700">Stay</span> <br />
      with AI Assistance
      </h1>
      <p className="text-lg md:text-xl text-gray-800 mb-8">
      Simplify your hotel search and booking process <br /> with our intelligent AI solutions.

      </p>
   <Button/>
      {/* <p className="text-sm text-gray-600 mt-4">
        Start for free. No credit card required.
      </p> */}
    </div>
  );
};

export default Homepage;