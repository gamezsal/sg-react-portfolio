import React from "react";
import ProfilePic from "../components/Profile";
import Contact from "../components/Contact";
import { Row, Container, Col } from "../components/Grid";
import Image from "../images/about/backgroundImage.jpg";
import "./style.css";

function About() {
  return (
    <div>
      <ProfilePic backgroundImage={Image}>
        <h1>Salvador Gamez</h1>
        <h2>Customer's are the HEROES</h2>
      </ProfilePic>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Welcome To My Page Everyone!</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>“None of us are as smart as all of us” Dr. Ken Blanchard</p>
            <p>
              My name is Sal, I'm a customer advocate who enjoys solving complex
              problems and I love learning new things hence why I decided to take
              on a Full Stack Develop BootCamp with the University of Utah. I have
              several years experience in agile development, experience working
              with engineering teams building and releasing great products to
              the market. Certifications in SAFe Agile practices as a Product
              Manager as well as a Certified Scrum Product Owner (CSPO). Have
              led multiple engineering teams acting as the voice of the
              customers within the Software Development Life Cycle process.
              Familiar with conducting Sprint Planning meeting’s, Sprint
              Review’s, Sprint Retrospective’s, and Sprint Demos. A person that
              can translate business needs into actionable stories that can be
              worked on by the engineering team.
            </p>
            <p>
              On a personal note, I'm family man and a strong believer of a
              work/life balance. God and Family play a vital role in my life. Do
              you know of any available opportunities to work in development?”
              Hit me up! I'm looking for my next opportunity.
            </p>
            <Row>
              <Contact />
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
