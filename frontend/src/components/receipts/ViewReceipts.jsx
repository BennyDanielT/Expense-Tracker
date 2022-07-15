import { useEffect, useState } from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "../../css/receipts.css";

function ViewReceipts() {
  const history = useHistory();
  return (
    <Row className="m-5">
      <div className="d-flex justify-content-between my-3">
        <h2>Receipts</h2>
        <Button
          onClick={() => {
            history.push("/add-new-receipt");
          }}
        >
          <i className="fas fa-plus"></i>
        </Button>
      </div>
      {Array(20)
        .fill(5)
        .map((_, index) => {
          return (
            <Col
              xs={12}
              sm={6}
              md={4}
              lg={3}
              className="my-2"
              key={index}
              onClick={() => {
                history.push("./view-receipt-details");
              }}
              style={{
                cursor: "pointer",
              }}
            >
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
