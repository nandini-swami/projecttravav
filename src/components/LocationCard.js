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
        className={`add-to-plan-btn ${isAdded ? 'added' : ''}`} 
        onClick={() => !isAdded && handleAddToPlanClick(index)} 
      >
        {isAdded ? 'Added' : 'Add to Plan'} 
      </button>
    </div>
  );
}

export default LocationCard;
