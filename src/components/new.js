import React, { useState } from 'react';
import NavigationBar from './NavigationBar';
import Carousel from './Carousel'; 
import '../App.css';

const HomePage = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleNavbar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="homepage-container">
      <video className="bg-video" autoPlay muted loop>
        <source src="https://media.istockphoto.com/id/1287908843/video/looped-background-overlay-with-golden-bokeh-particles-on-black.mp4?s=mp4-640x640-is&k=20&c=vctDe3qhZxX2C-mTGK8wSGgaQj3Bnwuicm2-cvaC2bA=" type="video/mp4" />
      </video>
      <NavigationBar isExpanded={isExpanded} toggleNavbar={toggleNavbar} />

      <div className={`content-container ${isExpanded ? 'expanded' : 'collapsed'}`}>
        <h1>Top New & Hot 🔥</h1>
        <center><Carousel /></center> 
        
        <div className="additional-content">
          <h2  style={{ color: 'Blue' }}>More Content</h2>
          <p>Filmmaker Bejoy Nambiar recently opened up about his film 'Dange', its casting and his long-standing association with Malayalam star Dulquer Salmaan. || 
          Music label Maajja refuted 'Enjoy Enjaami' producer Santhosh Narayanan's allegations of non-payment of dues. Maajja claimed that all contractual obligations were fulfilled and the artistes' conflicts fuelled the controversies.|| 
          The 2024 Oscars telecast reached a four-year viewership high with 19.5 million viewers, marking a 4% increase from last year. The atomic bomb drama 'Oppenheimer' won seven awards, including Best Picture.



</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
