import {useHistory, useLocation} from "react-router-dom";
import {Heading} from "../Heading/Heading";
import {Button, Form} from "react-bootstrap";
import {useState} from "react";
import Select from "react-select";
import {dummyMembersData, dummyGroupData} from "./helpers";
import Swal from "sweetalert2";
import {routes} from "../../constants";
import {getUserFullName, imgToBase64, isSuccessfulResponse, routes, showPopup} from "../../constants";

function EditExpense() {
    const location = useLocation();

    const apiData = location.state;

    const [mainError, setMainError] = useState("");

    const actualMembers = [];

    apiData.members.forEach((ele) => {
        actualMembers.push({label: ele.slice(0, 1).toUpperCase() + ele.slice(1), value: ele});
    });

    const [values, setValues] = useState({name: apiData.name, members: actualMembers, icon: null, amount: null}, );
    const [errors, setErrors] = useState({});

    const onChangeFunctions = {
        'name': (e) => {
            const {currentTarget: {value}} = e;
            setValues({
                ...values,
                name: value
            });
            if (!value.length) {
                setErrors({
                    ...errors,
                    name: "Expense name is a required field"
                });
            } else if (value.length > 50) {
                setErrors({
                    ...errors,
                    name: "Expense name shouldn't be more than 50 characters"
                });
            } else {
                setErrors({
                    ...errors,
                    name: null
                });
            }
        },
        'icon': (e) => {
            const {currentTarget: {files}} = e;
            if (files.length) {
                setValues({
                    ...values,
                    icon: files[0]
                });
                setErrors({
                    ...errors,
                    icon: null
                });
            } else {
                setErrors({
                    ...errors,
                    icon: "Group file is required"
                })
            }
        },
        'members': (e) => {
            setValues({
                ...values,
                members: e.map((ele) => ele.value)
            });
        },
        'amount': (e) => {
            const {currentTarget: {value}} = e;
            setValues({
                ...values,
                amount: value
            });
            if (!value.length) {
                setErrors({
                    ...errors,
                    amount: "Amount is a required field"
                });
            } else if (isNaN(value)) {
                setErrors({
                    ...errors,
                    amount: "Amount Should be a numeric value"
                });
            } else {
                setErrors({
                    ...errors,
                    amount: null
                });
            }
        }
    };

    const history = useHistory();

    const editExpense = (e) => {

        const callErrorFunctions = () => {
            setMainError("Enter all the form fields to continue!!");
        }

        e.preventDefault();
        if (Object.keys(values).length) {
            let error = false;
            Object.values(values).forEach((value) => {
                if (!value || (Array.isArray(value) && !value.length)) {
                    error = true
                }
            });
            if (!error) {
                setMainError("");
                Swal.fire(
                    'Edit',
                    'Your expense has been been updated',
                    'success'
                ).then(() => {
                    history.push(routes.expense.path);
                })
            } else {
                callErrorFunctions();
            }
        } else {
            callErrorFunctions();
        }
    };

    return (
        <div className="edit-expense p-4">
            <Form.Label><Heading>Edit Expense</Heading></Form.Label>
            <Form>
                <Form.Group className="mb-3" controlId="expenseName">
                    <Form.Label>Expense Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter new expense name" value={values["name"]}
                                  onChange={onChangeFunctions['name']}/>
                    <div className="errors">{errors['name']}</div>
                </Form.Group>
                <Form.Group className="mb-3" controlId="expenseAmount">
                    <Form.Label>New Amount Amount:</Form.Label>
                    <Form.Control type="numeric" placeholder="Enter amount " value={values["amount"]}
                                  onChange={onChangeFunctions['amount']}/>
                    <div className="errors">{errors['amount']}</div>
                </Form.Group>

                <Form.Group className="mb-3" controlId="groupIcon">
                    <Form.Label>Expense Icon</Form.Label>
                    <Form.Control type="file" accept="image/*" placeholder="Add group icon"
                                  onChange={onChangeFunctions['icon']}/>
                    <div className="errors">{errors['icon']}</div>
                </Form.Group>

                <Form.Group className="mb-3" controlId="react-select-3-input">
                    <Form.Label>Available Groups</Form.Label>
                    <Select
                        isMulti
                        name="colors"
                        options={dummyGroupData}
                        className="basic-multi-select"
                        classNamePrefix="select"
                        onChange={onChangeFunctions['groups']}
                    />
                    <div className="errors">{errors['groups']}</div>
                </Form.Group>

                <Form.Group className="mb-3" controlId="react-select-3-input">
                    <Form.Label>Group Members</Form.Label>
                    <Select
                        isMulti
                        name="colors"
                        defaultValue={values.members}
                        options={dummyMembersData}
                        className="basic-multi-select"
                        classNamePrefix="select"
                        onChange={onChangeFunctions['members']}
                    />
                    <div className="errors">{errors['members']}</div>
                </Form.Group>

                <div className="errors mb-3">{mainError}</div>

                <div className="d-flex justify-content-center">
                    <Button className="mt-4" onClick={editExpense}>
                        Edit {apiData.name}
                    </Button>
                </div>
            </Form>
        </div>
    )
}

export {EditExpense}