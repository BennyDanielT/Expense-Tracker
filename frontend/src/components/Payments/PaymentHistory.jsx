/**
 * @author ${Benny Tharigopala}
 */
import { Heading } from '../Heading/Heading';
import DatePicker from 'react-datepicker';
import { Button, Table } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { createClient } from '@supabase/supabase-js';

const SUPABASE_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtmeXhmd2NkZGlncXV6ZGNkdWl4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTc3MTc1NTAsImV4cCI6MTk3MzI5MzU1MH0.gQCSvtkF6PYgpDiepWPTqQkLjoAO-miKX4egXOkQiVU';

const SUPABASE_URL = 'https://kfyxfwcddigquzdcduix.supabase.co';

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export default function PaymentHistory() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [values, setValues] = useState([]);
  const [minAmount, setMinAmount] = useState(0);
  const [maxAmount, setMaxAmount] = useState(0);
  let val = [{}];

  const history = useHistory();

  async function retrieveTransactions() {
    const { data, error } = await supabase.from('transaction').select('*');
    // console.log(data);
    const filteredtValues = data.filter((value) => {
      var start = new Date(startDate);
      start.setUTCHours(0, 0, 0, 0);
      var end = new Date(endDate);
      end.setUTCHours(23, 59, 59, 999);
      return (
        new Date(value.timestamp) >= start &&
        new Date(value.timestamp) <= end &&
        value.amount >= minAmount &&
        value.amount <= maxAmount
      ); //AND User.name!= loggedInUser
    });
    // const res = await data.json();
    setValues(filteredtValues);
    // console.log(values);

    // .then((value) => console.log(value));
    // return data;
  }

  useEffect(() => {
    retrieveTransactions();
  }, []);

  // let data = retrieveTransactions();

  // let value = (async () => {
  //   const res = await retrieveTransactions();
  //   console.log(res);
  //   const data = await res.json();
  // })().catch(console.error);

  return (
    <div className='m-4 p-4'>
      <Heading>Payment History</Heading>

      <div className='mb-3 mt-3'>
        <div className='d-flex justify-content-center'>
          The table below displays the list of payments made during the given
          time period.
        </div>
      </div>

      <div className='d-flex mb-4'>
        <b>Modify Transaction Date Range and Amount using the filters below</b>
      </div>

      <div className='d-flex'>
        <div>
          <span>From</span>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </div>
        <div>
          <div>To</div>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
          />
        </div>
      </div>
      <br></br>
      <div className='d-flex'>
        <div>
          <span>Minimum Amount</span>
          <br></br>
          <input
            id='number1'
            type='number'
            value={minAmount}
            onChange={(e) => setMinAmount(e.target.value)}
          />
        </div>

        <div>
          <span style={{ 'margin-left': '21%' }}>Maximum Amount</span>
          <br></br>
          <input
            id='number2'
            type='number'
            value={maxAmount}
            onChange={(e) => setMaxAmount(e.target.value)}
            style={{ 'margin-left': '21%' }}
          />
        </div>
      </div>
      <div>
        <Button
          className='mt-4 d-flex justify-content-center align-items-center'
          style={{ width: 'fit-content' }}
          onClick={retrieveTransactions}
        >
          Go
        </Button>
      </div>

      <div className='mt-4 justify-content-center'>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Timestamp</th>
              <th>Payee</th>
              <th>Amount</th>
              <th>Payment Status</th>
            </tr>
          </thead>
          <tbody>
            {/* <tr>
              <td>{new Date().toDateString()}</td>
              <td>US Payment Service</td>
              <td>$120</td>
              <td>Loaded on {new Date().toDateString()}</td>
            </tr>
            <tr>
              <td>{new Date().toDateString()}</td>
              <td>US Payment Service</td>
              <td>$220</td>
              <td>Loaded on {new Date().toDateString()}</td>
            </tr> */}
            {values.map((v) => (
              <tr>
                {' '}
                <td>Paid on {v.timestamp}</td>
                <td>{v.payee}</td>
                <td>{v.amount}</td>
                <td>{v.status}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
