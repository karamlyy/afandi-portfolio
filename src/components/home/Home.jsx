import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import HomeImage from '../../assets/images/smile.png';
const Home = () => {
  return (
    <div className="home">
      <h1 className="animated-text">Dr. Əfəndi Əfəndiyev</h1>
      <p className="animated-text">Providing expert dental care and smile makeovers. Explore our <span className="highlight">state-of-the-art services</span>, <span className="highlight">advanced treatments</span>, and <span className="highlight">patient-centered approach</span> for a healthier, brighter smile.</p>
      <Link to="/about" className="btn animated-text">Haqqımda daha Ətraflı...</Link>

      <div className="send-message-form">
        <input type="tel" id="phone" name="phone" placeholder="Your Phone Number" />
        <button type="submit">Send</button>
      </div>

      <div className="social-links">
        <a href="https://www.facebook.com/efendi.efendiyev.1990/" target='_blank' className="social-link"><i class="fa-solid fa-phone"></i></a>
        <a href="https://www.facebook.com/efendi.efendiyev.1990/" target='_blank' className="social-link"><i className="fab fa-facebook-f"></i></a>
        {/* <a href="#" className="social-link"><i className="fab fa-x-twitter"></i></a> */}
        <a href="https://www.instagram.com/eefendiyev/" target='_blank' className="social-link"><i className="fab fa-instagram"></i></a>
        <a href="https://wa.me/777697303" target='_blank' className="social-link"><i className="fa-brands fa-whatsapp"></i></a>
      </div>
      <div className="home-image">
        <img src={HomeImage} alt="Home" />
      </div>
    </div>
  );
}

export default Home;