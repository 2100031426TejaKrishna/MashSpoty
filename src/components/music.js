import React, { useState, useEffect } from 'react';
import NavigationBar from './NavigationBar';
import Music from './Music1.js';
import MusicCard from './MusicCard';
import '../App.css';
import '../components/cssfiles/music.css';
import '../components/cssfiles/musiccard.css';
import kurch from '../photos/kurchi.png';
import ratha from '../photos/rathale.png';
import ooo from '../photos/ooo.png';
import lov from '../photos/lover.png';
import na from '../photos/na.png';
import tre from '../photos/TERE.png';
import loader from '../loader.gif'; // Import the loader GIF

const HomePage = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [showLoader, setShowLoader] = useState(true); // Initially show loader

  useEffect(() => {
    // Simulate fetching song data
    setTimeout(() => {
      setShowLoader(false); // Hide loader after 800 milliseconds (replace with actual data fetching logic)
    }, 800);
  }, []); // Run only once on component mount

  const toggleNavbar = () => {
    setIsExpanded(!isExpanded);
  };

  const songs = [
    { title: 'KurchiMadatapetti ', artist: 'Thaman S, Sai Krishna, Sahthi', image: kurch },
    { title: 'Ee Rathale ', artist: 'Yuvan Shankar raja, Harani', image: ratha },
    { title: 'Oo Antava', artist: 'Indhravathi Chauhan', image: ooo },
    { title: 'Lover', artist: 'Taylor Swift', image: lov },
    { title: 'Nuvvunte Naa Jathagaa', artist: 'AR Rahaman, Sid Sri Ram', image: na },
    { title: 'Tere Pyaar Mein', artist: 'Pritam, Arjith Singh', image: tre },
  ];

  return (
    <div className="homepage-container">
      <NavigationBar isExpanded={isExpanded} toggleNavbar={toggleNavbar} />
      <video className="bg-video" autoPlay muted loop>
        <source src="https://media.istockphoto.com/id/1300474662/video/abstract-background-for-business-presentation-abstract-pattern-of-circles-with-the-effect-of.mp4?s=mp4-640x640-is&k=20&c=ah5RHMv31T-s72zBIJpf6oZYf0g6SJ5P4wH2dw0_nLY=" type="video/mp4" />
      </video>
      <div className={`content-container ${isExpanded ? 'expanded' : 'collapsed'}`}>
        {showLoader && ( // Show loader if showLoader is true
          <div className="loader">
            <img src={loader} alt="Loader" />
          </div>
        )}
        {!showLoader && ( // Render content only when loader is hidden
          <>
            <h1>Your PlayList is Ready 🫠</h1>
            <MusicCard />
            <Music songs={songs} />
          </>
        )}
      </div>
    </div>
  );
};

export default HomePage;
