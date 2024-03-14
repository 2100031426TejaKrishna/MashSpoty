import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import '../components/cssfiles/landing.css';

const LandingPage = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="landing-page">
      <video className="bg-video" autoPlay muted loop>
        <source src="https://media.istockphoto.com/id/1403454096/video/glowing-blue-spotlight-beams-on-stage.mp4?s=mp4-640x640-is&k=20&c=Vdnhb-SSRF9NYwJtqMX7VSwkmGpa7LZ8oEOnVLeY7_s=" type="video/mp4" />
      </video>
      <div className="content" style={{ transform: `translateY(${scrollPosition * 0.5}px)` }}>
        <h1>Welcome to MashSpoty App</h1>
        <h2>Discover a world of movies and music with our exciting entertainment platform.</h2>
        <Link to="/movie">
          <button className="get-started-button">Get Started</button>
        </Link>
      </div>
    </div>
  );
};
export default LandingPage;