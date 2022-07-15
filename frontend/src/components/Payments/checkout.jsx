import React, { useEffect, useState } from 'react';
import {
  PaymentElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import Swal from 'sweetalert2';

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  let redirectURL = '';

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      'payment_intent_client_secret',
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case 'succeeded':
          setMessage('Payment succeeded!');
          redirectURL = 'http://localhost:3000/payment-status/success';
          break;
        case 'processing':
          setMessage('Your payment is processing.');
          break;
        case 'requires_payment_method':
          setMessage('Your payment was not successful, please try again.');
          redirectURL = 'http://localhost:3000/payment-status/failure';
          break;
        default:
          setMessage('Something went wrong.');
          redirectURL = 'http://localhost:3000/payment-status/failure';
          break;
      }
    });
  }, [stripe]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Swal.fire('Initiated!', 'Your payment has been initiated', 'success');
    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: redirectURL,
        // cancel_url: 'http://localhost:3000/',
        // return_url: 'http://localhost:3000/payment-history',
      },
    });

    if (error.type === 'card_error' || error.type === 'validation_error') {
      setMessage(error.message);
    } else {
      setMessage('An unexpected error occurred.');
    }

    setIsLoading(false);
    console.log(message);
  };

  return (
    <form id='payment-form' onSubmit={handleSubmit}>
      <PaymentElement id='payment-element' />
      <button disabled={isLoading || !stripe || !elements} id='submit'>
        <span id='button-text'>
          {isLoading ? <div className='spinner' id='spinner'></div> : 'Pay now'}
        </span>
      </button>
      {/* Show any error or success messages */}
      {message && <div id='payment-message'>{message}</div>}
    </form>
  );
}
