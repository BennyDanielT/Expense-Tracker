import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Swal from "sweetalert2";

export default function SettleExpense() {
  return (
    <div style={{ display: 'block', 
                  width: 700, 
                  padding: 30 }}>
      <h4>Settle the Expense</h4>
      <Form>
      <Form.Group>
          <Form.Label>Enter the amount to be settled:</Form.Label>
          <Form.Control type="text" 
                        placeholder="Enter amount" />
        </Form.Group>
        
        <Button variant="primary" type="button" onClick={Swal.fire(
            'Congratulations!',
            'You are all settled up!',
            'success'
            )}>
           Settle Up!
        </Button>
      </Form>
    </div>
  );
}