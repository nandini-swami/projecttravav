
import './App.css';
import HomePage from './HomePage/HomePage'; // Import HomePage
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Import routing components
import BookmarkPage from './BookmarkPage/BookmarkPage'; // Assuming you have a BookmarkPage component
import MyTripsPage from './MyTripsPage/MyTripsPage'; // Assuming you have a MyTripsPage component

function App() {
  return (
    <Router>
    

{/* Define Routes */}

    
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/bookmarkpage" element={<BookmarkPage />} />
        <Route path="/mytripspage" element={<MyTripsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
