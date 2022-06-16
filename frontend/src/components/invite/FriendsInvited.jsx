import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Popup from './Popup';
import "../invite/popup.css";

export default function FriendsInvited() {

    
  return (
    <div className='friendsinvited'>
      <h4>Total Invited Friends</h4>
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