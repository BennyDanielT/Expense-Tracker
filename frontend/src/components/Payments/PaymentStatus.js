import {Alert} from "react-bootstrap";
import {routes} from "../../constants";
import {Link, useHistory, useLocation} from "react-router-dom";


export default function PaymentStatus() {
    const history = useHistory();
    const location = useLocation();
    const status = "success";

    function Success(props) {
        return (<div className="p-4"><Alert variant='success'>
            <Alert.Heading className='text-center'>Payment Successful!</Alert.Heading>
            <hr/>
            <p className='text-center'>
                Your payment was successful!
            </p>
        </Alert>
            <Link to={routes.initiatePayment.path}>
                <div class="d-flex justify-content-center">
                    <button className="mt-2 ">
                        Home
                    </button>
                </div>
            </Link>
        </div>);
    }

    function Failure(props) {
        return (
            <div className="p-4"><Alert className='margin' variant='danger'>
                <Alert.Heading className='text-center'>Payment Failure</Alert.Heading>
                <hr/>
                <p className='text-center'>
                    Your payment didn't go through, please try again!
                </p>
            </Alert>
                <Link to={routes.initiatePayment.path}>
                    <div class="d-flex justify-content-center">
                        <button className="mt-2">
                            Home
                        </button>
                    </div>
                </Link>
            </div>);

    }

    function Message() {
        return (
            <div>
                <Success/>
                <Failure/>
            </div>
        )
        // if (status == "success") {
        //     return <Success/>;
        // } else {
        //     return <Failure/>;
        // }
    }

    return (<Message/>);


}