import { Card, Row, Col } from "react-bootstrap";
import ReceiptImg from "../../assets/receipt.jpg";

function ViewReceiptDetails() {
  return (
    <>
      <Row className="mb-5">
        <Col className="d-flex justify-content-center">
          <h2>View Receipt</h2>
        </Col>
      </Row>
      <Row>
        <Col
          xs={12}
          sm={12}
          md={12}
          lg={6}
          className="d-flex justify-content-end"
        >
          <Card style={{ width: "20rem", height: "200px" }}>
            <Card.Body>
              <Card.Title>Lorem Ipsum</Card.Title>
              <Card.Text>Creation Date: June 16th 2022</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={12} md={12} lg={6}>
          <Card style={{ width: "20rem" }}>
            <Card.Img variant="top" src={ReceiptImg} />
          </Card>
        </Col>
      </Row>
    </>
  );
}

export { ViewReceiptDetails };
