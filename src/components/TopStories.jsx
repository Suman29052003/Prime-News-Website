import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TopStories = () => {
  const [newsTitles, setNewsTitles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const apiUrl = 'https://newsapi.org/v2/everything';
        const apiKey = 'bc30c0f8aae848838f8fbc055cadbda2'; 
        const response = await axios.get(`${apiUrl}?q=all&apiKey=${apiKey}`);

        const articles = response.data.articles;
        const titles = articles.map(article => article.title);
        setNewsTitles(titles);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []); 

  return (
    <section className="top-stories w-full bg-[#e2e1e1] min-h-[5rem] shadow-lg border-b-2 border-[#b6b5b5]">
      <div className="w-full md:w-[90%] md:flex items-center h-full mx-auto">
        <div className="bg-red-600 md:w-[30%] w-full h-[4rem] md:m-6 flex items-center justify-center">
          <h2 className="text-white font-bold text-xl">Top Stories</h2>
        </div>
        <div className="w-full p-4 overflow-hidden">
          <div className="whitespace-nowrap animate-marquee flex items-center justify-center">
            {newsTitles.map((title, index) => (
              <span key={index} className="inline-block mr-4 flex gap-2">
                <span className="material-symbols-outlined">radio_button_checked</span>
                {title}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopStories;
