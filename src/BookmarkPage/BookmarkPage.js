import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import logo from '../logo.png'; // Assuming you have a logo image
import settingsIcon from '../settingsIcon.png'; // Assuming you have a settings icon image
import profileIcon from '../profileIcon.png'; // Assuming you have a profile icon image
import searchIcon from '../searchIcon.png'; // Assuming you have a search icon image
import longImage from '../longImage.png'; 

function BookmarkPage() {
  return (
    <div className="BookmarkPage">
      <div className="top-bar" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
        <div className="top-left" style={{ display: 'flex', alignItems: 'center', marginRight: 'auto' }}>
          <div className="invisible-button" onClick={() => window.location.href = "/"} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}> 
            <img src={logo} alt="Logo" className="logo" />
            <span className="title">TravAv</span>
          </div>
        </div>
        <Link to="/" className="bubble home-bubble">
          <span className="bubble-text home-text">Home</span>
        </Link>
        <div className="bubble categories-bubble">
          <span className="bubble-text categories-text">Categories</span>
        </div>
        <Link to="/bookmarkpage" className="bubble bookmark-bubble">
          <span className="bubble-text bookmark-text">Bookmarks</span>
        </Link>
        <Link to="/mytripspage" className="bubble my-trips-bubble">
          <span className="bubble-text my-trips-text">My Trips</span>
        </Link>
        <img src={settingsIcon} alt="Settings" className="icon settings-icon" />
        <img src={profileIcon} alt="Profile" className="icon profile-icon" />
      </div>

      <div className="bookmark-title">
        <span className="bookmark-page-text">Bookmarks</span>
      </div>
      <div className="search-bar-container">
        <div className="search-bar-bookmark">
          <img src={searchIcon} alt="Search" className="search-icon" />
          <span className="search-text">Search in Bookmarks...</span>
        </div>
        <button className="add-button">Add my own</button>
      </div>
      {/* Add more content here */}
      <div className="trip-section">
        <span className="trip-location-text">Chicago</span>
        <img src={longImage} alt="Chicago Trip" className="trip-image" />
      </div>
      <div className="trip-section">
        <span className="trip-location-text">Myrtle Beach</span>
        <img src={longImage} alt="Myrtle Beach Trip" className="trip-image" />
      </div>
    </div>
  );
}

export default BookmarkPage;