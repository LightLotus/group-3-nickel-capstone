import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

const CarouselSlider = () => {
  const heroImages = [
    "https://images.unsplash.com/photo-1568393691622-c7ba131d63b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9nJTIwdHJhaW5pbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
    "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBldCUyMHRyYWluaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    "https://images.unsplash.com/photo-1546815708-410983510897?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZG9nJTIwdHJhaW5pbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
  ];

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="carousel-img d-block w-100"
          src="https://images.unsplash.com/photo-1568393691622-c7ba131d63b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9nJTIwdHJhaW5pbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel-img d-block w-100"
          src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBldCUyMHRyYWluaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel-img d-block w-100"
          src="https://images.unsplash.com/photo-1546815708-410983510897?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZG9nJTIwdHJhaW5pbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselSlider;
