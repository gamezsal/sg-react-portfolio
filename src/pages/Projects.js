import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Jumbotron from "react-bootstrap/Jumbotron";
import Project1 from "../images/projects/WeatherDashboard.jpg";
import Project2 from "../images/projects/scheduler.jpg";
import Project3 from "../images/projects/passwordgenerator.jpg";
import Project4 from "../images/projects/notetaker.JPG";
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'




function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <Jumbotron>
        <h1>Full Stack Projects</h1>
        <p>
          All projects display the use of several coding languages for example: NodeJS, JavaScript, HTML, CSS, React, SQL, MongoDb. Feel to take a look at some of my projects. Click below to see the live demo.   
        </p>
      </Jumbotron>
    <Carousel activeIndex={index} onSelect={handleSelect}>

      <Carousel.Item>
        <Image 
        className="d-block w-100" 
        src= {Project1} 
        alt="WeatherDashboard"
         />
        <Carousel.Caption>
          <h3 style={{color: "Blue"}}>Weather Dashboard Demo</h3>
          <Button variant="outline-primary" style={{color: "Blue"}} href="https://gamezsal.github.io/06WeatherDashboard/" target="_blank">Click</Button>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <Image
          className="d-block w-100"
          src={Project2}
          alt="WorkDay Scheduler"
        />
        <Carousel.Caption>
          <h3 style={{color: "Blue"}}>WorkDay Scheduler Demo</h3>
          <Button variant="outline-primary" style={{color: "Blue"}} href="https://gamezsal.github.io/05-Third-Party-APIs-Work-Day-Scheduler/" target="_blank">Click</Button>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <Image
          className="d-block w-100"
          src={Project3}
          alt="Password Generator"
        />
        <Carousel.Caption>
          <h3 style={{color: "Blue"}}>Password Generator Demo</h3>
          <Button variant="outline-primary" style={{color: "Blue"}} href="https://gamezsal.github.io/03-PasswordGenerator/" target="_blank">Click</Button>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <Image 
        className="d-block w-100" 
        src={Project4} 
        alt="Note Taker" />
        <Carousel.Caption>
          <h3 style={{color: "Blue"}}>Note Taker Demo</h3>
          <Button variant="outline-primary" style={{color: "Blue"}} href="https://immense-mesa-82456.herokuapp.com/"target="_blank">Click</Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  );
}



export default ControlledCarousel;
