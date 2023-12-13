/* eslint-disable react/prop-types */
// src/Carousel.js
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Carrossel = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel-container relative">
      <img
        src={images[currentImage]}
        alt={`Slide ${currentImage}`}
        className="w-full"
      />
      <button
        onClick={prevImage}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white p-2 bg-black"
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={nextImage}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white p-2 bg-black"
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default Carrossel;
