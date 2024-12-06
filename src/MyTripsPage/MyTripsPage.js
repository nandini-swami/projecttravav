import React, { useEffect, useState } from 'react';
import '../App.css';
import './MyTripsPage.css';
import { FaPencilAlt } from 'react-icons/fa';
import TripEntry from './TripEntry';
import { FaPlusCircle } from 'react-icons/fa';
import NavBar from "../components/NavBar";

function MyTripsPage() {
  const [trips, setTrips] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false); // Popup state
  const [dateRange, setDateRange] = useState('12/6 - 12/15'); // Initial date range
  const [tempDateRange, setTempDateRange] = useState(dateRange); // Temporary state for editing
  const [currentPage, setCurrentPage] = useState(0); // Tracks current page index
  const entriesPerPage = 3; // Max number of days per page


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

    // Function to handle Save in Popup
    const handleSaveDateRange = () => {
      setDateRange(tempDateRange); // Update the date range
      setIsPopupOpen(false); // Close the popup
    };

     // Pagination controls
  const startIndex = currentPage * entriesPerPage;
  const endIndex = startIndex + entriesPerPage;
  const displayedTrips = trips.slice(startIndex, endIndex);

  const handlePrev = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (endIndex < trips.length) setCurrentPage(currentPage + 1);
  };

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
          <p className="date-range">{dateRange}</p>
          <FaPencilAlt
            className="edit-icon"
            onClick={() => setIsPopupOpen(true)} // Open the popup on click
          />
        </div>
      </div>
      <div className="days-container">
      <button onClick={handlePrev} className="nav-button" disabled={currentPage === 0}>
          <span>&lt;</span> {/* This represents the left arrow symbol "<" */}
        </button>
        {displayedTrips.map((trip, dayIndex) => (
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
        <button onClick={handleNext} className="nav-button" disabled={endIndex >= trips.length}>
          <span>&gt;</span> {/* This represents the right arrow symbol ">" */}
        </button>
      </div>

      {/* Popup */}
      {isPopupOpen && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h2>Edit Date Range</h2>
            <input
              type="text"
              value={tempDateRange}
              onChange={(e) => setTempDateRange(e.target.value)} // Update temp date range
              className="date-input"
            />
            <div className="popup-buttons">
            <button onClick={() => setIsPopupOpen(false)} className="cancel-button">
                Cancel
              </button>
              <button onClick={handleSaveDateRange} className="save-button">
                Save
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default MyTripsPage;
