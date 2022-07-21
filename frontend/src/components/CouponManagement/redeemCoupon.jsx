import Header from "./Helpers/header";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

import Footer from "./Helpers/footer";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Menu from "./Helpers/menu";
import Meta from "./Helpers/meta";
import "../../css/coupon.css";
import { supabase } from "../../supabase";

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
  let { id } = useParams();
  if (id == "") {
    id = 3;
  }

  console.log(id);
  const [review, setReview] = React.useState(null);

  React.useEffect(() => {
    fetch(`/api/get-reviews/${id}`)
      .then((results) => results.json())
      .then((data) => {
        setReview(data);
      });
  }, []); // <-- Have to pass in [] here!
  function sayHello() {
    Swal.fire({
      title: "Do you want to redeem the coupon?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Redeem",
      denyButtonText: `Don't Redeem`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Yay!Redeemed", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Go for it! Click redeem", "", "info");
      }
    });
    var data = JSON.stringify({
      merchant: id,
      user: supabase.auth.user().email,
    });

    var config = {
      method: "post",
      url: "/api/add-coupon-redeemption",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  // page content
  const pageTitle = "Awesome! Redeem the coupon below.";
  const names = ["Ayush", "Abhishek", "Vatsal", "Danny", "Devarshi", "Smit"];
  const random_name = Math.floor(
    Math.random() *
      ["Ayush", "Abhishek", "Vatsal", "Danny", "Devarshi", "Smit"].length
  );
  const [coupons, setCoupons] = useState([]);
  const [reviews, setReviews] = useState([]);
  let pageDescription = "";
  const fetchData = async () => {
    const response = await fetch("/api/get-coupon/" + id);
    const data = await response.json();
    const response_ = await fetch("/api/get-reviews/" + id);
    const data_ = await response_.json();
    console.log(data);
    console.log(data_);
    setReviews(data_);
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
        people has ordered from this organisation in last{" "}
        {Math.floor(Math.random() * 90)} minutes. Hurry up 🍕
      </Alert>
      <div className="Container">
        <Row xs={1} md={2} className="g-4">
          {reviews.map((_, idx) => (
            <Col>
              <Card>
                <Card.Header>Review # {idx}</Card.Header>
                <Card.Body>
                  <blockquote className="blockquote mb-0">
                    <p> {_.review} </p>
                    <footer className="blockquote-footer">
                      <cite title="Source Title">{_.reviewer_name}</cite>
                    </footer>
                  </blockquote>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <br></br>
      </div>
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
            onClick={sayHello}
          >
            <Link to={`/coupon-redeemed/${id}`}>Redeem</Link>
          </Button>
        </div>
      </div>
      <br></br>
    </Container>
  );
};

export { ReedemCoupon };
