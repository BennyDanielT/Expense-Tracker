/**
 * @author ${Benny Tharigopala}
 */

import React, { useEffect, useState } from 'react';
import {
  PaymentElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import Swal from 'sweetalert2';
import { Link, useHistory } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js';

const SUPABASE_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtmeXhmd2NkZGlncXV6ZGNkdWl4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTc3MTc1NTAsImV4cCI6MTk3MzI5MzU1MH0.gQCSvtkF6PYgpDiepWPTqQkLjoAO-miKX4egXOkQiVU';

const SUPABASE_URL = 'https://kfyxfwcddigquzdcduix.supabase.co';

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export default function CheckoutForm(props) {
  const stripe = useStripe();
  const elements = useElements();

  let val = props.data;
  let transaction_status = '';

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  let redirectURL = 'http://localhost:3000/payment-status/success';
  let history = useHistory();

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
      transaction_status = paymentIntent.status;
      switch (paymentIntent.status) {
        case 'succeeded':
          setMessage('Payment succeeded!');
          // redirectURL = 'http://localhost:3000/payment-status/success';

          break;
        case 'processing':
          setMessage('Your payment is processing.');
          break;
        case 'requires_payment_method':
          setMessage('Your payment was not successful, please try again.');
          // redirectURL = 'http://localhost:3000/payment-status/failure';
          break;
        default:
          setMessage('Something went wrong.');
          // redirectURL = 'http://localhost:3000/payment-status/failure';
          break;
      }
    });
  }, [stripe]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Swal.fire('Initiated!', 'Your payment has been initiated', 'success');
    // Swal.fire({
    //         title: `Instance: ${snap.date}`,
    //         icon: 'question',
    //         html: `<div class="mb-3">${account}</div> ${amount}<div class="mt-3 mb-3">${title}</div>`,
    //         denyButtonText: "Delete Snapshot",
    //         showCloseButton: true,
    //         showDenyButton: true,
    //         showConfirmButton: false,
    //         showCancelButton:true,
    //         preDeny() {
    //             Swal.fire(
    //                 'Deleted!',
    //                 'Snapshot has been deleted.',
    //                 'success'
    //             );
    //         }
    //     })
    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

    const { data, err } = await supabase.from('transaction').insert([
      {
        payee: val.firstName + ',' + val.lastName,
        amount: val.amount,
        timestamp: new Date().toUTCString(),
        user_id: '4e8eea9b-2526-41e6-ad70-469e14b6d9a7',
      },
    ]);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: redirectURL,
      },
    });

    if (error.type === 'card_error' || error.type === 'validation_error') {
      setMessage(error.message);
      history.push({
        pathname: '/payment-status/failure',
      });
    } else {
      setMessage('An unexpected error occurred.');
      history.push({
        pathname: '/payment-status/failure',
      });
    }

    setIsLoading(false);
    console.log(message);
  };

  return (
    <form id='payment-form' onSubmit={handleSubmit}>
      <PaymentElement id='payment-element' />
      <button
        disabled={isLoading || !stripe || !elements}
        id='submit'
        className='stripe-button'
      >
        <span id='button-text'>
          {isLoading ? <div className='spinner' id='spinner'></div> : 'Pay now'}
        </span>
      </button>
      {/* Show any error or success messages */}
      {message && <div id='payment-message'>{message}</div>}
    </form>
  );
}
