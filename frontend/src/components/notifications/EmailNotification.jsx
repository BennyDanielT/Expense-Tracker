import {Heading} from "../Heading/Heading";
import {Button, Form} from "react-bootstrap";
import Select from "react-select";
import {useEffect, useState} from "react";
import Swal from "sweetalert2";
import {getUsers} from "../../redux/actions";
import {useDispatch, useSelector} from "react-redux";
import {usePrevious} from "react-use";
import {getUserFullName, isSuccessfulResponse, showError} from "../../constants";
import axios from "axios";

function EmailNotification() {

    const [values, setValues] = useState({notificationTypes: null, emailMembers: []});
    const [errors, setErrors] = useState({});
    const [mainNotificationTypeError, setMainNotificationTypeError] = useState("");
    const [mainCustomNotificationError, setMainCustomNotificationError] = useState("");

    const onChangeFunctions = {
        'notificationTypes': (e) => {
            setValues({
                ...values,
                notificationTypes: e
            });
            if (!e) {
                setErrors({
                    ...errors,
                    notificationTypes: "Notification Types are required"
                });
            } else {
                setErrors({
                    ...errors,
                    notificationTypes: null
                });
            }
        },
        'emailMembers': (e) => {
            setValues({
                ...values,
                emailMembers: e.map((ele) => ele.label)
            });
            if (!e.length) {
                setErrors({
                    ...errors,
                    emailMembers: "Email Users are required"
                });
            } else {
                setErrors({
                    ...errors,
                    emailMembers: null
                });
            }
        },
        'emailSubject': (e) => {
            const value = e.currentTarget.value;
            setValues({
                ...values,
                emailSubject: value
            });
            if (!value) {
                setErrors({
                    ...errors,
                    emailSubject: "Email Subject is required"
                });
            } else {
                setErrors({
                    ...errors,
                    emailSubject: null
                });
            }
        },
        'emailBody': (e) => {
            const value = e.currentTarget.value;
            setValues({
                ...values,
                emailBody: value
            });
            if (!value) {
                setErrors({
                    ...errors,
                    emailBody: "Email Body is required"
                });
            } else {
                setErrors({
                    ...errors,
                    emailBody: null
                });
            }
        }
    };

    const notificationTypes = [
        {
            label: "Even when I'm active",
            value: 1
        },
        {
            label: "Inactive for 5 mins",
            value: 2
        },
        {
            label: "Inactive for 30 mins",
            value: 3
        }
    ];


    const dispatch = useDispatch();
    const isUsersResponseReceived = useSelector((state) => state.group.isUsersResponseReceived);
    const usersResponseData = useSelector((state) => state.group.usersResponseData);
    const prevIsUsersResponseReceived = usePrevious(isUsersResponseReceived);

    const [users, setUsers] = useState([]);

    useEffect(() => {
        dispatch(getUsers());
    }, []);

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

    const submitEmailNotificationType = (e) => {
        const callErrorFunctions = () => {
            setMainNotificationTypeError("Enter all the form fields to continue!!");
        }
        e.preventDefault();
        if (Object.keys(values).length) {
            if (!values['notificationTypes']) {
                callErrorFunctions();
            } else {
                setMainNotificationTypeError("");
                Swal.fire(
                    'Sent',
                    'Notification Type preferences for email has been successfully updated',
                    'success'
                ).then((ele) => {
                    window.location.reload();
                });
                setValues({...values, emailMembers: [], emailSubject: null, emailBody: null});
            }
        } else {
            callErrorFunctions();
        }
    };

    const sendCustomEmailNotification = async (e) => {
        const callErrorFunctions = () => {
            setMainCustomNotificationError("Enter all the form fields to continue!!");
        }
        e.preventDefault();
        if (Object.keys(values).length) {
            if (!values['emailMembers'].length || !values['emailSubject'] || !values['emailBody']) {
                callErrorFunctions();
            } else {
                setMainCustomNotificationError("");
                axios.post("/api/send-custom-mail", values).then((ele) => {
                    Swal.fire(
                        'Sent',
                        'Email has been successfully sent',
                        'success'
                    );
                }).catch((err) => {
                    showError(err);
                });
                setValues({...values, notificationTypes: null});
            }
        } else {
            callErrorFunctions();
        }
    };

    return (
        <div>
            <Heading>Send Email Notifications</Heading>
            <Form className="m-4">
                {/*<div>*/}
                {/*    <h3>Email Notifications Types</h3>*/}
                {/*    <Form.Group className="mb-3" controlId="emailNotifications">*/}
                {/*        <Form.Label>Notifications Type</Form.Label>*/}
                {/*        <Select*/}
                {/*            name="notificationTypes"*/}
                {/*            options={notificationTypes}*/}
                {/*            className="basic-multi-select"*/}
                {/*            classNamePrefix="select"*/}
                {/*            onChange={onChangeFunctions['notificationTypes']}*/}
                {/*        />*/}
                {/*        <div className="errors">{errors['notificationTypes']}</div>*/}
                {/*    </Form.Group>*/}

                {/*    <div className="errors mb-3">{mainNotificationTypeError}</div>*/}

                {/*    <div className="d-flex justify-content-center">*/}
                {/*        <Button variant="primary" type="submit" onClick={submitEmailNotificationType}>*/}
                {/*            Save*/}
                {/*        </Button>*/}
                {/*    </div>*/}


                {/*</div>*/}

                <div>
                    <h3>Send Custom Email Notification</h3>

                    <Form.Group className="mb-3" controlId="customEmailNotification">
                        <Form.Label>Users</Form.Label>
                        <Select
                            isMulti
                            name="emailMembers"
                            options={users}
                            className="basic-multi-select"
                            classNamePrefix="select"
                            onChange={onChangeFunctions['emailMembers']}
                        />
                        <div className="errors">{errors['emailMembers']}</div>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="emailSubject">
                        <Form.Label>Email Subject</Form.Label>
                        <Form.Control type="text" placeholder="Enter email subject" value={values["emailSubject"]}
                                      onChange={onChangeFunctions['emailSubject']}/>
                        <div className="errors">{errors['emailSubject']}</div>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="emailBody">
                        <Form.Label>Email Body</Form.Label>
                        <Form.Control as="textarea" rows={5} placeholder="Enter email body" value={values["emailBody"]}
                                      onChange={onChangeFunctions['emailBody']}/>
                        <div className="errors">{errors['emailBody']}</div>
                    </Form.Group>

                    <div className="errors mb-3">{mainCustomNotificationError}</div>

                    <div className="d-flex justify-content-center">
                        <Button variant="primary" type="submit" onClick={sendCustomEmailNotification}>
                            Send Custom Email Notification
                        </Button>
                    </div>

                </div>
            </Form>
        </div>
    );
}

export {EmailNotification};