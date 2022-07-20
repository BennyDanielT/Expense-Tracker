import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import Popup from "./Popup";
import { useHistory } from "react-router-dom";
import succInvites from "./SuccessfulInvites";
import Swal from "sweetalert2";

export default function InviteFriends() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const history = useHistory();

  return (
    <div className="invite">
      <h4>Invite Friends!</h4>
      <Form>
        <Form.Group>
          <Form.Label>Enter your friends's email id:</Form.Label>
          <Form.Control type="text" placeholder="abcd@xyz.com" />
        </Form.Group>
        <Button
          className="mt-2"
          variant="primary"
          type="button"
          onClick={() => Swal.fire("Invitation sent successfully")}
        >
          Send Invite
        </Button>

        <Button
          className="mt-2"
          onClick={() => {
            history.push("/succInvite");
          }}
        >
          Successfull Invites
        </Button>

        <Button
          className="mt-2"
          onClick={() => {
            history.push("/friends-invited");
          }}
        >
          All Invites
        </Button>
      </Form>
    </div>
  );
}
