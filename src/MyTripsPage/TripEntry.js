import React from 'react';
import './TripEntry.css'; // Assuming you have specific styles for TripEntry

function TripEntry({ date, time, location, rating, tags }) {
  return (
    <div className="trip-entry">
      <div className="trip-date">{date}</div>
      <div className="trip-time">{time}</div>
      <div>{location}</div>
      <div className="rating">{rating}</div>
      <div className="tags">
        {tags.map(tag => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>
    </div>
  );
}

export default TripEntry;