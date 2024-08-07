import React from 'react';
import { useLocation } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import logo from './logo.jpeg';
const Result = () => {
  const location = useLocation();
  const searchData = location.state?.searchData || [];

  // Limiting the number of articles to 99
  const limitedSearchData = searchData.slice(0, 99);

  return (
    <div className="container mt-4" >
      <h2 className="mb-4 text-white">Search Results</h2>
      {/* Adding a scrollable panel */}
      <div className="row" style={{ maxHeight: '80vh'}}>
        {limitedSearchData.map((article, index) => (
          <div key={index} className="col-lg-4 col-md-6 mb-4">
            <Card className="h-100">
              <Card.Img variant="top" src={article.urlToImage?article.urlToImage:logo} />
              <Card.Body>
                <Card.Title>{article.title}</Card.Title>
                <Card.Text>{article.description}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-dark">Source: {article.source?.name}</small>
                <br />
                <small className="text-dark">Published At: {new Date(article.publishedAt).toLocaleString()}</small>
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

export default Result;
    