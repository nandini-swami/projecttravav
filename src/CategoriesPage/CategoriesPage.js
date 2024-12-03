import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import NavBar from "../components/NavBar"; // Import the NavBar component
import "../CategoriesPage/CategoriesPage.css";


function CategoriesPage() {
  return (
    <div className="CategoriesPage">
      <NavBar /> 
      <div className="bookmark-title">
        <span className="bookmark-page-text">Categories</span>
      </div>
      
      {/* Add more content here */}
      <div className="categories-title">
        <span className="categories-page-text">Categories</span>
        <span className="categories-page-text-right">Chicago</span>
      </div>
      <div className="categories-grid">
        <div className="category-box-food">
          <span className="category-text">Food</span>
        </div>
        <div className="category-box">
          <span className="category-text">History & Culture</span>
        </div>
        <div className="category-box">
          <span className="category-text">Outdoor</span>
        </div>
        <div className="category-box">
          <span className="category-text">Art & Music</span>
        </div>
        <div className="category-box">
          <span className="category-text">Nightlife</span>
        </div>
        <div className="category-box">
          <span className="category-text">Shopping</span>
        </div>
    
      </div>
      <div className = "big-box"></div>

      
  
    </div>
  );
}

export default CategoriesPage;