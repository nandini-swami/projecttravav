import React, { useState } from 'react';
import '../components/LocationCard.css';

function LocationCard({ location, index }) {
  const [popupVisible, setPopupVisible] = useState(false); // State for popup visibility

  const handleAddToPlanClick = () => {
    setPopupVisible(true); // Show the popup
  };

  const closePopup = () => {
    setPopupVisible(false); // Close the popup
  };

  const confirmAddToPlan = (date, fromTime, toTime) => {
    const newEntry = {
      time: `${fromTime} - ${toTime}`,
      location: location.name,
      rating: location.rating,
      tags: location.tags,
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
    setPopupVisible(false); // Close the popup
  };

  return (
    <div className="location-card">
      <h3 className="location-name">{location.name}</h3>
      <div className="location-rating">{location.rating}</div>
      <div className="location-tags">
        {location.tags.map((tag, idx) => (
          <span key={idx} className="tag">{tag}</span>
        ))}
      </div>
      <p className="location-description">{location.description}</p>
      <button
        className="add-to-plan-btn"
        onClick={handleAddToPlanClick}
      >
        Add to Plan
      </button>
      {popupVisible && (
        <>
          {/* <div className="dimmed-background"></div>  */}
          <div className="popup-overlay">
            <div className="popup">
              <h3 className="popup-title">
                Add {location.name} to Plan
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
                <button
                  className="popup-confirm-btn"
                  onClick={() => {
                    const date = document.querySelector('input[type="date"]').value;
                    const fromTime = document.querySelectorAll('input[type="time"]')[0].value;
                    const toTime = document.querySelectorAll('input[type="time"]')[1].value;
                    confirmAddToPlan(date, fromTime, toTime);
                  }}
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default LocationCard;
