import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import logo from "../logo.png";
import settingsIcon from "../settingsIcon.png";
import profileIcon from "../profileIcon.png";
import searchIcon from "../searchIcon.png";
import mapImage from "../mapImage.png";
import image1 from "../image1.png"; // Example image for grid items
import leftArrow from "../leftArrow.png";
import rightArrow from "../rightArrow.png";

function HomePage() {
  // Individual state for each grid item's button
  const [addedPlans, setAddedPlans] = useState([]);
  const [popupVisible, setPopupVisible] = useState(false); // Track popup visibility
  const [currentPlan, setCurrentPlan] = useState(null);

  const handleAddToPlanClick = (index) => {
    setCurrentPlan(index); // Set the current item index
    setPopupVisible(true);
  };

  const confirmAddToPlan = () => {
    if (!addedPlans.includes(currentPlan)) {
      setAddedPlans([...addedPlans, currentPlan]); // Mark the item as added
    }
    setPopupVisible(false); // Close the popup
  };

  const closePopup = () => {
    setPopupVisible(false); // Close the popup
  };

  const items = [
    { id: 0, title: "The Secret Mermaid", image: image1 },
    { id: 1, title: "Another Cool Spot", image: image1 },
    { id: 2, title: "Hidden Gem", image: image1 },
    { id: 3, title: "Must-Visit Place", image: image1 },
  ];

  return (
    <div className="HomePage">
      {/* Top Bar */}
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

      {/* Search Bar */}
      <div className="search-bar">
        <img src={searchIcon} alt="Search" className="search-icon" />
        <span className="search-text">Search location, activity, restaurant, tags, etc...</span>
      </div>

      {/* Tags */}
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

      {/* Location and Sections */}
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

      {/* Grid Container */}
      <div className="grid-container">
        <img src={leftArrow} alt="Left Arrow" className="arrow left-arrow" />
        <div className="image-grid">
          {items.map((item, index) => (
            <div
              key={index}
              className="grid-item"
              onMouseEnter={(e) => e.currentTarget.classList.add("hover")}
              onMouseLeave={(e) => e.currentTarget.classList.remove("hover")}
            >
              <img src={item.image} alt={item.title} className="grid-image" />
              <button
                className={`add-to-plan-btn ${
                  addedPlans.includes(index) ? "added" : ""
                }`}
                onClick={() => handleAddToPlanClick(index)}
              >
                {addedPlans.includes(index) ? "Added" : "Add to Plan"}
              </button>
            </div>
          ))}
        </div>
        <img src={rightArrow} alt="Right Arrow" className="arrow right-arrow" />
      </div>

      <div className="map-container">
        <img src={mapImage} alt="Map" className="map-image" />
      </div>

      {/* Popup */}
      {popupVisible && (
        <div className="popup-overlay">
          <div className="popup">
            <h3 className="popup-title">Confirm details for {items[currentPlan]?.title}</h3>
            <div className="popup-body">
              <label className="popup-label">Date:</label>
              <input type="date" className="popup-input" />
              <div className="time-select">
                <label className="popup-label">From:</label>
                <input type="time" className="popup-input" />
                <label className="popup-label">To:</label>
                <input type="time" className="popup-input" />
              </div>
            </div>
            <div className="popup-actions">
              <button className="popup-cancel-btn" onClick={closePopup}>
                Cancel
              </button>
              <button className="popup-confirm-btn" onClick={confirmAddToPlan}>
                Add to Chicago Trip
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default HomePage;
