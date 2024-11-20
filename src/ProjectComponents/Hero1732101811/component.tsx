import React, { useState } from 'react';

const Hero: React.FC = () => {
  const [bedColor, setBedColor] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(`Bed color: ${bedColor}`);
  };

  return (
    <div className="bg-black py-16 text-white w-full h-full">
      <h1 className="text-4xl font-bold text-center mb-4">Welcome to Bed Shopping</h1>
      <p className="text-xl text-center mb-8">YESS</p>
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center h-full">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl font-bold mb-4">wii</h1>
          <p className="text-xl mb-6">WIII</p>
        </div>
        <div className="md:w-1/2">
          <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Check Bed Color</h2>
            <div className="flex justify-center mb-4">
              <img src="https://raw.githubusercontent.com/56b81caaa87941618cfed6dfb4d34047/Bed_Shopping_Platform_1732101808/main/src/assets/images/12e36767f97241d1b2bd8b88a41800d2.jpeg" alt="Generated Image" className="max-w-full h-auto rounded-lg" />
            </div>
            <div className="mb-4">
              <label htmlFor="bedColor" className="block text-sm font-medium mb-2">
                <i className='bx bx-palette mr-2'></i>
                Bed Color
              </label>
              <input
                type="text"
                id="bedColor"
                value={bedColor}
                onChange={(e) => setBedColor(e.target.value)}
                className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter bed color"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300"
            >
              <i className='bx bx-check mr-2'></i>
              Check Color
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export { Hero as component }