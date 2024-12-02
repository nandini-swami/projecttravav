import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import NavBar from "../components/NavBar"; // Import the NavBar component
import searchIcon from '../searchIcon.png'; // Assuming you have a search icon image
import longImage from '../longImage.png'; 

function CategoriesPage() {
  return (
    <div className="CategoriesPage">
      <NavBar /> 
      <div className="bookmark-title">
        <span className="bookmark-page-text">Categories</span>
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

export default CategoriesPage;