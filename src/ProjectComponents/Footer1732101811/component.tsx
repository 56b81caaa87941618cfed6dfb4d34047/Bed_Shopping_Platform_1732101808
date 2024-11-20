import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-8 w-full h-full"> {/* Full width and height */}
      <div className="container mx-auto h-full flex flex-col items-center justify-center">
        <img src="https://raw.githubusercontent.com/56b81caaa87941618cfed6dfb4d34047/Bed_Shopping_Platform_1732101808/main/src/assets/images/4de222f637004f00b5e80dea4abcb2aa.jpeg" alt="Footer Image" className="mb-6" />
        
        <div className="flex flex-wrap justify-between w-full">
          {/* FOOTER COPY */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">WIII</h3>
            <p className="text-gray-400">WIII</p>
          </div>

          {/* SOCIALS */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">WIII</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">WIII</a>
              <a href="#" className="text-gray-400 hover:text-white">WIII</a>
              <a href="#" className="text-gray-400 hover:text-white">WIII</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer as component };