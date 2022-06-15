import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51L5xY5GQAnXJ0JEKXPUu5ix3fyr3yZSsoi1DzUC0yxLnRshdCxJhwiJHAxkYElNZWwxcyEfWxelHpu6hGygx1zHF00GVfHW80o');

function App() {
  const options = {
    // passing the client secret obtained from the server
    clientSecret: '{{CLIENT_SECRET}}',
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm />
    </Elements>
  );
};