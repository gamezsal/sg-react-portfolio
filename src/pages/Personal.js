import React from "react";
import Card from "react-bootstrap/Card";
import Jumbotron from "react-bootstrap/Jumbotron";
import CardDeck from "react-bootstrap/CardDeck";
import Image1 from "../images/personal/fam1.jpg";
import Image2 from "../images/personal/fam2.jpg";
import Image3 from "../images/personal/fam3.jpg";
import Image4 from "../images/personal/fam4.jpg";
// import Row from "../components/Row";

function Personal() {
  return (
    <>
      <Jumbotron>
        <h1>Gamez Family Pics</h1>
        <p>
          My family enjoys traveling and seeing new places. We love the beach
          and the warm weather. We are super adventurous and love to explore new places.
        </p>
      </Jumbotron>

      <CardDeck>
        <Card>
          <Card.Img variant="top" src={Image1} />
          <Card.Body>
            <Card.Title>Waipio Bay, Hawaii </Card.Title>
            <Card.Text></Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted"></small>
          </Card.Footer>
        </Card>

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
      </CardDeck>
    </>
  );
}

export default Personal;
