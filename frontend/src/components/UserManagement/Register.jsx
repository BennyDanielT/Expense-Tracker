import { Container, Card, Table, Button } from "react-bootstrap";
import { useState } from "react";
import Swal from "sweetalert2";

import { Link } from "react-router-dom";
import Form from "./Utilities/FormHelper";
import "./Style/main.css";
function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validate, setValidate] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const validateRegister = () => {
    let isValid = true;

    let validator = Form.validator({
      name: {
        value: name,
        isRequired: true,
      },
      email: {
        value: email,
        isRequired: true,
        isEmail: true,
      },
      password: {
        value: password,
        isRequired: true,
        minLength: 6,
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

  const register = (e) => {
    e.preventDefault();

    const validate = validateRegister();

    if (validate) {
      setValidate({});
      setName("");
      setEmail("");
      setPassword("");
      Swal.fire("Yay!", "Successfully Registered the user", "success");
    }
  };

  const togglePassword = (e) => {
    if (showPassword) {
      setShowPassword(false);
    } else {
      setShowPassword(true);
    }
  };
  return (
    <div className="row g-0 auth-wrapper">
      <div className="col-12 col-md-7 col-lg-6 auth-main-col text-center">
        <div className="d-flex flex-column align-content-end">
          <div className="auth-body mx-auto">
            <p>Create your Account</p>
            <div className="auth-form-container text-start">
              <form
                className="auth-form"
                method="POST"
                onSubmit={register}
                autoComplete={"off"}
              >
                <div className="name mb-3">
                  <input
                    type="text"
                    className={`form-control ${
                      validate.validate && validate.validate.name
                        ? "is-invalid "
                        : ""
                    }`}
                    id="name"
                    name="name"
                    value={name}
                    placeholder="Name"
                    onChange={(e) => setName(e.target.value)}
                  />

                  <div
                    className={`invalid-feedback text-start ${
                      validate.validate && validate.validate.name
                        ? "d-block"
                        : "d-none"
                    }`}
                  >
                    {validate.validate && validate.validate.name
                      ? validate.validate.name[0]
                      : ""}
                  </div>
                </div>

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

                <div className="password mb-3">
                  <div className="input-group">
                    <input
                      type={showPassword ? "text" : "password"}
                      className={`form-control ${
                        validate.validate && validate.validate.password
                          ? "is-invalid "
                          : ""
                      }`}
                      name="password"
                      id="password"
                      value={password}
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                    />

                    <div
                      className={`invalid-feedback text-start ${
                        validate.validate && validate.validate.password
                          ? "d-block"
                          : "d-none"
                      }`}
                    >
                      {validate.validate && validate.validate.password
                        ? validate.validate.password[0]
                        : ""}
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <Button as="input" type="submit" value="Submit" />{" "}
                </div>
              </form>

              <hr />
              <div className="auth-option text-center pt-2">
                Have an account?{" "}
                <Link className="text-link" to="/login">
                  Sign in
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Register };
