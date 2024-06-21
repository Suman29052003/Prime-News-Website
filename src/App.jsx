import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TopStories from './components/TopStories';
import LocationAndWeather from './components/LocationAndWeather';
import Highlights from './components/Highlights';

const App = () => {
  const [searchInput, setSearchInput] = useState('top-headlines');
  const [activeLink, setActiveLink] = useState('HOME');


  return (
    <>
      <Navbar setSearchInput={setSearchInput} setActiveLink={setActiveLink} activeLink={activeLink} />
      <TopStories />
      <LocationAndWeather />
      <Highlights searchInput={searchInput}  activeLink={activeLink} />
    </>
  );
};

export default App;
