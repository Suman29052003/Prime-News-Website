import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NewsCard = ({ news, onFavorite, index }) => {
  console.log('NewsCard - index:', index);
  return (
    <div className="news-card h-full w-full flex flex-col items-center  m-2 bg-[#d5d5d5] shadow-lg p-2 rounded-lg">
      <figure className="image w-[90%]">
        <img src={news.urlToImage} alt="" className="rounded-lg" />
      </figure>

      <div className="flex flex-col w-[90%] mt-2 font-semibold gap-2">
        <h3 className="text-lg text-center h-[70px]">{news.title}</h3>
        <p className="text-md text-justify text-ellipsis overflow-hidden">{news.description}</p>
      </div>

      <div className="buttons flex justify-around w-[90%] mt-4 mb-2">
        <button
          className="btn btn-primary"
          onClick={() => onFavorite(news)}
        >
          {news.isFavorite ? 'Unfavorite' : 'Favorite'}
        </button>
        <Link to={`/detail/${index}`} className="btn btn-secondary">
          Read More
        </Link>
      </div>
    </div>
  );
};

NewsCard.propTypes = {
  news: PropTypes.object.isRequired,
  onFavorite: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

export default NewsCard;