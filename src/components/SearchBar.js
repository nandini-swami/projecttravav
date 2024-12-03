import React, { useState, useEffect } from "react";
import "../components/SearchBar.css";

function SearchBar() {
  const [isClicked, setIsClicked] = useState(false); // For popup visibility
  const [searchInput, setSearchInput] = useState(""); // For user input

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
            <div className="popup-options">
              {validOptions.map((option) => (
                <div
                  key={option}
                  className="popup-option"
                  onClick={() => {
                    setSearchInput(option); // Set input to selected option
                    setIsClicked(false); // Close popup
                  }}
                >
                  {option}
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {/* Tags */}
      <div className="tags">
        <div className="tag family-friendly-tag">
          <span className="tag-text">family friendly X</span>
        </div>
        <div className="tag food-tag">
          <span className="tag-text">food X</span>
        </div>
        <div className="tag music-tag">
          <span className="tag-text">music X</span>
        </div>
        <div className="tag add-filter-tag">
          <span className="tag-text add-filter-text">add filter</span>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
