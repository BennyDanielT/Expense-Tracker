import Header from "./Helpers/header";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Meta from "./Helpers/meta";
import { Container, Card, Table } from "react-bootstrap";
import "../../css/coupon.css";

function CouponRedeemed() {
  let { id } = useParams();
  // page content
  const [locations, setLocation] = useState([]);
  const fetchData = async () => {
    var config = {
      method: "get",
      url: "/api/get-location/" + id,
      headers: {},
    };

    axios(config)
      .then(function (response) {
        setLocation(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
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
              {locations.map((_) => (
                <tr>
                  <td>{_.id}</td>
                  <td>{_.merchant_name}</td>
                  <td>{_.address}</td>
                  <td>
                    {_.merchant_name}-{Math.random().toString(36).slice(2, 7)}
                  </td>
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sPT%20Kulkul%20Teknologi%20Internasional!5e0!3m2!1sen!2sid!4v1601138221085!5m2!1sen!2sid"
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
