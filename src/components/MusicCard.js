// MusicCard.js

import React from 'react';

const MusicCard = () => {
  return (
    <div className="card">
      <div className="top">
        <div className="pfp">
          <div className="playing">
            <div className="greenline line-1"></div>
            <div className="greenline line-2"></div>
            <div className="greenline line-3"></div>
            <div className="greenline line-4"></div>
            <div className="greenline line-5"></div>
          </div>
        </div>
        <div className="texts">
          <p className="title-1">ARJUN REDDY</p>
          <p className="title-2">Emitemitemo</p>
        </div>
      </div>

      <div className="controls">
      </div>

      <div className="song-time">
        <p className="timetext time_now">1:31</p>
        <div className="time">
          <div className="elapsed"></div>
        </div>
        <p className="timetext time_full">3:46</p>
      </div>
    </div>
  );
};

export default MusicCard;
