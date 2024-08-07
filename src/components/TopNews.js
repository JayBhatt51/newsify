// TopNews.js

import React from 'react';
import { useLocation } from 'react-router-dom';
import logo from './logo.jpeg'
const TopNews = () => {
  const location = useLocation();
  const newsData = location.state?.newsData || [];

  return (
    <div className="container">
      <h2 className='text-white'>Top News</h2>
      <div className="row">
        {newsData.map((article, index) => (
          <div key={index} className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100">
              <img src={article.urlToImage?article.urlToImage:logo} className="card-img-top" alt={article.title} />
              <div className="card-body">
                <h5 className="card-title">{article.title}</h5>
                <p className="card-text">{article.description}</p>
              </div>
              <div className="card-footer">
                <small className="text-muted">Source: {article.source?.name}</small>
                <br />
                <small className="text-muted">Published At: {new Date(article.publishedAt).toLocaleString()}</small>
                <a href={article.url} className="btn btn-primary mt-3" target="_blank" rel="noopener noreferrer">Read More</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopNews;
