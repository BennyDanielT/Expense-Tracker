/**
 * @author ${Benny Tharigopala}
 */

import { Alert } from 'react-bootstrap';
import { Link, useHistory, useLocation, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { isSuccessfulResponse, routes, showPopup } from '../../constants';
import { recordTransaction } from '../../redux/actions';
import { useEffect, useState } from 'react';

export default function PaymentStatus() {
  const history = useHistory();
  const location = useLocation();
  let status = '';
  let params = useParams();
  status = params.status;

  function Success(props) {
    return (
      <div className='p-4'>
        <Alert variant='success'>
          <Alert.Heading className='text-center'>
            Payment Successful!
          </Alert.Heading>
          <hr />
          <p className='text-center'>Your payment was successful!</p>
        </Alert>
        <Link to={routes.initiatePayment.path}>
          <div className='d-flex justify-content-center'>
            <button className='mt-2 '>Make Another Payment</button>
          </div>
        </Link>
      </div>
    );
  }

  function Failure(props) {
    return (
      <div className='p-4'>
        <Alert className='margin' variant='danger'>
          <Alert.Heading className='text-center'>Payment Failure</Alert.Heading>
          <hr />
          <p className='text-center'>
            Your payment didn't go through, please try again!
          </p>
        </Alert>
        <Link to={routes.initiatePayment.path}>
          <div class='d-flex justify-content-center'>
            <button className='mt-2'>Make Another Payment</button>
          </div>
        </Link>
      </div>
    );
  }

  // const dispatch = useDispatch();

  // const recordTransactionResponseData = useSelector(
  //   (state) => state.transaction.recordTransactionResponseData,
  // );

  // const isRecordTransactionResponseReceived = useSelector(
  //   (state) => state.transaction.isRecordTransactionResponseReceived,
  // );

  // useEffect(() => {
  //   if (isSuccessfulResponse(recordTransactionResponseData)) {
  //     showPopup('success', 'Success', 'Transaction recorded in database!');
  //     // history.push(routes.viewGroup.path);
  //   }
  // }, [isRecordTransactionResponseReceived]);

  function Message() {
    if (status == 'success') {
      return (
        <div>
          <Success />
        </div>
      );
    }
    return (
      <div>
        <Failure />
      </div>
    );
  }

  return <Message />;
}
