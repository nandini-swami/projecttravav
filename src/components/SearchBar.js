import React from "react";
import "../components/SearchBar.css";

function SearchBar() {
  return (
    <div>
      {/* Search Bar */}
      <div className="search-bar">
        <span className="search-text">
          Search location, activity, restaurant, tags, etc...
        </span>
      </div>

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
