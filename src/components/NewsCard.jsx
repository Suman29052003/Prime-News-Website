import React from 'react';
import PropTypes from 'prop-types';

const NewsCard = ({ news }) => {
  return (
    <div className="news-card h-full w-full flex flex-col items-center  m-2 bg-[#d5d5d5] shadow-lg p-2 rounded-lg">
      <figure className="image w-[90%]">
        <img src={news.urlToImage} alt="" className="rounded-lg" />
      </figure>

      <div className="flex flex-col w-[90%] mt-2 font-semibold">
        <span className="author">Author: {news.author}</span>
        <span className="published-at">Published At: {news.publishedAt}</span>
      </div>

      <div className="title w-[90%] text-justify mt-4 font-medium text-2xl">
        <span className="">{news.title}</span>
      </div>

      <div className="content w-[90%] text-justify mt-4 text-lg">
        <p className="">{news.description}</p>
      </div>
    </div>
  );
};

NewsCard.propTypes = {
  news: PropTypes.object.isRequired, // Assuming news is an object with specific properties
};

export default NewsCard;
