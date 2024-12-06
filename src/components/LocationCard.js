import React, { useState } from 'react';
import { FaBookmark, FaRegBookmark } from 'react-icons/fa';
import '../components/LocationCard.css';

function LocationCard({ location, index, handleAddToPlanClick, isAdded }) {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const toggleBookmark = () => {
    setIsBookmarked((prev) => !prev);
  };

  return (
    <div className="location-card">
      {/* Bookmark Icon */}
      <div 
        className="bookmark-icon" 
        title="Bookmark" 
        onClick={toggleBookmark}
      >
        {isBookmarked ? <FaBookmark className="filled" /> : <FaRegBookmark />}
      </div>

      <h3 className="location-name">{location.name}</h3>
      <div className="location-rating">{location.rating}</div>
      <div className="location-tags">
        {location.tags.map((tag, idx) => (
          <span key={idx} className="tag">{tag}</span>
        ))}
      </div>
      <p className="location-description">{location.description}</p>
      
      <button
        className={`add-to-plan-btn ${isAdded ? 'added' : ''}`} // Add dynamic class
        onClick={() => !isAdded && handleAddToPlanClick(index)} // Disable if already added
      >
        {isAdded ? 'Added' : 'Add to Plan'} {/* Change button text */}
      </button>
    </div>
  );
}

export default LocationCard;
