import Header from "./Helpers/header";
import Footer from "./Helpers/footer";
import Menu from "./Helpers/menu";
import Meta from "./Helpers/meta";
import {
  Container,
  Row,
  Card,
  Col,
  Placeholder,
  Button,
} from "react-bootstrap";

function ViewCoupons() {
  // page content
  const pageTitle = "Hurray! You've free coupons to redeem 🎉";
  const pageDescription = ". ";

  return (
    <Container>
      <div>
        <Meta title={pageTitle} />
        <Header head={pageTitle} description={pageDescription} />
      </div>
      <Row xs={1} md={2} className="g-4">
        {Array.from({ length: 4 }).map((_, idx) => (
          <Col>
            <Card>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export { ViewCoupons };
