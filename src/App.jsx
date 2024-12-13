import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

import BlobCursor from "./components/BlobCursor";

import "./App.css"; // Import Tailwind styles and custom CSS if required.

const App = () => {
  return (
    <Router>
      <BlobCursor />
      
      <div className="flex flex-col min-h-screen bg-black text-white relative">
        {/* Content Wrapper */}
        <div className="relative z-10">
          {/* Navbar */}
          <Navbar />
         
          {/* Routes */}
          <Routes>
            <Route path="/" element={<Home />} />
         
            {/* Add other routes here */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
