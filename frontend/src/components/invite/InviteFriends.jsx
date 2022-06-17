import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {useState} from 'react';
import Popup from './Popup';
import {useHistory} from 'react-router-dom';
import succInvites from './SuccessfulInvites';
import Swal from 'sweetalert2';

export default function InviteFriends() {

    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);

    }


    const history = useHistory();

    const [error, setError] = useState("");

    const inviteSuccess = () => {
        if (!document.getElementById("current-invite-email-id").value) {
            setError("Enter email id");
        } else {
            setError("");
            Swal.fire('Invitation sent successfully')
        }
    }

    return (
        <div className='invite'>
            <h4>Invite Friends!</h4>
            <Form>
                <Form.Group>
                    <Form.Label>Enter your friends's email id:</Form.Label>
                    <Form.Control type="text"
                                  id="current-invite-email-id"
                                  placeholder="abcd@xyz.com"/>
                </Form.Group>
                <div className="errors">{error}</div>
                <div className="d-flex">
                    <Button className="mt-2 mr-2" variant="primary" type="button" onClick={inviteSuccess}>
                        Send Invite
                    </Button>


                    <Button className="mt-2 mr-2" onClick={() => {
                        history.push("/succInvite")
                    }}>
                        Successfull Invites
                    </Button>

                    <Button className="mt-2" onClick={() => {
                        history.push("/friends-invited")
                    }}>
                        All Invites
                    </Button>
                </div>

            </Form>
        </div>
    );
}