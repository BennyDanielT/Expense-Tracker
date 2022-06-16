import {useState} from 'react';
import {Button, Form} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import {useHistory} from "react-router-dom";
import {routes} from "../../constants";
import {Alert, Snackbar} from "@mui/material";
import DatePicker from "react-datepicker";


// Reference : https://www.npmjs.com/package/react-datetime-picker
export default function CreateReminder() {

    const [reminderName, setReminderName] = useState('');
    const [reminderAmount, setReminderAmount] = useState('');
    const [reminderDesc, setReminderDesc] = useState('');
    const [date, setDate] = useState(new Date());
    const [validated, setValidated] = useState(false);
    const [snackbar, setSnackbar] = useState({message:"", severity:"success", visibility:false});

    const history = useHistory();

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


    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            // set validations and navigate to reminders list
            setSnackbar({message:"Payment Reminder Successfully Created!", severity:"success", visibility:true});
            history.push(routes.reminders.path)
        }

        setValidated(true);

    };

    const handleChange = (newValue) => {
        setDate(newValue);
    };
    return (
        <div className="container-fluid col-md-6 col-12 col-sm-10 mt-4 p-4" style={{backgroundColor: 'white'}}>
            <h1 align="center"> Create Payment Reminder </h1>

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
                    <DatePicker
                        showTimeSelect
                        selected={date}
                        onChange={setDate}
                        dateFormat="Pp"
                    />
                </Form.Group>

                <Button className="mt-3" type="submit">Submit</Button>

            </Form>

            <Snackbar anchorOrigin={{ vertical:"top", horizontal:"right" }}
                      open={snackbar.visibility} autoHideDuration={3000} onClose={()=> setSnackbar({message:"", severity:"success", visibility: false})}>
                <Alert onClose={()=> setSnackbar({message:"", severity:"success", visibility: false})} severity={snackbar.severity} sx={{ width: '100%' }}>
                    {snackbar.message}
                </Alert>
            </Snackbar>

        </div>
    );
}
