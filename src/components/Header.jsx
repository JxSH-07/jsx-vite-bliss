import React from 'react';

const Header = () => (
  <div className="relative">
    {/* Background element with responsive height */}
    <div className="h-28 md:h-36 w-full">
      <img 
        src="/23.svg" 
        className="w-full h-full object-cover" 
        alt="Header background" 
        onError={(e) => e.target.style.display='none'}
      />
    </div>

    {/* Overlapping Logo with responsive size and position */}
    <div className="absolute top-16 md:top-20 left-0 right-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex-shrink-0 bg-white p-1 rounded-md shadow-lg w-24 h-24 md:w-28 md:h-28">
          <div className="h-full w-full bg-green-800 flex items-center justify-center rounded-sm">
            <span className="text-white text-3xl font-bold">agdhi</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Header;
