import { Card, Row, Col, Button } from "react-bootstrap";
import ReceiptImg from "../../assets/receipt.jpg";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

function ViewReceiptDetails() {
  const history = useHistory();
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
          md={6}
          lg={6}
          className="d-flex justify-content-xs-start justify-content-sm-start justify-content-md-end justify-content-lg-end"
        >
          <Card style={{ width: "20rem", height: "200px" }}>
            <Card.Body>
              <Card.Title>Lorem Ipsum</Card.Title>
              <Card.Text>Creation Date: June 16th 2022</Card.Text>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-between">
              <Button
                onClick={() => {
                  toast("OCR has begun. Expense will be added soon.");
                  setTimeout(() => {
                    history.push("/view-receipts");
                  }, 5000);
                }}
              >
                Extract Details
              </Button>
              <Button
                className="btn-danger"
                onClick={() => {
                  toast.error("Receipt deleted. Redirecting...");
                  setTimeout(() => {
                    history.push("/view-receipts");
                  }, 2000);
                }}
              >
                <i className="fas fa-trash"></i>
              </Button>
            </Card.Footer>
          </Card>
        </Col>
        <Col xs={12} sm={12} md={6} lg={6}>
          <Card style={{ width: "20rem" }}>
            <Card.Img variant="top" src={ReceiptImg} />
          </Card>
        </Col>
      </Row>
    </>
  );
}

export { ViewReceiptDetails };
