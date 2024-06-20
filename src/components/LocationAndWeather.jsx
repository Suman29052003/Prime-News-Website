import React from "react";

const LocationAndWeather = () => {
  return (
    <section className="w-full min-h-[30px] shadow-md flex items-center justify-center">
      <div className="main-content text-nowrap w-[100%] gap-4 p-6 md:w-[90%] grid grid-cols-2 place-content-center md:flex items-center md:justify-around text-sm md:text-xl">

        <div className="location flex items-center justify-center text-red-700 font-semibold gap-3 ml-4 md:ml-0">
          <span class="material-symbols-outlined ">location_on</span>
          <input
            className="bg-transparent border-0 outline-0 "
            defaultValue={"Australia"}
          />
        </div>

        <div className="calender flex items-center justify-center text-red-700 font-semibold gap-3 mr-4 md:mr-0">
          <span class="material-symbols-outlined">calendar_month</span>
          <span className="">Wednesday, Jan 08, 2020</span>
        </div>

        <div className="weather flex items-center justify-center text-red-700 font-semibold gap-3 col-span-2">
          <span class="material-symbols-outlined">cloud</span>
          <span className="">29 &#8451;, Sydney, Australia</span>
        </div>


      </div>
    </section>
  );
};

export default LocationAndWeather;
