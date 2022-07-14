// import React, { useState, useEffect } from "react";
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js";
//
// import CheckoutForm from "./checkout";
// import "../Payments/checkout.css"
//
// // Make sure to call loadStripe outside of a component’s render to avoid
// // recreating the Stripe object on every render.
// // This is your test publishable API key.
// const stripePromise = loadStripe("pk_test_51LAz4KC9WWOmeUQqQnjG12zdy2nfQtoTOTtTqfKI2n29aZzvrXfa5JSLkHvlzQ1M4M5PHiWA31eyTVog8hgllFRv00CUHckRs6");
//
// export default function PaymentMethod() {
//     const [clientSecret, setClientSecret] = useState("");
//
//     useEffect(() => {
//         let headers = new Headers();
//
//         headers.append('Content-Type', 'application/json');
//         headers.append('Accept', 'application/json');
//         headers.append('Origin','http://localhost:3000');
//
//         // Create PaymentIntent as soon as the page loads
//         fetch("http://localhost:8080/create-payment-intent", {
//             method: "POST",
//             headers: headers,
//             body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
//         })
//             .then((res) => res.json())
//             .then((data) => setClientSecret(data.clientSecret));
//     }, []);
//
//     const appearance = {
//         theme: 'stripe',
//     };
//     const options = {
//         clientSecret,
//         appearance,
//     };
//
//     return (
//         <div className="App">
//             {clientSecret && (
//                 <Elements options={options} stripe={stripePromise}>
//                     <CheckoutForm />
//                 </Elements>
//             )}
//         </div>
//     );
// }

import {Card} from "react-bootstrap";
import {Heading} from "../Heading/Heading";
import Swal from "sweetalert2";

export default function PaymentMethod() {

    const payPalClick = () => {
        Swal.fire(
            'PayPal',
            'PayPal API integration with the backend will be added here',
            'info'
        );
    };

    const stripeClick = () => {
        Swal.fire(
            'Stripe',
            'Stripe API integration with the backend will be added here',
            'info'
        );
    };

    const razorPayClick = () => {
        Swal.fire(
            'RazorPay',
            'RazorPay API integration with the backend will be added here',
            'info'
        );
    };

    return (
        <div className="m-4">
            <div className="mb-4">
                <Heading>Add Payment Methods</Heading>
            </div>
            <Card className="p-4 mb-4 paypal-link" onClick={payPalClick}>PayPal</Card>
            <Card className="p-4 mb-4 stripe-link" onClick={stripeClick}>Stripe</Card>
            <Card className="p-4 razorpay-link" onClick={razorPayClick}>RazorPay</Card>
        </div>
    )
}