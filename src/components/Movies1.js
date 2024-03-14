import React from 'react';
import '../components/cssfiles/movies.css'; 

const Movies = ({ movies, onMovieClick }) => {
  const handleClick = (movie) => {
    onMovieClick(movie);
    scrollToBottom();
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div id="movieList">
      {movies.map((movie, index) => (
        <div key={index} className="movie" onClick={() => handleClick(movie)}>
          <img src={movie.poster} alt={movie.title} />
          <h3>{movie.title}</h3>
          <p>{movie.director}</p>
        </div>
      ))}
    </div>
  );
};

export default Movies;
