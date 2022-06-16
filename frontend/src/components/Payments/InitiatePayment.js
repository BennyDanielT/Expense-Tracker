import {Heading} from "../Heading/Heading";
import {Button, Form} from "react-bootstrap";
import {useState} from "react";
import Swal from "sweetalert2";

export default function InitiatePayment() {

    const [values, setValues] = useState({});

    const [errors, setErrors] = useState({payFor: null});

    const emailRegex = "^\\S+@\\S+\\.\\S+$";

    const onChangeFunctions = {
        'payFor': (e) => {
            const {currentTarget: {value}} = e;
            setValues({
                ...values,
                payFor: value
            });
            if (!value) {
                setErrors({
                    ...errors,
                    payFor: "Payment For is a required field"
                });
            } else {
                setErrors({
                    ...errors,
                    payFor: null
                });
            }
        },
        'amount': (e) => {
            const {currentTarget: {value}} = e;
            setValues({
                ...values,
                amount: value
            });
            if (!value) {
                setErrors({
                    ...errors,
                    amount: "Amount is a required field"
                });
            } else {
                setErrors({
                    ...errors,
                    amount: null
                });
            }
        },
        'notes': (e) => {
            const {currentTarget: {value}} = e;
            setValues({
                ...values,
                notes: value
            });
            if (!value) {
                setErrors({
                    ...errors,
                    notes: "Notes is a required field"
                });
            } else {
                setErrors({
                    ...errors,
                    notes: null
                });
            }
        },
        'email': (e) => {
            const {currentTarget: {value}} = e;
            setValues({
                ...values,
                email: value
            });
            if (!value) {
                setErrors({
                    ...errors,
                    email: "Amount is a required field"
                });
            } else if (!value.match(emailRegex)) {
                setErrors({
                    ...errors,
                    email: "Email must in the valid format (Ex: foo_bar@gmail.com)",
                });
            } else {
                setErrors({
                    ...errors,
                    email: null
                });
            }
        },
        'firstName': (e) => {
            const {currentTarget: {value}} = e;
            setValues({
                ...values,
                firstName: value
            });
            if (!value) {
                setErrors({
                    ...errors,
                    firstName: "Firstname is a required field"
                });
            } else {
                setErrors({
                    ...errors,
                    firstName: null
                });
            }
        },
        'lastName': (e) => {
            const {currentTarget: {value}} = e;
            setValues({
                ...values,
                lastName: value
            });
            if (!value) {
                setErrors({
                    ...errors,
                    lastName: "Lastname is a required field"
                });
            } else {
                setErrors({
                    ...errors,
                    lastName: null
                });
            }
        }
    }

    const [mainErrors, setMainErrors] = useState("");

    const fields = [
        {label: "Pay For", type: "text", name: "payFor", onChange: onChangeFunctions.payFor},
        {label: "Amount", type: "number", name: "amount", onChange: onChangeFunctions.amount},
        {label: "Notes", type: "text", name: "notes", onChange: onChangeFunctions.notes},
        {label: "Email", type: "email", name: "email", onChange: onChangeFunctions.email},
        {label: "First Name", type: "text", name: "firstName", onChange: onChangeFunctions.firstName},
        {label: "Last Name", type: "test", name: "lastName", onChange: onChangeFunctions.lastName}
    ]

    const submitForm = (e) => {
        e.preventDefault();
        if (!Object.keys(values).length) {
            setMainErrors("Please enter all the fields without errors!");
        } else {
            let isError = false;
            Object.values(errors).forEach((value) => {
                if (value) {
                    isError = true;
                }
            });
            if (isError) {
                setMainErrors("Please enter all the fields without errors!");
            } else {
                setMainErrors("");
                Swal.fire(
                    'Initiated!',
                    'Your payment has been initiated',
                    'success'
                );
            }
        }
    }

    return (
        <div>
            <Heading>Make a payment</Heading>

            <Form className="m-5">
                {fields.map((field) => {
                    const {label, type, name, onChange} = field
                    return (
                        <div className="mb-3" key={name}>
                            <Form.Group controlId={name}>
                                <Form.Label><b>{label}</b></Form.Label>
                                <Form.Control type={type} name={name} placeholder={`Enter ${label}`} onChange={onChange}
                                              value={values[name]}/>
                            </Form.Group>
                            {errors[name] && <div className="errors">{errors[name]}</div>}
                        </div>
                    )
                })}
                <div className="errors mb-3">{mainErrors}</div>
                <div className="d-flex justify-content-center align-items-center">
                    <Button variant="primary" type="submit" onClick={submitForm}>
                        Submit
                    </Button>
                </div>
            </Form>
        </div>
    )
}