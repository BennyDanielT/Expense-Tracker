import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Popup from './Popup';
import { useHistory } from 'react-router-dom';
import succInvites from './SuccessfulInvites';

export default function InviteFriends() {

    const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
    
  }
  

  const history=useHistory();


  return (
    <div className='invite'>
      <h4>Invite Friends!</h4>
      <Form>
      <Form.Group>
          <Form.Label>Enter your friends's email id:</Form.Label>
          <Form.Control type="text" 
                        placeholder="abcd@xyz.com" />
        </Form.Group>
        <Button variant="primary" type="button" onClick={togglePopup} >
           Send Invite
        </Button>
        {isOpen && <Popup
      content={<>
        <b>Invitation sent successfully</b>
      </>}
      handleClose={togglePopup}
    />}

        <Button className="mt-2" onClick={() => {history.push("/succInvite")}}>
          Successfull Invites
          </Button>
     
      </Form>
    </div>
  );
}