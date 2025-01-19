import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from "./Home/Home";


const App = () => {
  return (
      <Router>
        <Routes>
          {/* Define routes and corresponding components */}
          <Route path="/" element={<Home />} />
          {/* Fallback route for unmatched paths */}
          {/*<Route path="*" element={<NotFound />} />*/}
        </Routes>
      </Router>
  );
};

export default App;
