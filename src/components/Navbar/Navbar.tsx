import React from 'react';
import Image from 'next/image';

const Navbar: React.FC = () => {
  return (
    <nav
      className="w-full bg-[#0a0a0a] shadow-md relative py-0 sm:pt-[15px] sm:pb-[15px]"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="w-full px-6 sm:px-8 lg:px-10">
        <div className="flex flex-col sm:flex-row justify-between items-center py-4 sm:py-0 sm:min-h-[75px] w-full max-w-4xl mx-auto">
          <div className="flex items-center">
            <Image
              src="/White-VNSH-Logo.webp"
              alt="VNSH Logo"
              className="w-[180px] sm:w-[210px] h-auto hover:opacity-90"
              width={210}
              height={59}
              priority
            />
          </div>
          <span className="text-white text-lg sm:text-2xl font-bold mt-3 sm:mt-0 whitespace-nowrap">
            Enter to win
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
