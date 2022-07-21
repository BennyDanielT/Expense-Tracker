import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Button, ButtonGroup, Form} from "react-bootstrap";
import Select from "react-select";
import {addNotification, isSuccessfulResponse, routes, showPopup} from "../../constants";
import {useHistory} from "react-router-dom";
import "../../css/expense.css";
import {Heading} from "../Heading/Heading";
import {usePrevious} from "react-use";
import {addExpense, getUsers, viewGroups, viewTags} from "../../redux/actions";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import {useAuth} from "../../contexts/Auth";

function AddExepnse() {

    const {user} = useAuth();

    const [values, setValues] = useState({
        name: "",
        amount: "",
        type: "home",
        // user_ids: null,
        tag_id: "",
        group_id: "",
        user_id: user().user.identities[0].id
    });
    const [errors, setErrors] = useState({});
    const [mainError, setMainError] = useState("");


    const onChangeFunctions = {
        name: (e) => {
            const {
                currentTarget: {value},
            } = e;
            setValues({
                ...values,
                name: value,
            });
            if (!value.length) {
                setErrors({
                    ...errors,
                    name: "Expense name is a required field",
                });
            } else if (value.length > 50) {
                setErrors({
                    ...errors,
                    name: "Expense name shouldn't be more than 50 characters",
                });
            } else {
                setErrors({
                    ...errors,
                    name: null,
                });
            }
        },
        amount: (e) => {
            const {
                currentTarget: {value},
            } = e;
            setValues({
                ...values,
                amount: value,
            });
            if (!value.length) {
                setErrors({
                    ...errors,
                    amount: "Amount is a required field",
                });
            } else if (isNaN(value)) {
                setErrors({
                    ...errors,
                    amount: "Amount Should be a numeric value",
                });
            } else {
                setErrors({
                    ...errors,
                    amount: null,
                });
            }
        },
        icon: (e) => {
            const {
                currentTarget: {files},
            } = e;
            if (files.length) {
                setValues({
                    ...values,
                    icon: files[0],
                });
                setErrors({
                    ...errors,
                    icon: null,
                });
            } else {
                setErrors({
                    ...errors,
                    icon: "Expense image is required",
                });
            }
        },
        type: (e) => {
            for (let i = 0; i < e.currentTarget.children.length; i++) {
                e.currentTarget.children[i].classList.remove("selected");
            }
            e.target.classList.add("selected");
            setValues({
                ...values,
                type: e.target.value,
            });
        },
        user_ids: (e) => {
            setValues({
                ...values,
                user_ids: e.map((ele) => ele.value),
            });
        },
        group_id: (e) => {
            setValues({
                ...values,
                group_id: e.value,
            });
        },
        tag_id: (e) => {
            setValues({
                ...values,
                tag_id: e.value
            });
        }
    };

    const dispatch = useDispatch();

    const addExpenseResponseData = useSelector(
        (state) => state.expense.addExpenseResponseData
    );

    const isAddExpenseResponseReceived = useSelector(
        (state) => state.expense.isAddExpenseResponseReceived
    );

    const history = useHistory();

    const prevIsAddExpenseResponseReceived = usePrevious(
        isAddExpenseResponseReceived
    );

    useEffect(() => {
        if (
            prevIsAddExpenseResponseReceived !== undefined &&
            prevIsAddExpenseResponseReceived !== isAddExpenseResponseReceived
        ) {
            if (isSuccessfulResponse(addExpenseResponseData)) {
                addNotification(3, addExpenseResponseData.success[0], user().user.id);
                showPopup("success", "Success", "Expense Successfully Created");
                history.push(routes.expense.path);
            }
        }
    }, [isAddExpenseResponseReceived]);


    const usersResponseData = useSelector(
        (state) => state.group.usersResponseData
    );

    const viewTagsResponseData = useSelector(
        (state) => state.tag.viewTagsResponseData
    );

    const isViewTagsResponseReceived = useSelector(
        (state) => state.tag.isViewTagsResponseReceived
    );

    const isPrevViewTagsResponseReceived = usePrevious(
        isViewTagsResponseReceived
    );

    useEffect(() => {
        if (isPrevViewTagsResponseReceived !== undefined && isPrevViewTagsResponseReceived !== isViewTagsResponseReceived) {
            const newArray = [];
            viewTagsResponseData.data.forEach((tag) => {
                newArray.push({label: tag.name, value: tag.id});
            });
            setTags(newArray);
        }
    }, [isViewTagsResponseReceived]);

    useEffect(() => {
        dispatch(getUsers());
        dispatch(viewGroups(user().user.id));
        dispatch(viewTags(user().user.id));
    }, [dispatch]);

    const [group_id, setgroup_id] = useState([]);
    const [user_ids, setuser_ids] = useState([]);
    const [tags, setTags] = useState([]);


    useEffect(() => {
        if (usersResponseData.success && usersResponseData.success.length) {
            let tempArray = [];
            usersResponseData["success"].forEach((ele) => {
                tempArray.push({
                    label: ele.email_id,
                    value: ele.id,
                    //email_id: ele.email_id,
                    //id: ele.id,
                    //user_id: ele.id,
                });
            });
            setuser_ids(tempArray);
        }
    }, [usersResponseData]);

    const viewGroupsResponseData = useSelector(
        (state) => state.group.viewGroupsResponseData
    );

    const isViewGroupsResponseReceived = useSelector(
        (state) => state.group.isViewGroupsResponseReceived
    );

    const prevIsViewGroupsResponseReceived = usePrevious(
        isViewGroupsResponseReceived
    );

    // show the success message only if view groups response is received successfully
    useEffect(() => {
        if (
            prevIsViewGroupsResponseReceived !== isViewGroupsResponseReceived &&
            isSuccessfulResponse(viewGroupsResponseData)
        ) {
            const res = [];
            viewGroupsResponseData["success"].forEach((ele) => {
                res.push({
                    label: ele.name,
                    value: ele.id
                });
            });
            setgroup_id(res);
        }
    }, [isViewGroupsResponseReceived]);

    const submitForm = (e) => {
        const callErrorFunctions = () => {
            setMainError("Please fill out all the fields");
        };

        e.preventDefault();
        if (Object.keys(values).length) {
            let error = false;
            Object.values(values).forEach((value) => {
                if (!value || (Array.isArray(value) && !value.length)) {
                    error = true;
                }
            });
            if (!error) {
                setMainError("");
                dispatch(addExpense(values));
            } else {
                callErrorFunctions();
            }
        } else {
            callErrorFunctions();
        }
    };

    return (
        <div className="create-expense">
            <Form.Label>
                <Heading>Add Expense </Heading>
            </Form.Label>
            <Form className="create-expense-form m-4">
                <Form.Group className="mb-3" controlId="expenseName">
                    <Form.Label>Expense Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter expense name"
                        value={values["name"]}
                        onChange={onChangeFunctions["name"]}
                    />
                    <div className="errors">{errors["name"]}</div>
                </Form.Group>

                {/*<Form.Group className="mb-3" controlId="expenseIcon">*/}
                {/*    <Form.Label>Expense photo</Form.Label>*/}
                {/*    <Form.Control*/}
                {/*        type="file"*/}
                {/*        accept="image/*"*/}
                {/*        placeholder="Add expense icon"*/}
                {/*        onChange={onChangeFunctions["image"]}*/}
                {/*    />*/}
                {/*    <div className="errors">{errors["image"]}</div>*/}
                {/*</Form.Group>*/}

                <Form.Group className="mb-3" controlId="expenseAmount">
                    <Form.Label>Enter Amount:</Form.Label>
                    <Form.Control
                        type="numeric"
                        placeholder="Enter amount "
                        value={values["amount"]}
                        onChange={onChangeFunctions["amount"]}
                    />
                    <div className="errors">{errors["amount"]}</div>
                </Form.Group>
                <Form.Group className="mb-3 expense-type" controlId="expenseType">
                    <Form.Label>Expense Type</Form.Label>
                    <div>
                        <ButtonGroup
                            aria-label="Group Types"
                            onClick={onChangeFunctions["type"]}
                        >
                            <Button variant="secondary selected" value={values["type"]}>
                                Food
                            </Button>
                            <Button variant="secondary" value="trip">
                                Trip
                            </Button>
                            <Button variant="secondary" value="others">
                                Others
                            </Button>
                        </ButtonGroup>
                    </div>
                    <div className="errors">{errors["type"]}</div>
                </Form.Group>
                <Form.Group className="mb-3 expense-tag" controlId="expenseType">
                    <Form.Label>Tag</Form.Label>
                    <Select
                        name="tag_id"
                        options={tags}
                        onChange={onChangeFunctions["tag_id"]}
                    />
                    <div className="errors">{errors["type"]}</div>
                </Form.Group>
                <Form.Group className="mb-3" controlId="react-select-3-input">
                    <Form.Label>Available Groups</Form.Label>
                    <Select
                        name="colors"
                        options={group_id}
                        className="basic-multi-select"
                        classNamePrefix="select"
                        onChange={onChangeFunctions["group_id"]}
                    />
                    <div className="errors">{errors["group_id"]}</div>
                </Form.Group>
                {/*<Form.Group className="mb-3" controlId="react-select-3-input">*/}
                {/*    <Form.Label>Group Members</Form.Label>*/}
                {/*    <Select*/}
                {/*        isMulti*/}
                {/*        name="colors"*/}
                {/*        options={user_ids}*/}
                {/*        className="basic-multi-select"*/}
                {/*        classNamePrefix="select"*/}
                {/*        onChange={onChangeFunctions["user_ids"]}*/}
                {/*    />*/}
                {/*    <div className="errors">{errors["user_ids"]}</div>*/}
                {/*</Form.Group>*/}

                <div className="errors mb-3">{mainError}</div>
                <div className="d-flex justify-content-center">
                    <Button variant="primary" type="submit" onClick={submitForm}>
                        Submit
                    </Button>
                </div>
            </Form>
        </div>
    );
}

export {AddExepnse};
