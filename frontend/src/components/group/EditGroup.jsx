/**
 * @author ${abhishekuppe}
 */

import {useHistory, useLocation, useParams} from "react-router-dom";
import {Heading} from "../Heading/Heading";
import {Button, Form} from "react-bootstrap";
import {useEffect, useState} from "react";
import Select from "react-select";
import {editGroup, getUsers, viewGroup} from "../../redux/actions";
import {useDispatch, useSelector} from "react-redux";
import {usePrevious} from "react-use";
import {getUserFullName, imgToBase64, isSuccessfulResponse, routes, showPopup} from "../../constants";

function EditGroup() {
    const location = useLocation();

    const [mainError, setMainError] = useState("");

    const [values, setValues] = useState({name: null, users: [], icon: null});
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
        'users': (e) => {
            setValues({
                ...values,
                users: e
            });
        }
    };

    const history = useHistory();

    const dispatch = useDispatch();

    const {id} = useParams();

    useEffect(() => {
        dispatch(getUsers());
        dispatch(viewGroup(id));
    }, []);

    const viewGroupResponseData = useSelector(
        (state) => state.group.viewGroupResponseData
    );

    const isViewGroupResponseReceived = useSelector(
        (state) => state.group.isViewGroupResponseReceived
    );

    const prevIsViewGroupResponseReceived = usePrevious(isViewGroupResponseReceived);

    useEffect(() => {
        if (prevIsViewGroupResponseReceived !== isViewGroupResponseReceived && isSuccessfulResponse(viewGroupResponseData)) {
            const data = viewGroupResponseData['success'][0];
            const users = [];
            data.users.forEach((ele) => {
                users.push({label: getUserFullName(ele), value: ele.user_id});
            });
            setValues({...values, name: data.name, users});
        }
    }, [isViewGroupResponseReceived]);

    const isUsersResponseReceived = useSelector((state) => state.group.isUsersResponseReceived);
    const usersResponseData = useSelector((state) => state.group.usersResponseData);
    const prevIsUsersResponseReceived = usePrevious(isUsersResponseReceived);

    const [users, setUsers] = useState([]);

    useEffect(() => {
        if (prevIsUsersResponseReceived !== undefined && isUsersResponseReceived !== prevIsUsersResponseReceived) {
            if (isSuccessfulResponse(usersResponseData)) {
                const array = [];
                usersResponseData['success'].forEach((ele) => {
                    array.push({label: getUserFullName(ele), value: ele.user_id});
                });
                setUsers(array);
            }
        }
    }, [isUsersResponseReceived]);

    const editGroupResponseData = useSelector(
        (state) => state.group.editGroupResponseData
    );

    const isEditGroupResponseReceived = useSelector(
        (state) => state.group.isEditGroupResponseReceived
    );

    const prevIsEditGroupResponseReceived = usePrevious(isEditGroupResponseReceived);

    useEffect(() => {
        if (prevIsEditGroupResponseReceived !== isEditGroupResponseReceived && prevIsEditGroupResponseReceived !== undefined) {
            if (isSuccessfulResponse(editGroupResponseData)) {
                showPopup("success", "Success", "Group Edited Successfully");
                history.push(routes.group.path);
            }
        }
    }, [isEditGroupResponseReceived]);

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
                    values['user_ids'] = values['users'].map((ele) => ele.value);
                    dispatch(editGroup(id, values));
                });
            } else {
                callErrorFunctions();
            }
        } else {
            callErrorFunctions();
        }
    };

    return (
        <div className="edit-group p-4">
            <Form.Label><Heading>Edit Group {values.name}</Heading></Form.Label>
            <Form>
                <Form.Group className="mb-3" controlId="groupName">
                    <Form.Label>Group Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter group name" value={values["name"]}
                                  onChange={onChangeFunctions['name']}/>
                    <div className="errors">{errors['name']}</div>
                </Form.Group>

                <Form.Group className="mb-3" controlId="groupIcon">
                    <Form.Label>Group Icon</Form.Label>
                    <Form.Control type="file" accept="image/*" placeholder="Add group icon"
                                  onChange={onChangeFunctions['icon']}
                                  alt="group"
                                  width={40} height={40}/>
                    <div className="errors">{errors['icon']}</div>
                </Form.Group>

                <Form.Group className="mb-3" controlId="react-select-3-input">
                    <Form.Label>Group Members</Form.Label>
                    <Select
                        isMulti
                        name="colors"
                        options={users}
                        value={values.users}
                        className="basic-multi-select"
                        classNamePrefix="select"
                        onChange={onChangeFunctions['users']}
                    />
                    <div className="errors">{errors['users']}</div>
                </Form.Group>

                <div className="errors mb-3">{mainError}</div>

                <div className="d-flex justify-content-center">
                    <Button className="mt-4" onClick={submitForm}>
                        Edit Group {values.name}
                    </Button>
                </div>
            </Form>
        </div>
    )
}

export {EditGroup}