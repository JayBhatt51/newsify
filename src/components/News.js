import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import logo from './logo.jpeg';

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/top-headlines');
        const data = await response.json();
        setNews(data.articles);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mt-4"> 
      <h2 className="mb-4 text-white">Latest News</h2>
      <div className="row">
        {news.map((article, index) => (
          <div key={index} className="col-lg-4 col-md-6 mb-4">
            <Card className="h-100">
              <Card.Img variant="top" src={article.urlToImage ? article.urlToImage : logo} />
              <Card.Body>
                <Card.Title>{article.title && article.title.length > 100 ? `${article.title.substring(0, 100)}...` : article.title}</Card.Title>
                <Card.Text>{article.description && article.description.length > 150 ? `${article.description.substring(0, 150)}...` : article.description}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-dark">Source: {article.source && article.source.name}</small>
                <br />
                <small className="text-dark">Published At: {article.publishedAt && new Date(article.publishedAt).toLocaleString()}</small>
              </Card.Footer>
              <Card.Body>
                <Card.Link href={article.url} target="_blank" className='btn btn-info'>Read More</Card.Link>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
