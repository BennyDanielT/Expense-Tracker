import {useId, useState} from "react";
import {Button, ButtonGroup, Form} from "react-bootstrap";
import Select from "react-select";
import {getLocalStorage, routes, setLocalStorage} from "../../constants";
import Swal from "sweetalert2";
import {useHistory} from "react-router-dom";
import "./expense.css";
import {Heading} from "../Heading/Heading";
import {dummyGroupData, dummyMembersData} from "./helpers";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


function AddExepnse() {
    const [values, setValues] = useState({name: "", icon: "",amount:"", type: "home", members: null, groups: null,});
    const [errors, setErrors] = useState({});
    const [mainError, setMainError] = useState("");
    

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
                    name: "Group name is a required field"
                });
            } else if (value.length > 50) {
                setErrors({
                    ...errors,
                    name: "Group name shouldn't be more than 50 characters"
                });
            } else {
                setErrors({
                    ...errors,
                    name: null
                });
            }
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
                    icon: "Expense image is required"
                })
            }
        },
        'type': (e) => {
            for (let i = 0; i < e.currentTarget.children.length; i++) {
                e.currentTarget.children[i].classList.remove("selected");
            }
            e.target.classList.add("selected");
            setValues({
                ...values,
                type: e.target.value
            });
        },
        'members': (e) => {
            setValues({
                ...values,
                members: e.map((ele) => ele.value)
            });
        },
        'groups': (e) => {
            setValues({
                ...values,
                groups: e.map((ele) => ele.value)
            });
        }
    }

    const dispatch = useDispatch();

    const createGroupResponseData = useSelector(
        (state) => state.group.createGroupResponseData
    );

    const isCreateGroupResponseReceived = useSelector(
        (state) => state.group.isCreateGroupResponseReceived
    );

    const history = useHistory();

    const prevIsCreateGroupResponseReceived = usePrevious(isCreateGroupResponseReceived);

    useEffect(() => {
        if (prevIsCreateGroupResponseReceived !== undefined && prevIsCreateGroupResponseReceived !== isCreateGroupResponseReceived) {
            if (isSuccessfulResponse(createGroupResponseData)) {
                showPopup("success", "Success", "Group Successfully Created");
                history.push(routes.group.path);
            }
        }
    }, [isCreateGroupResponseReceived]);

    const isUsersResponseReceived = useSelector((state) => state.group.isUsersResponseReceived);
    const usersResponseData = useSelector((state) => state.group.usersResponseData);

    useEffect(() => {
        dispatch(getUsers());
    }, []);

    const [users, setUsers] = useState([]);

    useEffect(() => {
        if (isSuccessfulResponse(usersResponseData)) {
            const array = [];
            usersResponseData['success'].forEach((ele) => {
                array.push({label: getUserFullName(ele), value: ele.user_id});
            });
            setUsers(array);
        }
    }, [isUsersResponseReceived]);

    const submitForm = (e) => {

        const callErrorFunctions = () => {
            setMainError("Please fill out all the fields");
        }

        e.preventDefault();
        if (Object.keys(values).length) {
            let error = false;
            console.log(values);
            Object.values(values).forEach((value) => {
                if (!value || (Array.isArray(value) && !value.length)) {
                    error = true
                }
            });
            if (!error) {
                setMainError("");
                imgToBase64(values['image'], (res) => {
                    values['image'] = res;
                    dispatch(createGroup(values));
                });
            } else {
                callErrorFunctions();
            }
        } else {
            callErrorFunctions();
        }
    }

    return (
        <div className="create-expense">
            <Form.Label><Heading>Add Expense </Heading></Form.Label>
            <Form className="create-expense-form m-4">
                <Form.Group className="mb-3" controlId="expenseName">
                    <Form.Label>Expense Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter expense name" value={values["name"]}
                                  onChange={onChangeFunctions['name']}/>
                    <div className="errors">{errors['name']}</div>
                </Form.Group>

                <Form.Group className="mb-3" controlId="expenseIcon">
                    <Form.Label>Expense photo</Form.Label>
                    <Form.Control type="file" accept="image/*" placeholder="Add expense icon"
                                  onChange={onChangeFunctions['image']}/>
                    <div className="errors">{errors['image']}</div>
                </Form.Group>

                <Form.Group className="mb-3" controlId="expenseAmount">
                    <Form.Label>Enter Amount:</Form.Label>
                    <Form.Control type="numeric" placeholder="Enter amount " value={values["amount"]}
                                  onChange={onChangeFunctions['amount']}/>
                    <div className="errors">{errors['amount']}</div>
                </Form.Group>
                <Form.Group className="mb-3 expense-type" controlId="expenseType">
                    <Form.Label>Expense Type</Form.Label>
                    <div>
                        <ButtonGroup aria-label="Group Types" onClick={onChangeFunctions['type']}>
                            <Button variant="secondary selected" value={values["type"]}>Food</Button>
                            <Button variant="secondary" value="trip">Trip</Button>
                            <Button variant="secondary" value="others">Others</Button>
                        </ButtonGroup>
                    </div>
                    <div className="errors">{errors['type']}</div>
                </Form.Group>
                <Form.Group className="mb-3" controlId="react-select-3-input">
                    <Form.Label>Available Groups</Form.Label>
                    <Select
                        isMulti
                        name="colors"
                        options={dummyGroupData}
                        className="basic-multi-select"
                        classNamePrefix="select"
                        onChange={onChangeFunctions['group_ids']}
                    />
                    <div className="errors">{errors['group_ids']}</div>
                </Form.Group>
                <Form.Group className="mb-3" controlId="react-select-3-input">
                    <Form.Label>Group Members</Form.Label>
                    <Select
                        isMulti
                        name="colors"
                        options={dummyMembersData}
                        className="basic-multi-select"
                        classNamePrefix="select"
                        onChange={onChangeFunctions['user_ids']}
                    />
                    <div className="errors">{errors['user_ids']}</div>
                </Form.Group>

                <div className="errors mb-3">{mainError}</div>
                <div className="d-flex justify-content-center">
                    <Button variant="primary" type="submit" onClick={submitForm}>
                        Submit
                    </Button>
                </div>
            </Form>
        </div>
    )
}

export {AddExepnse};