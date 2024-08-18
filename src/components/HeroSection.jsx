import React, { useEffect, useState } from 'react';
import TradingViewWidget from './TradingViewWidget'; 
import './HeroSection.css';
import { Link } from 'react-router-dom'; 

const HeroSection = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    // Fetch or use static sample news data
    const fetchNews = async () => {
      const sampleNews = [
        { id: 1, title: "Bitcoin surges 5% amid market optimism" },
        { id: 2, title: "Ethereum 2.0 launch date announced" },
        { id: 3, title: "Top altcoins to watch in 2024" },
        { id: 4, title: "5 best stocks to buy in 2024" },
        { id: 5, title: "Apple's stock price hits new high" },
      ];
      setNews(sampleNews);
    };

    fetchNews();
  }, []);

  return (
    <section className="hero-section">
      <div className="widget-layout">
        <div className="widget-left">
          <div className="content-container">
            <h1>Welcome to Our Exchange!</h1>
            <p>Trade with confidence and security</p>
            <Link to="/register">
              <button className="start-btn">Get Started</button>
            </Link>
          </div>
          <div className="widget-bottom-left">
            <h3>Latest News</h3>
            <ul className="news-ticker">
              {news.map((item) => (
                <li key={item.id} className="news-item">
                  {item.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="widget-right">
          <TradingViewWidget />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
