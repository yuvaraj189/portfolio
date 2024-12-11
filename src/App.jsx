import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import "./App.css"; // Import Tailwind styles and custom CSS if required.

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-black text-white relative">
        {/* Background Video (Using Vimeo) */}
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <iframe
            src="https://player.vimeo.com/video/395865408?background=1&autoplay=1&loop=1&muted=1"
            frameborder="0"
            allow="autoplay; fullscreen"
            className="w-full h-full object-cover"
          ></iframe>
        </div>

        {/* Content Wrapper */}
        <div className="relative z-10">
          {/* Navbar */}
          <Navbar />
          
          {/* Routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* Add other routes here */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
