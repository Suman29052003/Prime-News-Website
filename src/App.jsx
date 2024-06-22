import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { fetchNews } from './slice/newSlice';
import Navbar from './components/Navbar';
import TopStories from './components/TopStories';
import LocationAndWeather from './components/LocationAndWeather';
import Highlights from './components/Highlights';
import DetailedView from './components/DetailedView';

const App = () => {
  const dispatch = useDispatch();
  const { category, page } = useSelector(state => state.news);

  useEffect(() => {
    dispatch(fetchNews({ category, page }));
  }, [category, page, dispatch]);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <TopStories />
            <LocationAndWeather />
            <Highlights />
          </>
        } />
        <Route path="/detail/:index" element={<DetailedView />} />
      </Routes>
    </Router>
  );
};

export default App;