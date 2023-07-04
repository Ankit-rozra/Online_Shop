import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Order from '../models/orderModel.js';
import User from '../models/userModel.js';
import Product from '../models/productModel.js';
import { isAuth, isAdmin, mailgun, payOrderEmailTemplate } from '../utils.js';
import { loadStripe } from '@stripe/stripe-js';

const stripe = await loadStripe(
  'sk_test_51MIyO4SHnIebK0L1mbodSId8hN4N5TB3o8vOCMyL1O4g3WuTpTY8oXjDseFqvXeJp3KRQSPgZ3zml1OyZi5SHHZm00ZblfI4Wn'
);
const paymentRouter = express.Router();

paymentRouter.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price: '{{PRICE_ID}}',
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `http://localhost:3000/`,
    cancel_url: `http://localhost:3000/`,
  });

  res.send({ sucess });
});

export default paymentRouter;

// const express = require('express');
// const app = express();
// const path = require('path');
// const stripe = require('stripe')(
//   ''
// );

// const paymentRouter = express.Router();

// paymentRouter.post('/payment', async (req, res) => {
//   const { product } = req.body;
//   const session = await stripe.checkout.sessions.create({
//     payment_method_types: ['card'],
//     line_items: [
//       {
//         price_data: {
//           currency: 'inr',
//           product_data: {
//             name: product.name,
//             images: [product.image],
//           },
//           unit_amount: product.amount * 100,
//         },
//         quantity: product.quantity,
//       },
//     ],
//     mode: 'payment',
//     success_url: `http://localhost:3000/`,
//     cancel_url: `http://localhost:3000/`,
//   });

//   res.json({ id: session.id });
// });

// export default paymentRouter;
