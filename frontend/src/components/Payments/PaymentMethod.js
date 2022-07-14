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
  console.log(values);

  useEffect(() => {
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Origin', 'http://localhost:3000');

    fetch('http://localhost:8080/create-payment-intent', {
      method: 'POST',
      headers: headers,
      body: { amount: values.amount },
      // body: JSON.stringify({ amount: values.amount }),
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
