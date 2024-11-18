import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import logo from '../logo.png'; // Assuming you have a logo image
import settingsIcon from '../settingsIcon.png'; // Assuming you have a settings icon image
import profileIcon from '../profileIcon.png'; // Assuming you have a profile icon image
import searchIcon from '../searchIcon.png'; // Assuming you have a search icon image
import mapImage from '../mapImage.png'; // Assuming you have a map image
import image1 from '../image1.png'; // Assuming you have an image
import image2 from '../image1.png'; // Assuming you have an image
import image3 from '../image1.png'; // Assuming you have an image
import image4 from '../image1.png'; // Assuming you have an image
import loadingBar from '../loadingBar.png'; // Assuming you have a loading bar image
import leftArrow from '../leftArrow.png'; // Assuming you have a left arrow image
import rightArrow from '../rightArrow.png'; // Assuming you have a right arrow image

function HomePage() {
  return (
    <div className="HomePage">
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
        <Link to="/mytripspage" className="bubble my-trips-bubble">
          <span className="bubble-text my-trips-text">My Trips</span>
        </Link>
        <img src={settingsIcon} alt="Settings" className="icon settings-icon" />
        <img src={profileIcon} alt="Profile" className="icon profile-icon" />
      </div>
      <div className="search-bar">
        <img src={searchIcon} alt="Search" className="search-icon" />
        <span className="search-text">Search location, activity, restaurant, tags, etc...</span>
      </div>
      <div className="tags">
        <div className="tag family-friendly-tag">
          <span className="tag-text">family friendly X</span>
        </div>
        <div className="tag food-tag">
          <span className="tag-text">food X</span>
        </div>
        <div className="tag music-tag">
          <span className="tag-text">music X</span>
        </div>
        <div className="tag add-filter-tag">
          <span className="tag-text add-filter-text">add filter</span>
        </div>
      </div>
      <div className="location">
        <span className="location-text">Chicago</span>
      </div>
      <div className="section-titles">
        <span className="tourism-travel-text">Tourism Travel</span>
        <span className="local-finds-text">Local Finds</span>
      </div>
      <div className="underline-bar">
        <div className="underline-bar-left"></div>
        <div className="underline-bar-right"></div>
      </div>
      <div className="grid-container">
        <img src={leftArrow} alt="Left Arrow" className="arrow left-arrow" />
        <div className="image-grid">
          <img src={image1} alt="Image 1" className="grid-image" />
          <img src={image1} alt="Image 2" className="grid-image" />
          <img src={image1} alt="Image 3" className="grid-image" />
          <img src={image1} alt="Image 4" className="grid-image" />
        </div>
        <img src={rightArrow} alt="Right Arrow" className="arrow right-arrow" />
      </div>
      <div className="loading-bar-container">
        <img src={loadingBar} alt="Loading Bar" className="loading-bar" />
      </div>
      <div className="map-container">
        <img src={mapImage} alt="Map" className="map-image" />
      </div>
      {/* Add more content here */}
    </div>
  );
}

export default HomePage;