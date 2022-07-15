import Header from "./Helpers/header";
import React, { useEffect, useState } from "react";
import Footer from "./Helpers/footer";
import Menu from "./Helpers/menu";
import Meta from "./Helpers/meta";
import "../../css/coupon.css";
import {
  Container,
  Row,
  Alert,
  Carousel,
  Col,
  Placeholder,
  Button,
  ButtonGroup,
  Accordion,
} from "react-bootstrap";
import { stockData } from "./data/sample-data";
import { Link } from "react-router-dom";
import { routes } from "../../constants";

const ReedemCoupon = () => {
  // page content
  const pageTitle = "Awesome! Redeem the coupon below.";
  const names = ["Ayush", "Abhishek", "Vatsal", "Danny", "Devarshi", "Smit"];
  const random_name = Math.floor(
    Math.random() *
      ["Ayush", "Abhishek", "Vatsal", "Danny", "Devarshi", "Smit"].length
  );
  const [coupons, setCoupons] = useState([]);
  let pageDescription = "";
  const fetchData = async () => {
    const response = await fetch("http://localhost:3001/api/get-coupon/1");
    const data = await response.json();
    console.log(data[0].id);
    setCoupons(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
      <div>
        <Meta />
        <Header description={pageDescription} />
      </div>
      <h2> Welcome to coupon redeemtion. </h2>

      <br></br>
      <Alert key={"success"} variant={"success"}>
        Good choice, {names[random_name]}. {Math.floor(Math.random() * 20)}{" "}
        people has ordered from Pizza Pizza in last{" "}
        {Math.floor(Math.random() * 90)} minutes. Hurry up 🍕
      </Alert>
      <div className="Container">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Terms and Conditions</Accordion.Header>
            <Accordion.Body>
              Users under 18 must have their guardian or parents’ permission to
              use the service.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Privacy Policy</Accordion.Header>
            <Accordion.Body>
              Users under 18 must have their guardian or parents’ permission to
              use the service.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <br></br>
        <div className="d-grid gap-2">
          <Button
            variant="primary"
            size="lg"
            href="coupon-redeemed"
            className="white-anchor-tag"
          >
            <Link to={routes.couponRedeemed.path}>Redeem</Link>
          </Button>
        </div>
      </div>
      <br></br>
    </Container>
  );
};

export { ReedemCoupon };
