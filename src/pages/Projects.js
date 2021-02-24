import React, { useState } from "react";
import { Row } from "../components/Grid"
import Contact from "../components/Contact";
import Carousel from "react-bootstrap/Carousel";
import Jumbotron from "react-bootstrap/Jumbotron";
import Project1 from "../images/projects/WeatherDashboard.jpg";
import Project2 from "../images/projects/scheduler.jpg";
import Project3 from "../images/projects/passwordgenerator.jpg";
import Project4 from "../images/projects/notetaker.JPG";
import Project5 from "../images/projects/fitnesstracker.jpg";
import Project6 from "../images/projects/budgettracker.jpg";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import "./style.css"

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
  
      <Jumbotron>
      <div>
        <h1>
          Full Stack Projects
        </h1>
        <p>
          All projects display the use of several coding languages for example:
          NodeJS, JavaScript, HTML, CSS, React, SQL, MongoDB. Feel to take a
          look at some of my projects and reach out with any questions. Click below to see the live demo!
        </p>  
      </div>
        <Row>
          <Contact/>
        </Row>
      </Jumbotron>
     
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <Image
            className="d-block w-100"
            src={Project1}
            alt="WeatherDashboard"
          />
          <Carousel.Caption>
            <h3>Weather Dashboard Demo</h3>
            <Button
              variant="outline-dark"
              href="https://gamezsal.github.io/06WeatherDashboard/"
              target="_blank"
            >
              Click
            </Button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <Image
            className="d-block w-100"
            src={Project2}
            alt="WorkDay Scheduler"
          />
          <Carousel.Caption>
            <h3>WorkDay Scheduler Demo</h3>
            <Button
              variant="outline-dark"
              href="https://gamezsal.github.io/05-Third-Party-APIs-Work-Day-Scheduler/"
              target="_blank"
            >
              Click
            </Button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <Image
            className="d-block w-100"
            src={Project3}
            alt="Password Generator"
          />
          <Carousel.Caption>
            <h3>Password Generator Demo</h3>
            <Button
              variant="outline-dark"
              href="https://gamezsal.github.io/03-PasswordGenerator/"
              target="_blank"
            >
              Click
            </Button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <Image className="d-block w-100" src={Project4} alt="Note Taker" />
          <Carousel.Caption>
            <h3>Note Taker Demo</h3>
            <Button
              variant="outline-dark"
              href="https://immense-mesa-82456.herokuapp.com/"
              target="_blank"
            >
              Click
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        
        <Carousel.Item>
          <Image className="d-block w-100" src={Project5} alt="Fitness Tracker" />
          <Carousel.Caption>
            <h3>Fitness Tracker Demo</h3>
            <Button
              variant="outline-dark"
              href="https://protected-beach-69661.herokuapp.com/"
              target="_blank"
            >
              Click
            </Button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <Image className="d-block w-100" src={Project6} alt="Budget Tracker" />
          <Carousel.Caption>
            <h3>Budget Tracker Demo</h3>
            <Button
              variant="outline-dark"
              href="https://salty-cove-28019.herokuapp.com/"
              target="_blank"
            >
              Click
            </Button>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>

      
    </>
  );
}

export default ControlledCarousel;
