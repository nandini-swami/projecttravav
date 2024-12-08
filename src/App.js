
import './App.css';
import HomePage from './HomePage/HomePage'; 
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; 
import BookmarkPage from './BookmarkPage/BookmarkPage'; 
import MyTripsPage from './MyTripsPage/MyTripsPage'; 
import CategoriesPage from './CategoriesPage/CategoriesPage';

function App() {
  return (
    <Router>
    



    
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/bookmarkpage" element={<BookmarkPage />} />
        <Route path="/mytripspage" element={<MyTripsPage />} />
        <Route path="/homelocalfinds" element={<HomePage />} />
        <Route path="/categories" element={<CategoriesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
