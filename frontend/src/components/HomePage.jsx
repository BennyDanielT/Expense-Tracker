import { Heading } from "./Heading/Heading";
import Carousel from "react-bootstrap/Carousel";
import coupon from "../assets/home_assets/coupon.png";
import receipt from "../assets/home_assets/receipt.png";
import piechart from "../assets/home_assets/pie-chart.png";
import piggy from "../assets/home_assets/piggy-bank.png";
import clock from "../assets/home_assets/clock.png";

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
      description: "Find the best deals and coupons",
    },
    {
      title: "Receipts 📝",
      image: receipt,
      description: "Organise your virtual and physical receipts",
    },
    {
      title: "Charts 📈",
      image: piechart,
      description: "Visulize your expenses like never before",
    },
    {
      title: "Reminders 🕛",
      image: clock,
      description: "Reminding you to pay your bills on time",
    },
  ];
  return (
    <div className="container-home-page">
      <div style={{ textAlign: "center" }}>
        <h2>Expense Tracker ✅</h2>
        <p> Let's make every expense count</p>
      </div>
      <br></br>

      <Row xs={1} md={4} className="g-10">
        {images_home.map((_, idx) => (
          <Col>
            <Card style={{ width: "15.6rem" }}>
              <Card.Img variant="top" src={_.image} responsive />
              <Card.Body>
                <Card.Title>{_.title}</Card.Title>
                <Card.Text>{_.description}</Card.Text>
              </Card.Body>
            </Card>
            <br></br>
          </Col>
        ))}
      </Row>
    </div>
  );
}
