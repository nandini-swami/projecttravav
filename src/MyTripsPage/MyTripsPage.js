import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import './MyTripsPage.css';
import { FaPencilAlt } from 'react-icons/fa';
import TripEntry from './TripEntry';
import { FaPlusCircle } from 'react-icons/fa';
import NavBar from "../components/NavBar";

function MyTripsPage() {
  const trips = [
    {
      day: "Sunday October 13th",
      entries: [
        {
          time: "11:00 AM - 2:00 PM",
          location: "Navy Pier",
          rating: "★★★★☆",
          tags: ["food", "pets", "family", "music"],
        },
      ],
    },
    {
      day: "Monday October 14th",
      entries: [
        {
          time: "2:00 PM - 4:00 PM",
          location: "Boba King",
          rating: "★★★★☆",
          tags: ["food", "drink", "family"],
        },
        {
          time: "7:00 PM - 9:00 PM",
          location: "The Bean",
          rating: "★★★★☆",
          tags: ["outdoors", "picnic", "architecture"],
        },
      ],
    },
  ];

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
              <FaPlusCircle size={24} color="#828282" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyTripsPage;
