import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import NavBar from "../components/NavBar"; // Import the NavBar component
import "../CategoriesPage/CategoriesPage.css";
import giordanosImage from '../Giordanos.png';
import calumetImage from '../Calumet.png';
import ggImage from '../GG.png';
import alineaImage from '../alinea.png';
import orioleImage from '../oriole.png';
import four from '../four.png';
import five from '../five.png';


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
          <span className="category-text-food">Food</span>
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
      <div className = "big-box">
     
      <div className="big-box-content">

            <span className="big-box-title">Food</span>
            <div className="location-item">
              <div className="add-to-plan-bubble">Add to Plan</div>
              <div className="location-details">
                <span className="location-title-gio">Giordano's Pizza</span>
                <span className="location-description">Known for deep-dish pizza, this casual chain serves other classic Italian food. Famous delicious ingredients layered inside a handmade, double-crusted pie.</span>
                <img src={five} alt="five" className="star-image" />
              </div>
              <img src={giordanosImage} alt="Giordano's Pizza" className="location-image" />
            </div>
            <div className="location-item">
              <div className="add-to-plan-bubble">Add to Plan</div>
              <div className="location-details">
                <span className="location-title-cal">    Calumet Fisheries</span>
                <span className="location-description">Seafood shack serving house-smoked fish, fried seafood platters & a smattering of sides.</span>
                <img src={five} alt="five" className="star-image" />
              </div>
              <img src={calumetImage} alt="Calumet" className="location-image" />
            </div>

            <div className="location-item">
              <div className="add-to-plan-bubble">Add to Plan</div>
              <div className="location-details">
                <span className="location-title-al">Girl & The Goat</span>
                <span className="location-description">Hot spot where Stephanie Izard serves up innovative small plates from a dramatic open kitchen.</span>
                <img src={four} alt="four" className="star-image" />
              </div>
              <img src={ggImage} alt="Girl & The Goat" className="location-image" />
            </div>

            <div className="location-item">
              <div className="add-to-plan-bubble">Add to Plan</div>
              <div className="location-details">
                <span className="location-title-al"> Alinea</span>
                <span className="location-description">Chef Grant Achatz draws foodies with New American tasting menus featuring highly creative plates.</span>
                <img src={five} alt="five" className="star-image" />
              </div>
              <img src={alineaImage} alt="Alinea" className="location-image" />
              
            </div>

            <div className="location-item">
              <div className="add-to-plan-bubble">Add to Plan</div>
              <div className="location-details">
                <span className="location-title-al"> Oriole</span>
                <span className="location-description">Intimate, high-end kitchen serving an extended New American tasting menu in a stylish space.</span>
                <img src={four} alt="four" className="star-image" />
              </div>
              <img src={orioleImage} alt="Oriole" className="location-image" />
              
            </div>
            <div className="scroll-bar"></div>
            
          </div>
      
        </div>
      </div>
  );
}

export default CategoriesPage;