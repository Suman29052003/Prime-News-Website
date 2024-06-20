import React, { useState, useEffect } from "react";
import axios from "axios";

const LocationAndWeather = () => {
  const [location, setLocation] = useState("Australia");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
        const apiKey = "c9350aabd684419beda1090fcc65a2dc";

        const response = await axios.get(`${apiUrl}${location}&appid=${apiKey}`);
        setWeather(response.data);
        setError(null);
      } catch (err) {
        setError('Error fetching weather data');
        setWeather(null);
      }
    };

    fetchWeather();
  }, [location]);

  useEffect(() => {
    const date = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
    setCurrentDate(date.toLocaleDateString('en-US', options));
  }, []);

  return (
    <section className="w-full min-h-[30px] shadow-md flex items-center justify-center">
      <div className="main-content text-nowrap w-[100%] gap-4 p-6 md:w-[90%] grid grid-cols-2 place-content-center md:flex items-center md:justify-around text-sm md:text-xl">
        <div className="location flex items-center justify-center text-red-700 font-semibold gap-3 ml-4 md:ml-0">
          <span className="material-symbols-outlined">location_on</span>
          <input
            className="bg-transparent border-0 outline-0"
            defaultValue={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        <div className="calendar flex items-center justify-center text-red-700 font-semibold gap-3 mr-4 md:mr-0">
          <span className="material-symbols-outlined">calendar_month</span>
          <span>{currentDate}</span>
        </div>

        <div className="weather flex items-center justify-center text-red-700 font-semibold gap-3 col-span-2">
          <span className="material-symbols-outlined">cloud</span>
          {weather ? (
            <span>{weather.main.temp} &#8451;, {weather.name}, {weather.sys.country}</span>
          ) : error ? (
            <span>{error}</span>
          ) : (
            <span>Loading...</span>
          )}
        </div>
      </div>
    </section>
  );
};

export default LocationAndWeather;
