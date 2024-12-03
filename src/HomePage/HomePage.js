import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import mapImage from "../mapImage.png";
import image1 from "../image1.png"; 
import leftArrow from "../leftArrow.png";
import rightArrow from "../rightArrow.png";
import NavBar from "../components/NavBar";
import LocationCard from '/Users/nandiniswami/Desktop/weather-app/projecttravav/src/components/LocationCard.js'; 
import tourismData from '/Users/nandiniswami/Desktop/weather-app/projecttravav/src/Data/tourismData.json';
import "../HomePage/HomePage.css";

function HomePage() {
  const [addedPlans, setAddedPlans] = useState([]);
  const [popupVisible, setPopupVisible] = useState(false);
  const [currentPlan, setCurrentPlan] = useState(null);

  const handleAddToPlanClick = (index) => {
    setCurrentPlan(index);
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  const items = tourismData['Chicago'];

  const confirmAddToPlan = (date, fromTime, toTime, location) => {
    const newEntry = {
      time: `${fromTime} - ${toTime}`,
      location,
      rating: "★★★★☆", // Default or customizable
      tags: ["custom"], // Add tags if necessary
    };
  
    const storedTrips = JSON.parse(localStorage.getItem('trips')) || [];
    const updatedTrips = [...storedTrips];
  
    // Add entry to the correct day or create a new one
    const dayIndex = updatedTrips.findIndex((trip) => trip.day === date);
    if (dayIndex !== -1) {
      updatedTrips[dayIndex].entries.push(newEntry);
    } else {
      updatedTrips.push({
        day: date,
        entries: [newEntry],
      });
    }
  
    localStorage.setItem('trips', JSON.stringify(updatedTrips));
    setPopupVisible(false);
  };
  
  return (
      <div className="HomePage">
        <NavBar /> 
        <div className="search-bar">
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
        
        <div className="grid-container">
          <img src={leftArrow} alt="Left Arrow" className="arrow left-arrow" />
          <div className="image-grid">
            {items.map((location, index) => (
              <div key={index} className="grid-item">
                <LocationCard key={index} location={location} />
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
        {popupVisible && (
          <div className="popup-overlay">
            <div className="popup">
              <h3 className="popup-title">
                Confirm details for {items[currentPlan]?.title}
              </h3>
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
                {/* <button className="popup-confirm-btn" onClick={confirmAddToPlan}>
                  Add to Chicago Trip
                </button> */}
                <button
                className="popup-confirm-btn"
                onClick={() => {
                  const date = document.querySelector('input[type="date"]').value;
                  const fromTime = document.querySelectorAll('input[type="time"]')[0].value;
                  const toTime = document.querySelectorAll('input[type="time"]')[1].value;
                  confirmAddToPlan(date, fromTime, toTime, items[currentPlan]?.name);
                  }}>
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
