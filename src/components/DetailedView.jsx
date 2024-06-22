import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';

const DetailedView = () => {
  const { index } = useParams();
  const navigate = useNavigate();
  const { articles } = useSelector(state => state.news);
  
  console.log('DetailedView - params:', useParams());
  console.log('DetailedView - articles:', articles);
  console.log('DetailedView - index:', index);

  const article = articles[parseInt(index, 10)];
  console.log('DetailedView - selected article:', article);

  if (!article) {
    console.log('Article not found');
    return (
      <div className="text-center mt-10">
        <p>Article not found.</p>
        <button onClick={() => navigate('/')} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
          Go back to home
        </button>
      </div>
    );
  }

  return (
    <div className="detailed-view w-full flex flex-col items-center p-4">
      <figure className="w-full h-[300px]">
        <img src={article.urlToImage} alt="" className="w-full h-full object-cover rounded-lg" />
      </figure>
      <div className="content w-full md:w-[80%] mt-4">
        <h1 className="text-2xl font-bold">{article.title}</h1>
        <p className="mt-4">{article.content || article.description}</p>
        <a href={article.url} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-blue-600 hover:underline">
          Read full article
        </a>
      </div>
      <button onClick={() => navigate('/')} className="mt-8 bg-blue-500 text-white px-4 py-2 rounded">
        Back to home
      </button>
    </div>
  );
};

export default DetailedView;