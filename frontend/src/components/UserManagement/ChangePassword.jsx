import { Card, Button, ListGroup, Container } from "react-bootstrap";
import { useState } from "react";
import Swal from "sweetalert2";
import moment from "moment";

import { Link } from "react-router-dom";
import Form from "./Utilities/FormHelper";
import "../../css/user_management.css";
function PasswordChanged() {
  const [email, setEmail] = useState("");
  const [validate, setValidate] = useState({});

  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  /**
   * Author:    Ayush Verma
   * Created:   15.07.2022
   *
   * (c) Copyright by Group 24.
   **/
  function generateString(length) {
    let result = " ";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
  }

  const validateforgotPassword = () => {
    let isValid = true;

    let validator = Form.validator({
      email: {
        value: email,
        isRequired: true,
        isEmail: true,
      },
    });

    if (validator !== null) {
      setValidate({
        validate: validator.errors,
      });

      isValid = false;
    }
    return isValid;
  };

  const forgotPassword = (e) => {
    e.preventDefault();

    const validate = validateforgotPassword();

    if (validate) {
      Swal.fire("Yay!", "Reset password link is sent to " + email, "success");
      setValidate({});
      setEmail("");
    }
  };

  return (
    <Container fluid="md">
      <div className="row g-0 auth-wrapper">
        <div className="col-12 col-md-7 col-lg-6 auth-main-col text-center">
          <div className="d-flex flex-column align-content-end">
            <div className="auth-body mx-auto">
              <div className="auth-form-container text-start">
                <div className="text-center">
                  <div className="text-center">
                    {/* <p>Yay! Logging you in to the dashboard✅</p> */}
                    <Card style={{ width: "28rem" }}>
                      <ListGroup variant="flush">
                        <ListGroup.Item>Token Verified</ListGroup.Item>
                        <ListGroup.Item>
                          Logged in at :{" "}
                          {moment().format("DD-MM-YYYY hh:mm:ss")}
                        </ListGroup.Item>
                        <ListGroup.Item>
                          Device : Mozilla/5.0 (Macintosh){" "}
                        </ListGroup.Item>
                      </ListGroup>
                      <Button variant="outline-success" href="/">
                        Go to Dashboard
                      </Button>{" "}
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export { PasswordChanged };
