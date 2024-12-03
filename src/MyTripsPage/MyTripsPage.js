import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import './MyTripsPage.css';
import { FaPencilAlt } from 'react-icons/fa';
import TripEntry from './TripEntry';
import { FaPlusCircle } from 'react-icons/fa';
import NavBar from "../components/NavBar";

function MyTripsPage() {
  const [trips, setTrips] = useState([]);
  useEffect(() => {
    // Load data from localStorage or fallback to JSON file
    const storedTrips = JSON.parse(localStorage.getItem('trips'));
    if (storedTrips) {
      setTrips(storedTrips);
    } else {
      fetch('/data/myTripsData.json') // Adjust path to your JSON file
        .then((res) => res.json())
        .then((data) => {
          setTrips(data);
          localStorage.setItem('trips', JSON.stringify(data)); // Initialize localStorage
        });
    }
  }, []);


  return (
    <div className="MyTripsPage">
      <NavBar />
      <div className="mytripspage-title">
        <span className="mytripspage-text">My Trips</span>
        <div>
          <button className="see-all-button">See All</button>
          <button className="new-trip-button">New Trip</button>
        </div>
      </div>
      <div className="trip-header">
        <h1 className="location-title">Chicago</h1>
        <div className="date-edit-container">
          <p className="date-range">10/13 - 10/15</p>
          <FaPencilAlt className="edit-icon" />
        </div>
      </div>
      <div className="days-container">
        {trips.map((trip, dayIndex) => (
          <div className="day-column" key={dayIndex}>
            <h2 className="day-title">{trip.day}</h2>
            {trip.entries.map((entry, entryIndex) => (
              <TripEntry
                key={entryIndex}
                date={trip.day}
                time={entry.time}
                location={entry.location}
                rating={entry.rating}
                tags={entry.tags}
              />
            ))}
            <div className="add-trip-button">
              <FaPlusCircle size={24} color="#828282" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyTripsPage;
