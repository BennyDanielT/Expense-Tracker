import { useEffect, useState } from "react";
import { Card, Row, Col } from "react-bootstrap";
import "../receipts/receipts.css";

function ViewReceipts() {
  return (
    <Row className="m-5">
      <h2>Receipts</h2>
      {Array(20)
        .fill(5)
        .map((_, index) => {
          return (
            <Col xs={12} sm={6} md={4} lg={3} className="my-2" key={index}>
              <Card>
                <Card.Img
                  variant="top"
                  src={`https://source.unsplash.com/random/?bill&${index}`}
                  height="250px"
                  width="250px"
                />
                <Card.Body>
                  <Card.Text>lorem ipsum</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
    </Row>
  );
}

export { ViewReceipts };

// https://www.npmjs.com/package/react-grid-gallery
