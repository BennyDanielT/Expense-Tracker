import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Swal from 'sweetalert2';
import { useLocation } from 'react-router-dom';

import CheckoutForm from './checkout';
import '../Payments/checkout.css';
// import { useNavigate, useParams } from 'react-router-dom';

const stripePromise = loadStripe(
  'pk_test_51L5xY5GQAnXJ0JEKXPUu5ix3fyr3yZSsoi1DzUC0yxLnRshdCxJhwiJHAxkYElNZWwxcyEfWxelHpu6hGygx1zHF00GVfHW80o',
);

export default function PaymentMethod() {
  const [clientSecret, setClientSecret] = useState('');

  const values = useLocation().state.values;
  // let { amount } = useParams();

  // const values = this.props.location.state;
  console.log(values);

  useEffect(() => {
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Origin', 'http://localhost:3000');

    fetch('http://localhost:8080/create-payment-intent', {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({
        payFor: values.payFor,
        amount: values.amount,
        email: values.email,
        firstName: values.firstName,
        lastName: values.lastName,
        notes: values.notes,
      }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className='App'>
      <div>Hey {JSON.stringify(values)}</div>
      <br></br>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
}

// import {Card} from "react-bootstrap";
// import {Heading} from "../Heading/Heading";
// import Swal from "sweetalert2";

// export default function PaymentMethod() {

//     const payPalClick = () => {
//         Swal.fire(
//             'PayPal',
//             'PayPal API integration with the backend will be added here',
//             'info'
//         );
//     };

//     const stripeClick = () => {
//         Swal.fire(
//             'Stripe',
//             'Stripe API integration with the backend will be added here',
//             'info'
//         );
//     };

//     const razorPayClick = () => {
//         Swal.fire(
//             'RazorPay',
//             'RazorPay API integration with the backend will be added here',
//             'info'
//         );
//     };

//     return (
//         <div className="m-4">
//             <div className="mb-4">
//                 <Heading>Add Payment Methods</Heading>
//             </div>
//             <Card className="p-4 mb-4 paypal-link" onClick={payPalClick}>PayPal</Card>
//             <Card className="p-4 mb-4 stripe-link" onClick={stripeClick}>Stripe</Card>
//             <Card className="p-4 razorpay-link" onClick={razorPayClick}>RazorPay</Card>
//         </div>
//     )
// }
