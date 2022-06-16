import Header from "./Helpers/header";
import Meta from "./Helpers/meta";
import {Button, ButtonGroup, Card, Container,} from "react-bootstrap";
import {stockData} from "./data/sample-data";

function ViewCoupons() {
    // page content
    const pageDescription = ". ";

    return (
        <Container>
            <div>
                <Meta />
                <Header description={pageDescription}/>
            </div>
            <div className="stock-container">
                {stockData.map((data, key) => {
                    return (
                        <div className="Container" key={key}>
                            <Card className="text-center">
                                <Card.Header>Featured</Card.Header>
                                <Card.Body>
                                    <Card.Title>{data.company}</Card.Title>
                                    <Card.Text>{data.description}</Card.Text>

                                    <ButtonGroup aria-label="Basic example">
                                        <Button href="redeem-coupon" variant="success">
                                            Show Details
                                        </Button>
                                        <Button href={data.website} variant="primary">
                                            Visit Website
                                        </Button>
                                    </ButtonGroup>
                                </Card.Body>
                                <Card.Footer className="text-muted">
                                    Expiring on : {data.expiring_on}
                                </Card.Footer>
                            </Card>
                            <br></br>
                        </div>
                    );
                })}
            </div>
        </Container>
    );
}

export {ViewCoupons};
