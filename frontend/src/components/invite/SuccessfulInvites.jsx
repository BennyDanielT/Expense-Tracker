import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Popup from './Popup';
import "../invite/popup.css";

export default function SuccInvites() {

    
  return (
    <div className='succinvite'>
      <h4>Invitee Successfully Joined:</h4>
      <h6>
        Name: Smit Thakkar
        Email: thakkarsmit28@gmail.com
    </h6>

    <h6>
            Name: ABCD
            Email: abcd@xyz.com
    </h6>
      

      
    </div>
  );
}