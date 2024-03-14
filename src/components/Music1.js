import React, { useState } from 'react';

const Music = ({ songs }) => {
  const [likedSongs, setLikedSongs] = useState([]);

  const toggleLike = (index) => {
    setLikedSongs((prevLikedSongs) => {
      const newLikedSongs = [...prevLikedSongs];
      const isLiked = newLikedSongs.includes(index);

      if (isLiked) {
        const indexToRemove = newLikedSongs.indexOf(index);
        newLikedSongs.splice(indexToRemove, 1);
      } else {
        newLikedSongs.push(index);
      }

      return newLikedSongs;
    });
  };

  return (
    <div className="music-container">
      <div className="songs-list">
        <h2>Songs List</h2>
        <div id="songList">
          {songs.map((song, index) => (
            <div key={index} className="song">
              <div className={`like-button ${likedSongs.includes(index) ? 'liked' : ''}`} onClick={() => toggleLike(index)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height="20" width="24" className="like-icon">
                  <path d="M12 21.35l-1.45-1.32C5.4 14.25 2 11.28 2 7.5 2 4.42 4.42 2 7.5 2c1.74 0 3.41.81 4.5 2.09C13.09 2.81 14.76 2 16.5 2 19.58 2 22 4.42 22 7.5c0 3.78-3.4 6.75-8.55 12.54L12 21.35z"></path>
                </svg>
              </div>
              <div className="play-button">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height="20" width="24" className="play-icon">
                  <path d="M8 5v14l11-7Z"></path>
                </svg>
              </div>
              <img src={song.image} alt={song.title} />
              <div className="song-details">
                <h3>{song.title}</h3>
                <p>{song.artist}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="liked-songs">
        <h2>Liked Songs</h2>
        <ul>
          {likedSongs.map((index) => (
            <li key={index}>{songs[index].title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Music;
