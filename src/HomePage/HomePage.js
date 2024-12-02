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
import SearchBar from "../components/SearchBar";

function HomePage() {
  const [addedPlans, setAddedPlans] = useState([]);
  const [popupVisible, setPopupVisible] = useState(false);
  const [currentPlan, setCurrentPlan] = useState(null);

  const handleAddToPlanClick = (index) => {
    setCurrentPlan(index);
    setPopupVisible(true);
  };

  const confirmAddToPlan = () => {
    if (!addedPlans.includes(currentPlan)) {
      setAddedPlans([...addedPlans, currentPlan]);
    }
    setPopupVisible(false);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  const items = tourismData['Chicago'];
  
  return (
      <div className="HomePage">
        <NavBar /> 
        <SearchBar />
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
                <button className="popup-confirm-btn" onClick={confirmAddToPlan}>
                  Add to Chicago Trip
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
    <div className="HomePage">
      <NavBar /> 
      <SearchBar />
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
          {items.map((item, index) => (
            <div key={index} className="grid-item">
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
