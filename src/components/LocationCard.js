import React from 'react';
import '../components/LocationCard.css';

function LocationCard({ location, index, addedPlans, handleAddToPlanClick }) {
  return (
    <div className="location-card">
      <h3 className="location-name">{location.name}</h3>
      <div className="location-rating">{location.rating}</div>
      <div className="location-tags">
        {location.tags.map((tag, index) => (
          <span key={index} className="tag">{tag}</span>
        ))}
      </div>
      <p className="location-description">{location.description}</p>
      {/* <div className="location-info">
        <p className="location-address">{location.address}</p>
        <p className="location-contact">{location.contact}</p>
        <a href={location.website} target="_blank" rel="noopener noreferrer" className="location-website">Visit Website</a>
      </div> */}
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