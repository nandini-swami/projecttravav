import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import logo from '../logo.png'; // Assuming you have a logo image
import settingsIcon from '../settingsIcon.png'; // Assuming you have a settings icon image
import profileIcon from '../profileIcon.png'; // Assuming you have a profile icon image
import longImage from '../longImage.png'; 
<<<<<<< Updated upstream
=======
<<<<<<< HEAD
import './MyTripsPage.css';
=======
>>>>>>> ae9247591996bd0120aa017a8ac8e1cba9c163d7
>>>>>>> Stashed changes

function MyTripsPage() {
  return (
    <div className="MyTripsPage">
<<<<<<< Updated upstream
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
=======
      <div className="top-bar">
        <img src={logo} alt="Logo" className="logo" />
        <span className="title">TravAv</span>
        <Link to="/" className="bubble home-bubble">
          <span className="bubble-text home-text">Home</span>
        </Link>
        <Link to="/bookmarkpage" className="bubble bookmark-bubble">
          <span className="bubble-text bookmark-text">Bookmarks</span>
        </Link>
        <div className="bubble categories-bubble">
          <span className="bubble-text categories-text">Categories</span>
        </div>
>>>>>>> Stashed changes
        <Link to="/mytripspage" className="bubble my-trips-bubble">
          <span className="bubble-text my-trips-text">My Trips</span>
        </Link>
        <img src={settingsIcon} alt="Settings" className="icon settings-icon" />
        <img src={profileIcon} alt="Profile" className="icon profile-icon" />
      </div>
<<<<<<< Updated upstream

      <div className="mytripspage-title">
        <span className="mytripspage-text">My Trips</span>
=======
      <div className="mytripspage-title">
        <span className="mytripspage-text">My Trips</span>
<<<<<<< HEAD
        <button className="see-all-button">See All</button>
        <button className="new-trip-button">New Trip</button>
=======
>>>>>>> ae9247591996bd0120aa017a8ac8e1cba9c163d7
>>>>>>> Stashed changes
      </div>
      {/* Add more content here */}
      <div className="trip-section">
        <span className="trip-location-text">Chicago</span>
        <img src={longImage} alt="Chicago Trip" className="trip-image" />
      </div>
<<<<<<< Updated upstream
=======
<<<<<<< HEAD
=======
>>>>>>> Stashed changes
      <div className="trip-section">
        <span className="trip-location-text">Myrtle Beach</span>
        <img src={longImage} alt="Myrtle Beach Trip" className="trip-image" />
      </div>
<<<<<<< Updated upstream
=======
>>>>>>> ae9247591996bd0120aa017a8ac8e1cba9c163d7
>>>>>>> Stashed changes
      {/* Add more content here */}
    </div>
  );
}

export default MyTripsPage;