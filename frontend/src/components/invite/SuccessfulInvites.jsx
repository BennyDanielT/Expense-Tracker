import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Popup from './Popup';
import "../../css/popup.css";
import { Card } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';

export default function SuccInvites() {

    
  return (
    <div className='succinvite'>
      <h4>Invitee Successfully Joined:</h4>
      <Card style={{ width: '18rem' }}>
    <Card.Header>Email:</Card.Header>
    <ListGroup variant="flush">
    <ListGroup.Item>thakkarsmit28@gmail.com</ListGroup.Item>
    <ListGroup.Item>abhishekuppe@gmail.com</ListGroup.Item>
    <ListGroup.Item>abc@xyz.com</ListGroup.Item>
    </ListGroup>
    </Card>
      

      
    </div>
  );
}