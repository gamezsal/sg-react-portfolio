import React from "react";
import Card from "react-bootstrap/Card";
import { Row, Container, Col } from "../components/Grid";
import Jumbotron from "react-bootstrap/Jumbotron";
import CardDeck from "react-bootstrap/CardDeck";
import Image12 from "../images/personal/fam12.jpg";
import Image2 from "../images/personal/fam2.jpg";
import Image3 from "../images/personal/fam3.jpg";
import Image4 from "../images/personal/fam4.jpg";
import Contact from "../components/Contact";
import "./style.css";

function Personal() {
  return (
    <>
      <Jumbotron>
        <Container>
          <h1>Gamez Family Pics</h1>
          <p>
            My family enjoys traveling and seeing new places. We love the beach
            and the warm weather. We are super adventurous and love to explore
            new places.
          </p>
          <Row>
            <Contact />
          </Row>
        </Container>
      </Jumbotron>

      <Container>
        <CardDeck>
          <Row>
            <Col size="md-6">
              <Card>
                <Card.Img variant="top" src={Image12} />
                <Card.Body>
                  <Card.Title>Waipio Bay, Hawaii </Card.Title>
                  <Card.Text></Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted"></small>
                </Card.Footer>
              </Card>
            </Col>

            <Col size="md-6">
              <Card>
                <Card.Img variant="top" src={Image2} />
                <Card.Body>
                  <Card.Title>Chichen Itza, Mexico</Card.Title>
                  <Card.Text></Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted"></small>
                </Card.Footer>
              </Card>
            </Col>
          </Row>

         <Row>
           <Col size="md-6">
           </Col>
         </Row>

          <Row>
            <Col size="md-6">
          <Card>
            <Card.Img variant="top" src={Image3} />
            <Card.Body>
              <Card.Title>Horrocks Family</Card.Title>
              <Card.Text></Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted"></small>
            </Card.Footer>
          </Card>
          </Col>

          <Col size="md-6">
          <Card>
            <Card.Img variant="top" src={Image4} />
            <Card.Body>
              <Card.Title>Makaiwa Bay, Hawaii</Card.Title>
              <Card.Text></Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted"></small>
            </Card.Footer>
          </Card>
          </Col>
        </Row>
        </CardDeck>
      </Container>
    </>
  );
}

export default Personal;
