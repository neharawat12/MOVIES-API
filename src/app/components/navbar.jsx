"use client";

import Image from "next/image";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-[70px] bg-black  flex items-center justify-between px-16 z-50">

      
      <div className="flex items-center">
        <Image
          src="/images/Movies_Anywhere_logo.webp"
          alt="logo"
          width={160}
          height={35}
          className="w-auto h-10"
        />
      </div>

      
      <div className="hidden md:flex gap-8">
        <a className="text-white hover:text-gray-300 cursor-pointer">
          Home
        </a>
        <a className="text-white hover:text-gray-300 cursor-pointer">
          Redeem
        </a>
        <a className="text-white hover:text-gray-300 cursor-pointer">
          My Movies
        </a>
      </div>

      
      <div className="flex items-center gap-6">
        

        <a className="text-white hover:text-gray-300 cursor-pointer">
          Sign In
        </a>

        <button className="bg-sky-500   px-4 py-2 rounded-full text-white ">
          Sign Up Now
        </button>
      </div>

    </div>
  );
};

export default Navbar;