import express from 'express';
import {
  createGroup,
  deleteGroup,
  updateGroup,
  viewGroup,
  viewGroups,
} from '../controllers/group.js';
import { recordTransaction, viewTransactions } from '../controllers/payment.js';
import { createPaymentIntent } from '../controllers/payment-server.js';

const router = express.Router();

router.post('/create-group', createGroup);
router.put('/update-group/:id', updateGroup);
router.delete('/delete-group/:id', deleteGroup);
router.get('/view-groups', viewGroups);
router.get('/view-group/:id', viewGroup);
// router.post('/record-transaction', recordTransaction);
// router.get('/view-transaction/:id', viewTransactions);
router.post('/create-payment-intent', createPaymentIntent);

export { router };
