import React, { useState } from 'react';
import '../components/LocationCard.css';

function LocationCard({ location, index, addedPlans, handleAddToPlanClick }) {
  const [popupVisible, setPopupVisible] = useState(false);
  const [date, setDate] = useState('');
  const [fromTime, setFromTime] = useState('');
  const [toTime, setToTime] = useState('');
  const [isAdded, setIsAdded] = useState(false); // Track if added to plan

  const confirmAddToPlan = () => {
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
    setIsAdded(true); // Mark as added
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
        className={`add-to-plan-btn ${
          addedPlans.includes(index) ? "added" : ""
        }`}
        onClick={() => handleAddToPlanClick(index)}
      >
        {addedPlans.includes(index) ? "Added" : "Add to Plan"}
      </button>
      
    </div>
  );
}

export default LocationCard;
