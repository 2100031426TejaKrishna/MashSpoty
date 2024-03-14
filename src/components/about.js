import React, { useState, useEffect } from 'react';
import NavigationBar from './NavigationBar';
import '../App.css';
import loader from '../loader.gif';

const AboutPage = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [showLoader, setShowLoader] = useState(true); // Initially show loader

  useEffect(() => {
    setTimeout(() => {
      setShowLoader(false); // Hide loader after 800 milliseconds (replace with actual data fetching logic)
    }, 800);
  }, []); // Run only once on component mount

  const toggleNavbar = () => {
    setIsExpanded(!isExpanded);
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    textAlign: 'center',
    padding: '250px', // Adjust the padding as needed
  };

  return (
    <div style={containerStyle}>
      <div className="homepage-container">
        {showLoader && (
          <div className="loader">
            <img src={loader} alt="Loader" />
          </div>
        )}
        {!showLoader && (
          <div className="about-container">
            <NavigationBar isExpanded={isExpanded} toggleNavbar={toggleNavbar} />
            <div className={`content-container ${isExpanded ? 'expanded' : 'collapsed'}`}>
              <h1 style={{ color: 'DarkBlue' }}>About Us</h1>
              <h3>Welcome to our website! We aim to provide you with the latest and greatest movies, trailers, music, and entertainment content.</h3>
              <h3>This is a Basic FrontEnd Application where Everything was designed at basic and will improve further with more content!</h3>
              <p>Feel free to explore our collection of movies and watch trailers, Songs section is default can check the likedsongs feature, Hot cine buzzes will be updated frequently,login and subscribe features are default will update in future !! ,any recommendations please feel to contact us.</p>
              <p>If you have any questions or feedback, don't hesitate to <a href="mailto:chtejakrishna242@gmail.com">contact us</a>. Enjoy your time here!</p>
            </div>
            <footer style={{ paddingLeft: '140px' }}> {/* Add padding to the top of the footer */}
              <p>&copy; {new Date().getFullYear()} MashSpoty. All rights reserved.</p>
            </footer>
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutPage;
