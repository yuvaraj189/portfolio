import React, { useEffect, useState } from "react";

const BlobCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setIsPressed(true);
    const handleMouseUp = () => setIsPressed(false);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  useEffect(() => {
    const interactiveElements = document.querySelectorAll("a, button, input");
    const hoverStart = () => setIsHovered(true);
    const hoverEnd = () => setIsHovered(false);

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", hoverStart);
      el.addEventListener("mouseleave", hoverEnd);
    });

    return () => {
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", hoverStart);
        el.removeEventListener("mouseleave", hoverEnd);
      });
    };
  }, []);

  return (
    <div
      className={`blob-cursor ${isHovered ? "hovered" : ""} ${
        isPressed ? "pressed" : ""
      }`}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    ></div>
  );
};

export default BlobCursor;
