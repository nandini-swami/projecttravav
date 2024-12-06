import React, { useState } from 'react';
import '../BookmarkPage/BookmarkPage.css';
import NavBar from "../components/NavBar";
import LocationCard from '../components/LocationCard.js';
import bookmarksData from '../Data/bookmarksData.json';

function BookmarkPage() {
  const [addedPlans, setAddedPlans] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null); // Track hovered cards

  const handleAddToPlanClick = (index) => {
    setAddedPlans((prev) => {
      if (prev.includes(index)) {
        return prev.filter((item) => item !== index);
      } else {
        return [...prev, index];
      }
    });
  };

  return (
    <div className="BookmarkPage">
      <NavBar />
      <div className="bookmark-title">
        <span className="bookmark-page-text">Bookmarks</span>
      </div>

      {/* Chicago Section */}
      <div className="bookmark-city-section">
        <h2 className="bookmark-city-title">Chicago</h2>
        <div className="grid-container">
          {bookmarksData["Chicago"].map((location, index) => (
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
      </div>

      {/* New York Section */}
      <div className="bookmark-city-section">
        <h2 className="bookmark-city-title">New York</h2>
        <div className="grid-container">
          {bookmarksData["New York"].map((location, index) => (
            <div
              key={index}
              className={`grid-item ${hoveredIndex === index + bookmarksData["Chicago"].length ? "hover" : ""}`}
              onMouseEnter={() => setHoveredIndex(index + bookmarksData["Chicago"].length)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <LocationCard
                location={location}
                index={index + bookmarksData["Chicago"].length}
                addedPlans={addedPlans}
                handleAddToPlanClick={handleAddToPlanClick}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BookmarkPage;
