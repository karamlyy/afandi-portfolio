import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to My Website</h1>
      <p>Discover a world of innovation, learning, and opportunities with me. Explore my <span className="highlight">projects</span>, <span className="highlight">services</span>, and <span className="highlight">insights</span> tailored for your success.</p>
      <Link to="/about" className="btn">Learn More About Me</Link>
    </div>
  );
}

export default Home;