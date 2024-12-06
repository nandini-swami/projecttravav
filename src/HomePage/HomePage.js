import React, { useState } from "react";
import "../App.css";
import mapImage from "../mapImage.png";
import leftArrow from "../leftArrow.png";
import rightArrow from "../rightArrow.png";
import NavBar from "../components/NavBar";
import LocationCard from '../components/LocationCard.js'; 
import tourismData from '../Data/tourismData.json';
import localData from '../Data/localData.json';
import "../HomePage/HomePage.css";
import SearchBar from "../components/SearchBar";
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const [addedPlans, setAddedPlans] = useState([]);
  const [popupVisible, setPopupVisible] = useState(false);
  const [currentPlan, setCurrentPlan] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null); // Track the hovered grid item
  const [searchInput, setSearchInput] = useState("");
  const [isLocalFinds, setIsLocalFinds] = useState(false); // New state to toggle between Local Finds and Tourism

  const handleAddToPlanClick = (index) => {
    setCurrentPlan(index);
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  const selectedCity = searchInput || "Chicago"; 

  const filteredItems = isLocalFinds ? localData[selectedCity] || [] : tourismData[selectedCity] || [];

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

  const navigate = useNavigate();

  const handleNavigate = (type) => {
    if (type === "localFinds") {
      setIsLocalFinds(true); // Switch to local finds data
      // what do I navigate to?? i want to replace the data
    } else {
      setIsLocalFinds(false); // Switch back to tourism data
    }
  };
  

  return (
      <div className="HomePage">
        <NavBar /> 
        <SearchBar searchInput={searchInput} setSearchInput={setSearchInput} />
        <div className="location">
          <span className="location-text">Chicago</span>
        </div>
        <div className="section-titles">
        <span className={`tourism-travel-text ${isLocalFinds ? 'tourism-travel-text-local' : ''}`} onClick={() => handleNavigate("tourismTravel")} >
          Tourism Travel </span>
          <span className={`local-finds-text ${isLocalFinds ? 'local-finds-text-local' : ''}`} onClick={() => handleNavigate("localFinds")}>
            Local Finds </span>
          </div>
          <div className="underline-bar">
          <div className={`underline-bar-left ${isLocalFinds ? 'underline-bar-left-local' : ''}`}></div>
          <div className={`underline-bar-right ${isLocalFinds ? 'underline-bar-right-local' : ''}`}></div>
        </div>
        
        <div className="grid-container">
          <img src={leftArrow} alt="Left Arrow" className="arrow left-arrow" />
          <div className="image-grid">
            {filteredItems.map((location, index) => (
              <div
              key={index}
              className={`grid-item ${hoveredIndex === index ? "hover" : ""}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <LocationCard
                location={location}
                index={index}
                addedPlans={addedPlans}
                handleAddToPlanClick={handleAddToPlanClick}
              />
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
                Confirm details for {filteredItems[currentPlan]?.title}
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
                  confirmAddToPlan(date, fromTime, toTime, filteredItems[currentPlan]?.name);
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
