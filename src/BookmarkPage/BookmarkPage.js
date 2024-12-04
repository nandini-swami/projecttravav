import React from 'react';
import '../App.css';
import '../BookmarkPage/BookmarkPage.css'
import NavBar from "../components/NavBar"; // Import the NavBar component
import searchIcon from '../searchIcon.png'; // Assuming you have a search icon image
import longImage from '../longImage.png'; 

function BookmarkPage() {
  return (
    <div className="BookmarkPage">
      <NavBar /> 
      <div className="bookmark-title">
        <span className="bookmark-page-text">Bookmarks</span>
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