import React, { useEffect } from "react";

const Stars = () => {
  useEffect(() => {
    const starCount = 200; // Number of stars to create
    const starsContainer = document.getElementById("stars-container");

    // Create stars dynamically
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement("div");
      star.classList.add("star");
      star.style.position = "absolute";
      star.style.width = `${Math.random() * 2 + 1}px`; // Random width between 1px and 3px
      star.style.height = star.style.width; // Keep the stars as circles
      star.style.backgroundColor = "white";
      star.style.animation = `twinkle ${Math.random() * 2 + 1}s infinite`;

      // Random position for each star
      star.style.top = `${Math.random() * 100}vh`; // Random vertical position
      star.style.left = `${Math.random() * 100}vw`; // Random horizontal position

      // Append the star to the container
      starsContainer.appendChild(star);
    }
  }, []);

  return <div id="stars-container" className="fixed top-0 left-0 w-full h-full z-0"></div>;
};

export default Stars;
