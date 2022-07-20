import Header from "./Helpers/header";
import React, { useEffect, useState } from "react";

import Meta from "./Helpers/meta";
import { Container, Card, Table } from "react-bootstrap";
import "../../css/coupon.css";
import { useParams } from "react-router-dom";
import {
  Row,
  Alert,
  Carousel,
  Col,
  Placeholder,
  Button,
  ButtonGroup,
  Accordion,
} from "react-bootstrap";
function CouponRedeemed() {
  let { id } = useParams();
  const [locations, setLocation] = useState([]);
  const fetchData = async () => {
    fetch("http://localhost:3001/api/get-location/" + id)
      .then((results) => results.json())
      .then((data) => {
        setLocation(data);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  const pageDescription = ". ";

  return (
    <div className="redeemed-ok">
      <Container>
        <div>
          <Meta />
          <Header description={pageDescription} />
        </div>

        <div class="vh-10 d-flex justify-content-center ">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Merchant</th>
                <th>Address</th>
                <th>Coupon</th>
              </tr>
            </thead>
            <tbody>
              {locations.map((_, idx) => (
                <tr>
                  <td>{idx}</td>
                  <td>{_.merchant_name}</td>
                  <td>{_.address}</td>
                  <td>Subway-{Math.random().toString(36).slice(2, 7)}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Container>
      <Container>
        <div class="vh-10 d-flex justify-content-center ">
          <h4>
            {" "}
            <small class="text-muted">Follow the map for amazing bacons</small>
          </h4>
        </div>
      </Container>
      <Container>
        <div class="vh-10 d-flex justify-content-center ">
          <br></br>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d90835.04760642834!2d-63.63289745000001!3d44.64618905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b5a211407dbfac1%3A0x666be3a6438b2ddc!2sHalifax%2C%20NS!5e0!3m2!1sen!2sca!4v1658266465910!5m2!1sen!2sca"
            width="600"
            height="450"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          />
        </div>
      </Container>
      <br></br>
    </div>
  );
}

export { CouponRedeemed };
