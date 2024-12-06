import React, { useState } from 'react';
import '../BookmarkPage/BookmarkPage.css';
import NavBar from "../components/NavBar";
import LocationCard from '../components/LocationCard.js';
import initialBookmarksData from '../Data/bookmarksData.json'; // Renamed for clarity

function BookmarkPage() {
  const [bookmarks, setBookmarks] = useState(initialBookmarksData); // Correctly initialize state from imported data
  const [addedPlans, setAddedPlans] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [showAddLocationForm, setShowAddLocationForm] = useState(false);
  const [cityToAdd, setCityToAdd] = useState("Chicago");


  const handleAddToPlanClick = (index) => {
    setAddedPlans((prev) => {
      if (prev.includes(index)) {
        return prev.filter((item) => item !== index);
      } else {
        return [...prev, index];
      }
    });
  };

  const convertToStars = (rating) => {
    const fullStars = '★'.repeat(rating);
    const emptyStars = '☆'.repeat(5 - rating);
    return fullStars + emptyStars;
  };

const handleAddCustomLocation = (newLocation) => {
  // Convert numeric rating to stars
  const ratingInStars = convertToStars(newLocation.rating);

  const updatedLocation = {
    ...newLocation,
    rating: ratingInStars // Store rating as stars
  };

  const updatedBookmarks = {
    ...bookmarks,
    [cityToAdd]: [...bookmarks[cityToAdd], updatedLocation] // Add new location with star rating
  };

  setBookmarks(updatedBookmarks);
  setShowAddLocationForm(false); // Close form after submission
};

  return (
    <div className="BookmarkPage">
      <NavBar />
      <div className="title-button-container">
        <div className="bookmark-title">
          <span className="bookmark-page-text">Bookmarks</span>
        </div>
        <div className="button-container">
              <button className="add-location-button" onClick={() => setShowAddLocationForm(prev => !prev)}>
                  {showAddLocationForm ? 'Cancel' : 'Add Custom Location'}
              </button>
          </div>
      </div>

      {/* Add Custom Location Form */}
      {showAddLocationForm && (
        <div className="add-custom-location">
          <h2>Add Custom Location</h2>
          <form onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          const newLocation = {
            name: formData.get('name'),
            description: formData.get('description'),
            tags: formData.get('tags') ? formData.get('tags').split(',') : [], // Safely handle tags
            address: formData.get('address'),
            contact: formData.get('contact'),
            website: formData.get('website'),
            rating: formData.get('rating'),
          };
          handleAddCustomLocation(newLocation);
          e.target.reset();
        }}>
          <select onChange={(e) => setCityToAdd(e.target.value)} value={cityToAdd}>
            <option value="Chicago">Chicago</option>
            <option value="New York">New York</option>
          </select>
          <input type="text" name="name" placeholder="Name" required />
          <input type="text" name="description" placeholder="Description" required />
          <input type="text" name="tags" placeholder="Tags (comma-separated)" />
          <input type="text" name="address" placeholder="Address" required />
          <input type="text" name="contact" placeholder="Contact" />
          <input type="text" name="website" placeholder="Website" />
          <input type="number" name="rating" placeholder="Rating" step="0.1" min="0" max="5" />
          <button type="submit">Add Location</button>
        </form>
        </div>
      )}

      {/* Chicago Section */}
      <div className="bookmark-city-section">
        <h2 className="bookmark-city-title">Chicago</h2>
        <div className="grid-container">
          {bookmarks["Chicago"].map((location, index) => (
            <div
              key={index}
              className={`grid-item ${hoveredIndex === index ? "hover" : ""}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <LocationCard
                location={location}
                index={index}
                addedPlans={addedPlans}
                handleAddToPlanClick={handleAddToPlanClick}
              />
            </div>
          ))}
        </div>
      </div>

      {/* New York Section */}
      <div className="bookmark-city-section">
        <h2 className="bookmark-city-title">New York</h2>
        <div className="grid-container">
          {bookmarks["New York"].map((location, index) => (
            <div
              key={index}
              className={`grid-item ${hoveredIndex === index + bookmarks["Chicago"].length ? "hover" : ""}`}
              onMouseEnter={() => setHoveredIndex(index + bookmarks["Chicago"].length)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <LocationCard
                location={location}
                index={index + bookmarks["Chicago"].length}
                addedPlans={addedPlans}
                handleAddToPlanClick={handleAddToPlanClick}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BookmarkPage;
