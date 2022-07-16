import { Container, Card, Table, Button } from "react-bootstrap";
import { useState } from "react";
import Swal from "sweetalert2";
import { useAuth } from "../../contexts/Auth.js";
/**
 * Author:    Ayush Verma
 * Created:   15.07.2022
 *
 * (c) Copyright by Group 24.
 **/
import { Link } from "react-router-dom";
import Form from "./Utilities/FormHelper";
import "../../css/user_management.css";
function ForgotPassword() {
  const { forgetPassword } = useAuth();

  const [email, setEmail] = useState("");
  const [validate, setValidate] = useState({});
  // Validates the password after the validation.
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

  const forgotPassword = async (e) => {
    e.preventDefault();

    const validate = validateforgotPassword();

    if (validate) {
      const { error } = await forgetPassword(email);
      console.log(error);
      Swal.fire("Yay!", "Reset password link is sent to " + email, "success");

      setValidate({});
      setEmail("");
    }
  };

  return (
    <div className="row g-0 auth-wrapper">
      <div className="col-12 col-md-7 col-lg-6 auth-main-col text-center">
        <div className="d-flex flex-column align-content-end">
          <div className="auth-body mx-auto">
            <p>Forgot Password</p>
            <div className="auth-form-container text-start">
              <form
                className="auth-form"
                method="POST"
                onSubmit={forgotPassword}
                autoComplete={"off"}
              >
                <div className="email mb-3">
                  <input
                    type="email"
                    className={`form-control ${
                      validate.validate && validate.validate.email
                        ? "is-invalid "
                        : ""
                    }`}
                    id="email"
                    name="email"
                    value={email}
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  <div
                    className={`invalid-feedback text-start ${
                      validate.validate && validate.validate.email
                        ? "d-block"
                        : "d-none"
                    }`}
                  >
                    {validate.validate && validate.validate.email
                      ? validate.validate.email[0]
                      : ""}
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-center">
                    <Button as="input" type="submit" value="Submit" />{" "}
                  </div>
                </div>
              </form>

              <hr />
              <div className="auth-option text-center pt-2">
                <Link className="text-link" to="/login">
                  Back to Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { ForgotPassword };
