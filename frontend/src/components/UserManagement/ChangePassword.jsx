import { Card, Button, ListGroup } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";
import Form from "./Utilities/FormHelper";
import "./Style/main.css";
function PasswordChanged() {
  const [email, setEmail] = useState("");
  const [validate, setValidate] = useState({});

  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

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
      alert("Reset password link is sent to " + email);
      setValidate({});
      setEmail("");
    }
  };

  return (
    <div className="row g-0 auth-wrapper">
      <div className="col-12 col-md-5 col-lg-6 h-100 auth-background-col">
        <div className="auth-background-holder"></div>
        <div className="auth-background-mask"></div>
      </div>

      <div className="col-12 col-md-7 col-lg-6 auth-main-col text-center">
        <div className="d-flex flex-column align-content-end">
          <div className="auth-body mx-auto">
            <div className="auth-form-container text-start">
              <form
                className="auth-form"
                method="POST"
                onSubmit={forgotPassword}
                autoComplete={"off"}
              >
                <div className="text-center">
                  <div className="text-center">
                    {/* <p>Yay! Logging you in to the dashboard✅</p> */}
                    <Card style={{ width: "28rem" }}>
                      <ListGroup variant="flush">
                        <ListGroup.Item>
                          Magic Token Verified : {generateString(9)}{" "}
                        </ListGroup.Item>
                        <ListGroup.Item>
                          Logged in at : 13 June 2022, 4:30 AM
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
              </form>

              <hr />
              <div className="auth-option text-center pt-2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { PasswordChanged };
