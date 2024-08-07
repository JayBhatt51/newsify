import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from './logo.jpeg';
const Navbar = () => {
  const navigate = useNavigate();
  const categories = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];
  const languages = {
    'ar': 'Arabic',
    'de': 'German',
    'en': 'English',
    'es': 'Spanish',
    'fr': 'French',
    'he': 'Hebrew',
    'it': 'Italian',
    'nl': 'Dutch',
    'no': 'Norwegian',
    'pt': 'Portuguese',
    'ru': 'Russian',
    'sv': 'Swedish',
    'ud': 'Undefined',
    'zh': 'Chinese'
  };
  const countries = {
    'ae': 'United Arab Emirates',
    'ar': 'Argentina',
    'at': 'Austria',
    'au': 'Australia',
    'be': 'Belgium',
    'bg': 'Bulgaria',
    'br': 'Brazil',
    'ca': 'Canada',
    'ch': 'Switzerland',
    'cn': 'China',
    'co': 'Colombia',
    'cu': 'Cuba',
    'cz': 'Czech Republic',
    'de': 'Germany',
    'eg': 'Egypt',
    'fr': 'France',
    'gb': 'United Kingdom',
    'gr': 'Greece',
    'hk': 'Hong Kong',
    'hu': 'Hungary',
    'id': 'Indonesia',
    'ie': 'Ireland',
    'il': 'Israel',
    'in': 'India',
    'it': 'Italy',
    'jp': 'Japan',
    'kr': 'South Korea',
    'lt': 'Lithuania',
    'lv': 'Latvia',
    'ma': 'Morocco',
    'mx': 'Mexico',
    'my': 'Malaysia',
    'ng': 'Nigeria',
    'nl': 'Netherlands',
    'no': 'Norway',
    'nz': 'New Zealand',
    'ph': 'Philippines',
    'pl': 'Poland',
    'pt': 'Portugal',
    'ro': 'Romania',
    'rs': 'Serbia',
    'ru': 'Russia',
    'sa': 'Saudi Arabia',
    'se': 'Sweden',
    'sg': 'Singapore',
    'si': 'Slovenia',
    'sk': 'Slovakia',
    'th': 'Thailand',
    'tr': 'Turkey',
    'tw': 'Taiwan',
    'ua': 'Ukraine',
    'us': 'United States',
    've': 'Venezuela',
    'za': 'South Africa'
  };

  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    fetchNewsData(selectedCountry, category, selectedLanguage);
  };

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    fetchNewsData(selectedCountry, selectedCategory, language);
  };

  const handleCountryChange = (country) => {
    setSelectedCountry(country);
    fetchNewsData(country, selectedCategory, selectedLanguage);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=${'e32c0eab4fa345d58b26b45728db9d34'}`);
      const data = await response.json();
      navigate('/result', { state: { searchData: data.articles } });
    } catch (error) {
      console.error('Error searching:', error);
    }
  };

  const fetchNewsData = async (country, category, language) => {
    try {
      const response = await fetch(`http://localhost:3001/top-headlines?country=${country}&category=${category}&language=${language}`);
      const data = await response.json();
      navigate('/topnews', { state: { newsData: data.articles } });
    } catch (error) {
      console.error('Error fetching news data:', error);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-white">
      <div className="container">
      
        <Link to="/" className='text-decoration-none text-white navbar-brand'>
            <img
              alt=""
              src={logo}
              width="40"
              height="40"
              className="d-inline-block align-top"
            />{' '}
            NEWSIFY
            </Link>
        
        
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact Us</Link>
            </li>
            <li className="nav-item dropdown">
              <button className="btn-dark  nav-link  dropdown-toggle"  id="navbarDropdownCategory"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Category
              </button>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownCategory">
                {categories.map((category, index) => (
                  <button key={index} className="dropdown-item" onClick={() => handleCategoryChange(category)}>{category}</button>
                ))}
              </div>
            </li>
            <li className="nav-item dropdown">
              <button className="btn-dark  nav-link dropdown-toggle"  id="navbarDropdownLanguage"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Language
              </button>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownLanguage">
                {Object.entries(languages).map(([code, language], index) => (
                  <button key={index} className="dropdown-item"  onClick={() => handleLanguageChange(code)}>{language}</button>
                ))}
              </div>
            </li>
            <li className="nav-item dropdown">
              <button className="btn-dark  nav-link dropdown-toggle"  id="navbarDropdownCountry"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Country
              </button>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownCountry">
                {Object.entries(countries).map(([code, country], index) => (
                  <button key={index} className="dropdown-item" onClick={() => handleCountryChange(code)}>{country}</button>
                ))}
              </div>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0" onSubmit={handleSearch}>
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              </form>
              </div>
              </div>
              </nav>
              );
              };
              
              export default Navbar;
