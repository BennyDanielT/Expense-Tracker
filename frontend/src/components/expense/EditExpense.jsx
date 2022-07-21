import {useHistory, useLocation, useParams} from "react-router-dom";
import {Heading} from "../Heading/Heading";
import {Button, Form} from "react-bootstrap";
import Select from "react-select";
import {getUserFullName, isSuccessfulResponse, routes, showPopup} from "../../constants";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {usePrevious} from "react-use";
import {editExpense, getUsers, viewExpense} from "../../redux/actions";

function EditExpense() {
    const location = useLocation();

    const apiData = location.state;

    const [mainError, setMainError] = useState("");

    const actualMembers = [];

    apiData.members.forEach((ele) => {
        actualMembers.push({label: ele.slice(0, 1).toUpperCase() + ele.slice(1), value: ele});
    });

    const [values, setValues] = useState({name: apiData.name, members: actualMembers, icon: null, amount: null},);
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

    const dispatch = useDispatch();

    const {id} = useParams();

    useEffect(() => {
        dispatch(getUsers());
        dispatch(viewExpense(id));
    }, []);

    const viewExpenseResponseData = useSelector(
        (state) => state.expense.viewExpenseResponseData
    );

    const isViewExpenseResponseReceived = useSelector(
        (state) => state.expense.isViewExpenseResponseReceived
    );

    const prevIsViewExpenseResponseReceived = usePrevious(isViewExpenseResponseReceived);

    useEffect(() => {
        if (prevIsViewExpenseResponseReceived !== isViewExpenseResponseReceived && isSuccessfulResponse(viewExpenseResponseData)) {
            const data = viewExpenseResponseData['success'][0];
            const users = [];
            data.users.forEach((ele) => {
                users.push({label: getUserFullName(ele), value: ele.id});
            });
            setValues({...values, name: data.name, users});
        }
    }, [isViewExpenseResponseReceived]);

    const isUsersResponseReceived = useSelector((state) => state.expense.isUsersResponseReceived);
    const usersResponseData = useSelector((state) => state.expense.usersResponseData);
    const prevIsUsersResponseReceived = usePrevious(isUsersResponseReceived);

    const [users, setUsers] = useState([]);

    useEffect(() => {
        if (prevIsUsersResponseReceived !== undefined && isUsersResponseReceived !== prevIsUsersResponseReceived) {
            if (isSuccessfulResponse(usersResponseData)) {
                const array = [];
                usersResponseData['success'].forEach((ele) => {
                    array.push({label: getUserFullName(ele), value: ele.id});
                });
                setUsers(array);
            }
        }
    }, [isUsersResponseReceived]);

    const editExpenseResponseData = useSelector(
        (state) => state.expense.editExpenseResponseData
    );

    const isEditExpenseResponseReceived = useSelector(
        (state) => state.expense.isEditExpenseResponseReceived
    );

    const prevIsEditExpenseResponseReceived = usePrevious(isEditExpenseResponseReceived);

    useEffect(() => {
        if (prevIsEditExpenseResponseReceived !== isEditExpenseResponseReceived && prevIsEditExpenseResponseReceived !== undefined) {
            if (isSuccessfulResponse(editExpenseResponseData)) {
                showPopup("success", "Success", "Expense Edited Successfully");
                history.push(routes.expense.path);
            }
        }
    }, [isEditExpenseResponseReceived]);

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

                <Form.Group className="mb-3" controlId="expenseIcon">
                    <Form.Label>Expense Image</Form.Label>
                    <Form.Control type="file" accept="image/*" placeholder="Add expense image"
                                  onChange={onChangeFunctions['icon']}/>
                    <div className="errors">{errors['icon']}</div>
                </Form.Group>


                <Form.Group className="mb-3" controlId="react-select-3-input">
                    <Form.Label>Group Members</Form.Label>
                    <Select
                        isMulti
                        name="colors"
                        defaultValue={values.members}
                        options={users}
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