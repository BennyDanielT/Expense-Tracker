/**
 * @author ${abhishekuppe}
 */

import {useEffect, useState} from "react";
import {Button, ButtonGroup, Form} from "react-bootstrap";
import Select from "react-select";
import "../../css/group.css";
import {Heading} from "../Heading/Heading";
import {useDispatch, useSelector} from "react-redux";
import {createGroup, getUsers} from "../../redux/actions";
import {getUserFullName, imgToBase64, isSuccessfulResponse, routes, showPopup} from "../../constants";
import {useHistory} from "react-router-dom";
import {usePrevious} from "react-use";

// The component purpose is to create a group with all the form details entered by the user
function CreateGroup() {
    const [values, setValues] = useState({name: "", icon: "", type: "home", user_ids: null});
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
        'user_ids': (e) => {
            setValues({
                ...values,
                user_ids: e.map((ele) => ele.value)
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

    // show the success message only if create group response is received successfully
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

    // useEffect after the users api is successful
    useEffect(() => {
        if (isSuccessfulResponse(usersResponseData)) {
            const array = [];
            usersResponseData['success'].forEach((ele) => {
                array.push({label: getUserFullName(ele), value: ele.id});
            });
            setUsers(array);
        }
    }, [isUsersResponseReceived]);

    const submitForm = (e) => {

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
                imgToBase64(values['icon'], (res) => {
                    values['icon'] = res;
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
        <div className="create-group">
            <Form.Label><Heading>Create Group</Heading></Form.Label>
            <Form className="create-group-form m-4">
                <Form.Group className="mb-3" controlId="groupName">
                    <Form.Label>Group Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter group name" value={values["name"]}
                                  onChange={onChangeFunctions['name']}/>
                    <div className="errors">{errors['name']}</div>
                </Form.Group>
                <Form.Group className="mb-3" controlId="groupIcon">
                    <Form.Label>Group Icon</Form.Label>
                    <Form.Control type="file" accept="image/*" placeholder="Add group icon"
                                  onChange={onChangeFunctions['icon']}/>
                    <div className="errors">{errors['icon']}</div>
                </Form.Group>
                <Form.Group className="mb-3 group-type" controlId="groupType">
                    <Form.Label>Group Type</Form.Label>
                    <div>
                        <ButtonGroup aria-label="Group Types" onClick={onChangeFunctions['type']}>
                            <Button variant="secondary selected" value={values["type"]}>Home</Button>
                            <Button variant="secondary" value="trip">Trip</Button>
                            <Button variant="secondary" value="others">Others</Button>
                        </ButtonGroup>
                    </div>
                    <div className="errors">{errors['type']}</div>
                </Form.Group>
                <Form.Group className="mb-3" controlId="react-select-3-input">
                    <Form.Label>Group Members</Form.Label>
                    <Select
                        isMulti
                        name="user_ids"
                        options={users}
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

export {CreateGroup};