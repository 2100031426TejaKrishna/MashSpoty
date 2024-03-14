import React, { useState, useEffect } from 'react';
import NavigationBar from './NavigationBar';
import Movies from './Movies1';
import '../App.css';
import '../components/cssfiles/movies.css';
import sal from '../photos/sallar.png';
import ani from '../photos/animal.png';
import jaw from '../photos/jawan.png';
import hanu from '../photos/hanu.png';
import avt from '../photos/avat.png';
import mar from '../photos/mar.png';
import rrr from '../photos/rrr.png';
import dasr from '../photos/dasr.png';
import bhar from '../photos/bhar.png';
import mb from '../photos/mb.png';


import loader from '../loader.gif';

const MoviePage = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [showLoader, setShowLoader] = useState(true); // Initially show loader

  useEffect(() => {
    setTimeout(() => {
      setShowLoader(false); // Hide loader after 2 seconds (replace with actual data fetching logic)
    }, 800);
  }, []); 

  const toggleNavbar = () => {
    setIsExpanded(!isExpanded);
  };

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
    // Scroll to the bottom of the content container
    const contentContainer = document.querySelector('.content-container');
    if (contentContainer) {
      contentContainer.scrollTop = contentContainer.scrollHeight;
    }
  };

  function openFullscreen(videoElement) {
    if (videoElement.requestFullscreen) {
      videoElement.requestFullscreen();
    } else if (videoElement.mozRequestFullScreen) {
      videoElement.mozRequestFullScreen();
    } else if (videoElement.webkitRequestFullscreen) {
      videoElement.webkitRequestFullscreen();
    } else if (videoElement.msRequestFullscreen) {
      videoElement.msRequestFullscreen();
    }

    // Scroll to the bottom of the content container
    const contentContainer = document.querySelector('.content-container');
    if (contentContainer) {
      contentContainer.scrollTop = contentContainer.scrollHeight;
    }
  }

  const movies = [
    { title: 'SALLAR', director: 'IMDB Rating: 6.5/10', poster: sal, trailer: 'JlG4TOVZEHI' },
    { title: 'ANIMAL', director: 'IMDB Rating: 6.3/10', poster: ani, trailer: 'YD7b4gU0HWQ' },
    { title: 'JAWAN', director: 'IMDB Rating: 7/10', poster: jaw, trailer: 'BhmGCoBTjzc' },
    { title: 'HAMU-MAN', director: 'IMDB Rating: 8.4/10', poster: hanu, trailer: 'Oqvly3MvlXA' },
    { title: 'AVATAR', director: 'IMDB Rating: 7.6/10', poster: avt, trailer: 'CYYtLXfquy0' },
    { title: 'AVENGERS', director: 'IMDB Rating: 8.4/10', poster: mar, trailer: 'NVf7qLnEuvQ' },
    { title: 'RRR', director: 'IMDB Rating: 7.7/10', poster: rrr, trailer: 'NgBoMJy386M' },
    { title: 'DASARA', director: 'IMDB Rating: 6.6/10', poster: dasr, trailer: 'GP6DRJwGjcE' },
    { title: 'BRAHMASTRA', director: 'IMDB Rating: 5.6/10', poster: bhar, trailer: 'l54jYAncjdw' },
    { title: 'GUNTUR KARAM', director: 'IMDB Rating: 5.4/10', poster: mb, trailer: 'q8M6Ybjr2Wc' },
    
  ];

  return (
    <div className="homepage-container">
      {showLoader && (
        <div className="loader">
          <img src={loader} alt="Loader" />
        </div>
      )}
      <video className="bg-video" autoPlay muted loop>
        <source src="https://media.istockphoto.com/id/1381548799/video/podium-studio-stage-template-for-product-showcase-pedestal-or-platform-illuminated-by-volume.mp4?s=mp4-640x640-is&k=20&c=8M7VAVZpcgZFsQXrKP8mXNCU7j4NU-LVIN_IG7bSzg8=" type="video/mp4" />
      </video>
      <NavigationBar isExpanded={isExpanded} toggleNavbar={toggleNavbar} />
      {!showLoader && (
        <div className={`content-container ${isExpanded ? 'expanded' : 'collapsed'}`}>
          <h1>Explore Movies Here 😎</h1>
          <h3 style={{ color: 'white' }}>
            Click and watch <span style={{ color: 'yellow', animation: 'blink 1s infinite', textDecoration: 'underline',fontSize: '1em' }}>trailers</span> !
          </h3>
          <Movies movies={movies} onMovieClick={handleMovieClick} />
          {selectedMovie && (
            <div className="video-container">
              <iframe
                title="movie-video"
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${selectedMovie.trailer}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                onClick={() => openFullscreen(document.documentElement)} 
              ></iframe>
              <button className="close-btn" onClick={() => setSelectedMovie(null)}>Close Video</button>
            </div>
          )}
        </div>
      )}
      
    </div>
  );
};

export default MoviePage;
