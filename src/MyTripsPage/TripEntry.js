import React from 'react';
import './TripEntry.css'; // Correct path to the CSS file

function TripEntry({ time, location, rating, tags, onDelete }) {
  return (
    <div className="trip-entry">
      {/* Static Bookmark Icon */}
      <div className="bookmark-indicator">
        🔖 {/* Static bookmark emoji */}
      </div>
      {/* Delete button (cross icon) */}
      <div className="delete-icon" onClick={onDelete}>
        ❌
      </div>
      <div className="trip-time">{time}</div> {/* Display time */}
      <div className="trip-location">{location}</div> {/* Added class name here */}
      <div className="trip-rating">{rating}</div> {/* Display rating */}
      <div className="tags">
        {tags.map(tag => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>
    </div>
  );
}

export default TripEntry;