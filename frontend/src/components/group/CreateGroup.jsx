import {useId, useState} from "react";
import {Button, ButtonGroup, Form} from "react-bootstrap";
import Select from "react-select";
import {getLocalStorage, routes, setLocalStorage} from "../../constants";
import Swal from "sweetalert2";
import {useHistory} from "react-router-dom";
import "./group.css";
import {Heading} from "../Heading/Heading";
import {dummyMembersData} from "./helpers";

function CreateGroup() {
    const [values, setValues] = useState({name: "", icon: "", type: "home", members: null});
    const [errors, setErrors] = useState({});
    const [mainError, setMainError] = useState("");
    const history = useHistory();
    const uniqueId = useId();

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
        'members': (e) => {
            setValues({
                ...values,
                members: e.map((ele) => ele.value)
            });
        }
    }

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
                const groups = getLocalStorage("groups")
                let newGroups = [];
                if (groups) {
                    newGroups = JSON.parse(groups);
                }
                newGroups.push({[uniqueId]: values});
                setLocalStorage("groups", JSON.stringify(newGroups));
                Swal.fire(
                    'Group Created',
                    'New Group is created',
                    'success'
                ).then((ele) => {
                    setTimeout(() => {
                        history.push(routes.group.path);
                    }, 100);
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
                        name="members"
                        options={dummyMembersData}
                        className="basic-multi-select"
                        classNamePrefix="select"
                        onChange={onChangeFunctions['members']}
                    />
                    <div className="errors">{errors['members']}</div>
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