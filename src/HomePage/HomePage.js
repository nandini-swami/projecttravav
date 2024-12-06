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
  const [searchInput, setSearchInput] = useState("");
  const [hoveredIndex, setHoveredIndex] = useState(null); // Track the hovered grid item
  const [isLocalFinds, setIsLocalFinds] = useState(false); // New state to toggle between Local Finds and Tourism

  const selectedCity = searchInput || "Chicago"; 
  const filteredItems = isLocalFinds ? localData[selectedCity] || [] : tourismData[selectedCity] || [];

  const navigate = useNavigate();

  const handleNavigate = (type) => {
    if (type === "localFinds") {
      setIsLocalFinds(true); // Switch to local finds data
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
        <span className={`tourism-travel-text ${isLocalFinds ? 'tourism-travel-text-local' : ''}`} onClick={() => handleNavigate("tourismTravel")}>
          Tourism Travel
        </span>
        <span className={`local-finds-text ${isLocalFinds ? 'local-finds-text-local' : ''}`} onClick={() => handleNavigate("localFinds")}>
          Local Finds
        </span>
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
              />
            </div>
          ))}
        </div>
        <img src={rightArrow} alt="Right Arrow" className="arrow right-arrow" />
      </div>
      <div className="map-container">
        <img src={mapImage} alt="Map" className="map-image" />
      </div>
    </div>
  );
}

export default HomePage;
