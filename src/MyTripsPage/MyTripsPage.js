import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import logo from '../logo.png';
import settingsIcon from '../settingsIcon.png';
import profileIcon from '../profileIcon.png';
import './MyTripsPage.css';
import { FaPencilAlt } from 'react-icons/fa';
import TripEntry from './TripEntry';
import { FaPlusCircle } from 'react-icons/fa';


function MyTripsPage() {
  const trips = [
    {
      day: "Sunday October 13th",
      entries: [
        {
          time: "11:00 AM - 2:00 PM",
          location: "Navy Pier",
          rating: "★★★★☆",
          tags: ["food", "pets", "family", "music"]
        },
        // More entries for this day
      ]
    },
    {
      day: "Monday October 14th",
      entries: [
        {
          time: "2:00 PM - 4:00 PM",
          location: "Boba King",
          rating: "★★★★☆",
          tags: ["food", "drink", "family"]
        },
        {
          time: "7:00 PM - 9:00 PM",
          location: "The Bean",
          rating: "★★★★☆",
          tags: ["outdoors", "picnic", "architecture"]
        },
        // Entries for Sunday
      ]
    },
    {
      day: "Tuesday October 15th",
      entries: [
        {
          time: "7:00 AM - 9:00 AM",
          location: "Riverfront Yoga",
          rating: "★★★★☆",
          tags: ["activity", "picnic", "architecture"]
        },
        {
          time: "7:00 AM - 9:00 AM",
          location: "The Secret Mermaid",
          rating: "★★★★☆",
          tags: ["sculpture", "picnic"]
        },
        // Entries for Monday
      ]
    }
  ];

  return (
    <div className="MyTripsPage">
      <div className="top-bar" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
        <div className="top-left" style={{ display: 'flex', alignItems: 'center', marginRight: 'auto' }}>
          <div className="invisible-button" onClick={() => window.location.href = "/"} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}> 
            <img src={logo} alt="Logo" className="logo" />
            <span className="title">TravAv</span>
          </div>
        </div>
        <Link to="/" className="bubble home-bubble">
          <span className="bubble-text home-text">Home</span>
        </Link>
        <div className="bubble categories-bubble">
          <span className="bubble-text categories-text">Categories</span>
        </div>
        <Link to="/bookmarkpage" className="bubble bookmark-bubble">
          <span className="bubble-text bookmark-text">Bookmarks</span>
        </Link>
        <Link to="/mytripspage" className="bubble my-trips-bubble">
          <span className="bubble-text my-trips-text">My Trips</span>
        </Link>
        <img src={settingsIcon} alt="Settings" className="icon settings-icon" />
        <img src={profileIcon} alt="Profile" className="icon profile-icon" />
      </div>

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
        {trips.map((trip) => (
          <div className="day-column" key={trip.day}>
            <h2 className="day-title">{trip.day}</h2>
            {trip.entries.map((entry, index) => (
              <TripEntry
                key={index}
                date={trip.day}
                time={entry.time}
                location={entry.location}
                rating={entry.rating}
                tags={entry.tags}
              />
            ))}
            <div className="add-trip-button">
              <FaPlusCircle size={24} color="#828282" /> {/* Styling the icon */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyTripsPage;