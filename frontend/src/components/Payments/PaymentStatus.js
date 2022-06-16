import {Heading} from "../Heading/Heading";
import {Button, Card, Alert} from "react-bootstrap";
import Swal from "sweetalert2";
import ReactDOMServer from "react-dom/server";
import {routes} from "../../constants";
import {useHistory,useLocation, Link } from "react-router-dom";


export default function PaymentStatus() {
    const history = useHistory();
    const location = useLocation();
    const status = "success";
    
    function Success(props) {
        return(<div><Alert variant='success'>
        <Alert.Heading className='text-center'>Payment Successful!</Alert.Heading>
        <hr />
        <p className='text-center'>
          Your payment was successful!
        </p>
      </Alert>
      <Link to="/export-grid">
      <div class="d-flex justify-content-center">
      <button className="mt-2 ">
          Home
          </button>
          </div>
    </Link>
    </div>);
      }
      
      function Failure(props) {
        return(
            <div><Alert className='margin' variant='danger'>
        <Alert.Heading className='text-center'>Payment Failure</Alert.Heading>
        <hr />
        <p className='text-center'>
          Your payment didn't go through, please try again!
        </p>
      </Alert>
      <Link to="/initiate-payment">
      <div class="d-flex justify-content-center">
      <button className="mt-2">
          Home
          </button>
          </div>
    </Link>
    </div>);

      }

      function Message()
      {
        if (status=="success")
        {
            return <Success />;
        }
        else
    {
        return <Failure />;
    }
      }

      return(<Message/>);

    
}