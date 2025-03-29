import React from "react";

const Shimmer = () => {
  return (
    <div className='flex flex-wrap gap-6 justify-center p-6'>
      {Array(6)
        .fill("")
        .map((_, i) => (
          <div
            key={i}
            className='w-96 h-64 p-4 rounded-xl shadow-md bg-white flex flex-col items-center animate-pulse'
          >
            <div className='w-24 h-24 bg-gray-300 rounded-full mb-4'></div>

            <div className='h-4 w-1/2 bg-gray-300 rounded mb-2'></div>

            <div className='h-4 w-3/4 bg-gray-300 rounded mb-4'></div>

            <div className='flex gap-3 mt-auto'>
              <div className='h-8 w-20 bg-gray-300 rounded'></div>
              <div className='h-8 w-20 bg-gray-300 rounded'></div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
