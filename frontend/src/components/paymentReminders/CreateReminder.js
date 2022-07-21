/**
 * @author ${Vatsal Yadav}
 */

import {useState, useEffect} from 'react';
import {Button, Form} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import {useHistory} from "react-router-dom";
import {Alert, Snackbar} from "@mui/material";
import DatePicker from "react-datepicker";
import {useDispatch, useSelector} from "react-redux";
import {createReminder} from "../../redux/actions";
import {isSuccessfulResponse, routes, showPopup} from "../../constants";
import {usePrevious} from "react-use";
import {useAuth} from "../../contexts/Auth";
import {supabase} from "../../supabase";

// The component purpose is to create a new payment reminder with reminder details added by the user
export default function CreateReminder() {

    const [reminderName, setReminderName] = useState('');
    const [reminderAmount, setReminderAmount] = useState('');
    const [reminderDesc, setReminderDesc] = useState('');
    const [date, setDate] = useState(new Date());
    const [validated, setValidated] = useState(false);
    const {user} = useAuth();
    const history = useHistory();


    // Validate payment reminder details
    const handleReminderName = (e) => {
        if (e.target.value.match(/^[a-zA-Z0-9 ]*$/)) {
            setReminderName(e.target.value);
        }
    };

    const handleReminderAmount = (e) => {
        if (e.target.value.match(/^[0-9.]*$/)) {
            setReminderAmount(e.target.value);
        }
    };

    const handleReminderDesc = (e) => {
        if (e.target.value.match(/^[a-zA-Z0-9 ]*$/)) {
            setReminderDesc(e.target.value);
        }
    };


    const dispatch = useDispatch();

    const createReminderResponseData = useSelector(
        (state) => {
            return state.reminder.createReminderResponseData
        }
    );

    const isCreateReminderResponseReceived = useSelector(
        (state) => {
            return state.reminder.isCreateReminderResponseReceived
        }
    );

    const prevIsCreateReminderResponseReceived = usePrevious(isCreateReminderResponseReceived);

    // show the success message only if create reminder response is received successfully
    useEffect(() => {
        if (prevIsCreateReminderResponseReceived !== undefined && prevIsCreateReminderResponseReceived !== isCreateReminderResponseReceived) {
            if (isSuccessfulResponse(createReminderResponseData)) {
                showPopup("success", "Success", "Payment Reminder Successfully Created");
                history.replace(routes.reminders.path);
            }
        }
    }, [isCreateReminderResponseReceived]);

    // Submit validated details to create a new payment reminder
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        event.stopPropagation();
        if(date <= new Date()){
            alert("Reminder cannot be set in past.")
        }
        else if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            dispatch(createReminder({name: reminderName, amount: reminderAmount, user_id: user().user.identities[0].id, desc: reminderDesc, date: date, email: supabase.auth.user().email}));
        }

        setValidated(true);

    };

    // Code Reference [5]: https://stackoverflow.com/questions/59826534/react-datepicker-mintime-and-maxtime-not-works
    // filter the selected time that is passed
    const filterPassedTime = (time) => {
        const currentDate = new Date();
        const selectedDate = new Date(time);

        return currentDate.getTime() < selectedDate.getTime();
    };

    return (
        <div className="container-fluid col-md-6 col-12 col-sm-10 mt-4 p-4" style={{backgroundColor: 'white'}}>
            <h1 align="center"> Create Payment Reminder </h1>
            {/* Form for creating a new payment reminder */}

            <Form noValidate validated={validated} onSubmit={handleSubmit}>

                <Form.Group controlId="reminderName">
                    <Form.Label className="mt-2">Reminder Name</Form.Label>
                    <Form.Control required onChange={handleReminderName} value={reminderName} type="text"
                                  placeholder="Reminder Name"
                                  maxLength="50"
                    />
                    <Form.Control.Feedback type="invalid">
                        Please provide a reminder name
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mt-2" controlId="reminderAmount">
                    <Form.Label>Amount</Form.Label>
                    <Form.Control
                        required
                        onChange={handleReminderAmount} value={reminderAmount}
                        type="number"
                        min="0"
                        max="99999"
                        placeholder="Amount"
                        maxLength="5"
                    />
                    <Form.Control.Feedback type="invalid">
                        Amount should be between 0 and 99,999
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mt-2" controlId="reminderDesc">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        onChange={handleReminderDesc} value={reminderDesc}
                        type="text"
                        placeholder="Description"
                        required
                        as="textarea" rows={3}
                        maxLength="200"
                    />
                    <Form.Control.Feedback type="invalid">
                        Please provide a reminder description
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="date">
                    <Form.Label className="mt-1">Time</Form.Label>
                    {/*Reference: https://www.npmjs.com/package/react-datetime-picker*/}
                    <DatePicker
                        showTimeSelect
                        selected={date}
                        onChange={setDate}
                        minDate={new Date()}
                        filterTime={filterPassedTime}
                        dateFormat="Pp"
                    />
                </Form.Group>

                <Button className="mt-3" type="submit">Submit</Button>

            </Form>

        </div>
    );
}
