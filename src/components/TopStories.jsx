import React from 'react';

const TopStories = () => {
  return (
    <section className="top-stories w-full bg-[#e2e1e1] min-h-[5rem] shadow-lg border-b-2 border-[#b6b5b5]">
      <div className="w-full md:w-[90%] md:flex items-center h-full mx-auto">
        <div className="bg-red-600 md:w-[30%] w-full h-[4rem] md:m-6 flex items-center justify-center">
          <h2 className="text-white font-bold text-xl">Top Stories</h2>
        </div>
        <div className="w-full p-4 overflow-hidden">
          <div className="whitespace-nowrap">
            <span className="inline-block animate-marquee">
              Magnificent Image of the new Hoover Dam Bridge Taking Shape
            </span>
            <span className="inline-block animate-marquee">
              Magnificent Image of the new Hoover Dam Bridge Taking Shape
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopStories;
