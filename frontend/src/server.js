// const express = require('express');
// const path = require('path');
// const app = express();
// app.use(express.json());

// const stripe = require('stripe')(
//   'sk_test_51L5xY5GQAnXJ0JEKipyVcR2IyoP5ECqTXhyRcSgxkGSiCunc3UFK2mtehvGpYtpCYnI57zf9S6ki82t36hyadpaT00q04YVOCW',
// );
// const cors = require('cors');

// const corsOptions = {
//   allowedHeaders: ['Origin', 'Content-Type', 'Accept', 'Authorization'],

//   origin: '*',

//   methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',

//   preflightContinue: false,
// };
// app.use(cors(corsOptions));
// app.use(express.static(__dirname + '/build'));
// app.get('/*', function (req, res) {
//   res.sendFile(path.join(__dirname + '/build/index.html')); //
// });

// app.post('/create-payment-intent', async (req, res) => {
//   const items = req.body;
//   console.log(items);
//   // let payee = items.lastName + ',' + items.firstName;
//   let amount = items.amount;
//   // let timestamp = new Date().toUTCString();
//   // let userid = '4e8eea9b-2526-41e6-ad70-469e14b6d9a7';
//   console.log(amount);

//   // Create a PaymentIntent with the order amount and currency
//   const paymentIntent = await stripe.paymentIntents.create({
//     amount: items.amount * 100,
//     description: items.payFor,
//     receipt_email: items.email,
//     currency: 'cad',
//     automatic_payment_methods: {
//       enabled: true,
//     },
//   });

//   res.send({
//     clientSecret: paymentIntent.client_secret,
//   });

// });

// app.listen(process.env.PORT || 3001, () => {
//   console.log('The Server is listening on port 3001');
// });
