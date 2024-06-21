import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NewsCard from './NewsCard';

const Highlights = ({ searchInput,activeLink }) => {
  const [newsList, setNewsList] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const apiUrl = 'https://newsapi.org/v2/everything';
        const apiKey = 'bc30c0f8aae848838f8fbc055cadbda2'; 
        const response = await axios.get(`${apiUrl}?q=${searchInput}&apiKey=${apiKey}`);
        
        setNewsList(response.data.articles);
        setError(null); 
      } catch (error) {
        console.error('Error fetching news:', error);
        setError('Error fetching news. Please try again later.'); 
      }
    };

    if (searchInput) {
      fetchNews();
    }
  }, [searchInput]);

  return (
    <section className="min-h-[60vh] w-full">
      {error && <p className="text-red-600">{error}</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {newsList.map((newsItem, index) => (
          <NewsCard key={index} news={newsItem} />
        ))}
      </div>
    </section>
  );
};

export default Highlights;
