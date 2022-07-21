import { Heading } from "./Heading/Heading";
import Carousel from "react-bootstrap/Carousel";
import coupon from "../assets/home_assets/coupon.png";
import receipt from "../assets/home_assets/receipt.png";
import piechart from "../assets/home_assets/pie-chart.png";
import piggy from "../assets/home_assets/piggy-bank.png";

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
/**
 * Author:    Ayush Verma
 * Created:   15.07.2022
 *
 * (c) Copyright by Group 24.
 **/
export default function HomePage() {
  let images_home = [
    {
      title: "Discounts 💲",
      image: coupon,
    },
    {
      title: "Receipts 📝",
      image: receipt,
    },
    {
      title: "Charts 📈",
      image: piechart,
    },
    {
      title: "Savings 🐷",
      image: piggy,
    },
  ];
  return (
    <div className="container-home-page">
      <div style={{ textAlign: "center" }}>
        <h2>Application Features ✅</h2>
      </div>
      <br></br>

      <Row xs={1} md={4} className="g-10">
        {images_home.map((_, idx) => (
          <Col>
            <Card style={{ width: "15.6rem" }}>
              <Card.Img variant="top" src={_.image} responsive />
              <Card.Body>
                <Card.Title>{_.title}</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
