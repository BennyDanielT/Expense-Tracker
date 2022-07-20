import Header from "./Helpers/header";
import Meta from "./Helpers/meta";
import { Button, ButtonGroup, Card, Container } from "react-bootstrap";
import { stockData } from "./data/sample-data";
import { Link } from "react-router-dom";
import { routes } from "../../constants";
import axios from "axios";
import React, { useEffect, useState } from "react";

const ViewCoupons = () => {
  const [coupons, setCoupons] = useState([]);
  let pageDescription = "";
  const fetchData = async () => {
    var config = {
      method: "get",
      url: "/api/get-coupons",
      headers: {},
    };

    axios(config)
      .then(function (response) {
        setCoupons(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
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
      <div className="stock-container">
        {coupons.map((data, key) => {
          return (
            <div className="Container" key={key}>
              <Card className="text-center">
                <Card.Header>Featured</Card.Header>
                <Card.Body>
                  <Card.Title>{data.coupon_code}</Card.Title>
                  <Card.Text>{data.coupon_description}</Card.Text>

                  <ButtonGroup
                    aria-label="Basic example"
                    className="white-anchor-tag"
                  >
                    <Button variant="success">
                      <Link to={`/redeem-coupon/${data.id}`}>Show Details</Link>
                    </Button>
                    <Button variant="primary">
                      <a href={data.coupon_website} target="_blank">
                        Visit Website
                      </a>
                    </Button>
                  </ButtonGroup>
                </Card.Body>
                <Card.Footer className="text-muted">
                  Expiring on : {data.coupon_expiry}
                </Card.Footer>
              </Card>
              <br></br>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export { ViewCoupons };
