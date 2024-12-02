import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../components/NavBar.css"; // Ensure this CSS file includes the updated styles
import logo from "../logo.png"; // Adjust the import path if necessary
import settingsIcon from "../settingsIcon.png"; 
import profileIcon from "../profileIcon.png";

function NavBar() {
  const location = useLocation(); // Get the current page's location

  // Define the navigation links
  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/categories", label: "Categories" },
    { path: "/bookmarkpage", label: "Bookmarks" },
    { path: "/mytripspage", label: "My Trips" },
  ];

  return (
    <div
      className="top-bar"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
      }}
    >
      <div
        className="top-left"
        style={{
          display: "flex",
          alignItems: "center",
          marginRight: "auto",
        }}
      >
        <div
          className="invisible-button"
          onClick={() => (window.location.href = "/")}
          style={{
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
          }}
        >
          <img src={logo} alt="Logo" className="logo" />
          <span className="title">TravAv</span>
        </div>
      </div>
      {navLinks.map((link) => (
        <Link
          key={link.path}
          to={link.path}
          className={`bubble ${
            location.pathname === link.path
              ? "clicked-page-button" // Highlighted style for the active page
              : "non-clicked-page-button" // Default style for other pages
          }`}
        >
          <span
            className={`bubble-text ${
              location.pathname === link.path ? "clicked-text" : "non-clicked-text"
            }`}
          >
            {link.label}
          </span>
        </Link>
      ))}
      <img
        src={settingsIcon}
        alt="Settings"
        className="icon settings-icon"
        style={{
          width: "40px",
          height: "40px",
          marginRight: "-1px", // Move settings icon closer
        }}
      />
      <img
        src={profileIcon}
        alt="Profile"
        className="icon profile-icon"
        style={{
          width: "40px",
          height: "40px",
          marginRight: "60px", // Move profile icon closer
        }}
      />
    </div>
  );
}

export default NavBar;
