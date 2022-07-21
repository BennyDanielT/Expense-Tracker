// src/components/Signup.js

import {useRef} from "react";
import {Link, useHistory} from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Swal from "sweetalert2";
import {useAuth} from "../../contexts/Auth.js";

/**
 * Author:    Ayush Verma
 * Created:   15.07.2022
 *
 * (c) Copyright by Group 24.
 **/
export function Signup() {
    const emailRef = useRef();
    const passwordRef = useRef();

    // Get signUp function from the auth context
    const {signUp} = useAuth();

    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault();

        // Get email and password input values
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        // Calls `signUp` function from the context
        const {error} = await signUp({email, password});

        if (error) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: error.message,
            });
        } else {
            // Redirect user to Dashboard
            history.push("/");
        }
    }

    return (
        <>
            {/* <form onSubmit={handleSubmit}>
        <label htmlFor="input-email">Email</label>
        <input id="input-email" type="email" ref={emailRef} />

        <label htmlFor="input-password">Password</label>
        <input id="input-password" type="password" ref={passwordRef} />

        <br />

        <button type="submit">Sign up</button>
      </form> */}
            <Container>
                <br></br>
                {/* Handles the user signuop for the user */}
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            id="input-email"
                            type="email"
                            placeholder="Enter email"
                            ref={emailRef}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            id="input-password"
                            type="password"
                            placeholder="Password"
                            ref={passwordRef}
                        />
                    </Form.Group>

                    <div style={{textAlign: "center"}}>
                        {" "}
                        <Button variant="primary" type="submit">
                            {/* Login function for the sign */}
                            Register
                        </Button>{" "}
                        <br></br> <br></br>
                        Don't have an account? <Link to="/login">Login</Link>
                    </div>
                </Form>
            </Container>
        </>
    );
}
