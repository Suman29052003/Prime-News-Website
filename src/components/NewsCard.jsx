import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Ensure axios is imported
import image1 from "../../public/column-1-image.jpg";

const NewsCard = (props) => {
  const [context, setContext] = useState(props.searchInput);
  const [newsResponse, setNewsResponse] = useState();
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!context) return;

    const fetchNewsApi = async () => {
      try {
        const apiUrl = `https://newsapi.org/v2/everything?q=${context}&from=2024-05-20&sortBy=publishedAt&apiKey=bc30c0f8aae848838f8fbc055cadbda2`;

        const response = await axios.get(apiUrl);
        setNewsResponse(response.data.articles[0]); // Assuming you want the first article
        setError(null);
      } catch (error) {
        setError('Error fetching News data');
        setNewsResponse(null);
      }
    };

    fetchNewsApi();
  }, [context]);

  useEffect(() => {
    setContext(props.searchInput);
  }, [props.searchInput]);

  return (
    <div className="news-card h-full w-full flex flex-col items-center justify-center m-2 bg-[#d5d5d5] shadow-lg p-2 rounded-lg">
      {newsResponse ? (
        <>
          <figure className="image w-[90%]">
            <img src={image1} alt="" className="rounded-lg" />
          </figure>
          <div className="flex flex-col w-[90%] mt-2 font-semibold">
            <span className="author">Author : {newsResponse.author}</span>
            <span className="published-at">Published At : {new Date(newsResponse.publishedAt).toLocaleDateString()}</span>
          </div>
          <div className="title w-[90%] text-justify mt-4 font-medium text-2xl">
            <span>{newsResponse.title}</span>
          </div>
          <div className="content w-[90%] text-justify mt-4 text-lg">
            <p>{newsResponse.content}</p>
          </div>
        </>
      ) : (
        <div>{error ? error : 'Loading...'}</div>
      )}
    </div>
  );
};

export default NewsCard;
