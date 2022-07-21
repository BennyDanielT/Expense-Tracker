/**
 * @author ${Benny Tharigopala}
 */

import React, {useEffect, useState} from 'react';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import {useLocation} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import CheckoutForm from './checkout';
import '../../css/checkout.css';
import Accordion from 'react-bootstrap/Accordion';
import Table from 'react-bootstrap/Table';

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
        headers.append('Origin', `${window.location.origin}`);

        let testv = JSON.stringify({amount: values.amount});
        console.log(testv);

        fetch('/api/create-payment-intent', {
            method: 'POST',
            headers: headers,
            // body: { amount: values.amount },
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
        <div
            className='App'
            style={{
                width: '50rem',
                'margin-left': '18%',
                'margin-bottom': '5%',
                color: 'white',
                'font-weight': 'bold',
            }}
        >
            <Accordion>
                <Accordion.Item eventKey='0'>
                    <Accordion.Header>View Transaction Details</Accordion.Header>
                    <Accordion.Body>
                        <Table striped bordered hover size='md' responsive>
                            <thead>
                            <tr>
                                <th>Payment For</th>
                                <th>Amount</th>
                                <th>Email</th>
                                <th>Payee Name</th>
                                <th>Notes</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>{values.payFor}</td>
                                <td>{values.amount}</td>
                                <td>{values.email}</td>
                                <td>
                                    {values.lastName}, {values.firstName}
                                </td>
                                <td>{values.notes}</td>
                            </tr>
                            </tbody>
                        </Table>
                        ; ;
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            {/* <div>Hey {JSON.stringify(values)}</div> */}

            <br></br>
            <div>
                <Card
                    style={{
                        width: '50rem',
                        padding: '10px',
                        color: 'white',
                        'font-weight': 'bold',
                    }}
                    border='success'
                >
                    {clientSecret && (
                        <Elements options={options} stripe={stripePromise}>
                            <CheckoutForm data={values}/>
                        </Elements>
                    )}
                </Card>
            </div>
        </div>
    );
}
