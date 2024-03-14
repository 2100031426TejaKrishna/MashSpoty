// src/components/NavigationBar.js

import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaFilm, FaMusic, FaFire, FaEnvelope, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { MdInfo } from 'react-icons/md'; 
import '../components/cssfiles/navigation.css';

const NavigationBar = ({ isExpanded, toggleNavbar }) => {
  return (
    <div className="navbar-container">
      <nav className={`bottom-nav ${isExpanded ? 'expanded' : 'collapsed'}`}>
        
        <NavLink to="/movie" activeClassName="active">
          <div className="nav-item">
            <FaFilm size={isExpanded ? 30 : 24} />
            {isExpanded && <span className="nav-text">Movies</span>}
          </div>
        </NavLink>
        
        <NavLink to="/music" activeClassName="active">
          <div className="nav-item">
            <FaMusic size={isExpanded ? 30 : 24} />
            {isExpanded && <span className="nav-text">Music</span>}
          </div>
        </NavLink>

        <NavLink to="/new-hot" activeClassName="active">
          <div className="nav-item">
            <FaFire size={isExpanded ? 30 : 24} />
            {isExpanded && <span className="nav-text">New&Hot</span>}
          </div>
        </NavLink>

        <div className="nav-item">
          <NavLink to="/subscribe" activeClassName="active">
            <FaEnvelope size={isExpanded ? 30 : 24} />
            {isExpanded && <span className="nav-text">Sub</span>}
          </NavLink>
        </div>
        
        <div className="nav-item">
          <NavLink to="/about" activeClassName="active">
            <MdInfo size={isExpanded ? 30 : 24} />
            {isExpanded && <span className="nav-text">About</span>}
          </NavLink>
        </div>
        
      </nav>
      <div className={`toggle-button ${isExpanded ? 'expanded' : 'collapsed'}`} onClick={toggleNavbar}>
        {isExpanded ? <FaArrowLeft /> : <FaArrowRight />}
      </div>
    </div>
  );
};

export default NavigationBar;
