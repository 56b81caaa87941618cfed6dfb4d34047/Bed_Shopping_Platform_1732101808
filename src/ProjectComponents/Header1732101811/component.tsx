import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-500 text-white p-4 w-full h-full flex items-center justify-center"> {/* Full width and height, centered content */}
      <div className="container mx-auto flex justify-between items-center h-full">
        <div className="text-2xl font-bold">WIII</div>
        <img src="https://raw.githubusercontent.com/56b81caaa87941618cfed6dfb4d34047/Bed_Shopping_Platform_1732101808/main/src/assets/images/46333f62ed644d6fac55fc1308f943b2.jpeg" alt="Header Image" className="h-16 w-auto" /> {/* Added image */}
      </div>
    </header>
  );
};

export { Header as component };