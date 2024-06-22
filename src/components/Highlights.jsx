import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setPage, addFavorite, removeFavorite } from '../slice/newSlice';
import NewsCard from './NewsCard';

const Highlights = () => {
  const dispatch = useDispatch();
  const { articles, page, favorites, status, error } = useSelector(state => state.news);

  const handleFavorite = (article) => {
    if (favorites.some(fav => fav.url === article.url)) {
      dispatch(removeFavorite(article));
    } else {
      dispatch(addFavorite(article));
    }
  };

  const handleNextPage = () => {
    dispatch(setPage(page + 1));
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      dispatch(setPage(page - 1));
    }
  };

  if (status === 'loading') return <p>Loading...</p>;
  if (error) return <p className="text-red-600">{error}</p>;

  return (
    <section className="min-h-[60vh] w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {articles.map((article, index) => (
          <NewsCard key={index} news={article} onFavorite={handleFavorite} index={index} />
        ))}
      </div>
      <div className="pagination w-full flex justify-between items-center mt-4">
        <button onClick={handlePreviousPage} className="btn">Previous</button>
        <span>Page {page}</span>
        <button onClick={handleNextPage} className="btn">Next</button>
      </div>
    </section>
  );
};

export default Highlights;
