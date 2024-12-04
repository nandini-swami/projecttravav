import React, { useState, useEffect } from "react";
import "../components/SearchBar.css";

function SearchBar({ searchInput, setSearchInput }) {
  const [isClicked, setIsClicked] = useState(false); // For popup visibility
  const [typedLocation, setTypedLocation] = useState(""); // For user-typed location
  const [tags, setTags] = useState(["family friendly", "pet friendly", "music", "food"]); // For currently stored tags
  const validOptions = ["New York", "Chicago"]; // Predefined valid options

  // Close popup when clicking outside of it
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest(".search-bar") && !event.target.closest(".popup")) {
        setIsClicked(false);
      }
    };
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const handleKeyPress = (event) => {
    if (event.key === "Enter" && typedLocation.trim() !== "") {
      setSearchInput(typedLocation); // Update the global search input state
      setTypedLocation(""); // Clear the typed location
      setIsClicked(false); // Close the popup
    }
  };

  return (
    <div>
      {/* Search Bar */}
      <div
        className="search-bar"
        onClick={(e) => {
          e.stopPropagation(); // Prevent click event propagation
          setIsClicked(true); // Show popup
        }}
      >
        <span className="search-text">
          {searchInput || "Search location, activity, restaurant, tags, etc..."}
        </span>
      </div>

      {/* Popup and dimmed background */}
      {isClicked && (
        <>
          <div className="dimmed-background"></div> {/* Dimmed background */}
          <div className="popup">
            <div className="popup-input">
              <input
                type="text"
                value={typedLocation}
                onChange={(e) => setTypedLocation(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type a location..."
                className="popup-input-field"
              />
            </div>
            <div className="popup-options">
              {validOptions.map((option) => (
                <div
                  key={option}
                  className="popup-option"
                  onClick={() => {
                    setSearchInput(option); // Update the global search input state
                    setIsClicked(false); // Close the popup
                  }}
                >
                  {option}
                </div>
              ))}
            </div>
          </div>
        </>
      )}
      <div className="tags">
        {tags.map((tag) => {
          return (
            <div className="tag">
              <span className="tag-text">{tag}</span>
            </div>
          );
        })}
        <div className="tag add-filter-tag">
          <span className="tag-text add-filter-text">add filter</span>
        </div>
    </div>
  </div>
  );
}

export default SearchBar;
