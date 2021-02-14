import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Project1 from "../images/projects/WeatherDashboard.jpg";
import Project2 from "../images/projects/scheduler.jpg";
import Project3 from "../images/projects/passwordgenerator.jpg";
import Project4 from "../images/projects/notetaker.JPG";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img className="d-block w-100" 
        src={Project1}
        alt="WeatherDashboard" />
        <Carousel.Caption>
          <h3>WeatherDashboard</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Project2}
          alt="WorkDay Scheduler"
        />

        <Carousel.Caption>
          <h3>WorkDay Scheduler</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Project3}
          alt="Password Generator"
        />

        <Carousel.Caption>
          <h3>Password Generator</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={Project4} alt="Note Taker" />

        <Carousel.Caption>
          <h3>Note Taker</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

// render(<ControlledCarousel />);

export default ControlledCarousel;
