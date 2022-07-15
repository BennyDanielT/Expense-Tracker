import Header from "./Helpers/header";
import Footer from "./Helpers/footer";
import Menu from "./Helpers/menu";
import Meta from "./Helpers/meta";
import "../../css/coupon.css";
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
import {stockData} from "./data/sample-data";
import {Link} from "react-router-dom";
import {routes} from "../../constants";

function ReedemCoupon() {
    // page content
    const pageTitle = "Awesome! Redeem the coupon below.";
    const pageDescription = ". ";
    const names = ["Ayush", "Abhishek", "Vatsal", "Danny", "Devarshi", "Smit"];
    const random_name = Math.floor(
        Math.random() *
        ["Ayush", "Abhishek", "Vatsal", "Danny", "Devarshi", "Smit"].length
    );

    return (
        <Container>
            <div>
                <Meta />
                <Header description={pageDescription}/>
            </div>
            <Carousel variant="dark">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://fakeimg.pl/800x400/"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://fakeimg.pl/800x400/"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://fakeimg.pl/800x400/"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
            <br></br>
            <Alert key={"success"} variant={"success"}>
                Good choice, {names[random_name]}. {Math.floor(Math.random() * 20)}{" "}
                people has ordered from Pizza Pizza in last{" "}
                {Math.floor(Math.random() * 90)} minutes. Hurry up 🍕
            </Alert>
            <div className="Container">
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Terms and Conditions</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat
                            nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                            sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Privacy Policy</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat
                            nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                            sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <br></br>
                <div className="d-grid gap-2">
                    <Button variant="primary" size="lg" href="coupon-redeemed" className="white-anchor-tag">
                            <Link to={routes.couponRedeemed.path}>
                                Redeem
                            </Link>
                    </Button>
                </div>
            </div>
            <br></br>
        </Container>
    );
}

export {ReedemCoupon};
