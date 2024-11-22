import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import "./App.css";

export default function App() {
  const imagesRef = useRef(null); // Reference to the container of images
  const [currentIndex, setCurrentIndex] = useState(0); // Track current image index

  const images = [
    "https://via.placeholder.com/600x400?text=Image+1",
    "https://via.placeholder.com/600x400?text=Image+2",
    "https://via.placeholder.com/600x400?text=Image+3",
  ];

  useEffect(() => {
    gsap.set(imagesRef.current.children, {
      xPercent: (i) => i * 100, // Position each image side by side
    });
  }, []);

  const slideTo = (index) => {
    const newIndex = (index + images.length) % images.length;
    setCurrentIndex(newIndex);

    gsap.to(imagesRef.current, {
      xPercent: -newIndex * 100, // Move the container to show the selected image
      duration: 1,
      ease: "power2.inOut",
    });
  };

  const handleNext = () => slideTo(currentIndex + 1);
  const handlePrev = () => slideTo(currentIndex - 1);

  return (
    <div className="slider-container">
      <button className="nav-button" onClick={handlePrev}>
        {"<"}
      </button>
      <div className="slider-wrapper">
        <div className="slider-images" ref={imagesRef}>
          {images.map((image, index) => (
            <img key={index} src={image} alt={`Slide ${index + 1}`} />
          ))}
        </div>
      </div>
      <button className="nav-button" onClick={handleNext}>
        {">"}
      </button>
    </div>
  );
}
