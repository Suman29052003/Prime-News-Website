import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TopStories from './components/TopStories';
import LocationAndWeather from './components/LocationAndWeather';
import Highlights from './components/Highlights';

const App = () => {
  const [searchInput, setSearchInput] = useState("");

  return (
    <>
      <Navbar setSearchInput={setSearchInput} />
      <TopStories />
      <LocationAndWeather />
      <Highlights searchInput={searchInput} />
    </>
  );
};

export default App;
