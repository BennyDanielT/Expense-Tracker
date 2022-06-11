import {useState} from 'react';
import {Button, Form} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import DateTimePicker from 'react-datetime-picker';


// Reference : https://www.npmjs.com/package/react-datetime-picker
export default function CreateReminder() {

    const [reminderName, setReminderName] = useState('');
    const [reminderAmount, setReminderAmount] = useState('');
    const [reminderDesc, setReminderDesc] = useState('');
    const [date, setDate] = useState(new Date());

    const [validation, setValidation] = useState({isValid: true, errorMessage: ''});

    const handleReminderName = (e) => {
        setReminderName(e.target.value);
        setValidation({isValid: false, errorMessage: ''})
    };

    const handleReminderAmount = (e) => {
        setReminderAmount(e.target.value);
        setValidation({isValid: false, errorMessage: ''})
    };

    const handleReminderDesc = (e) => {
        setReminderDesc(e.target.value);
        setValidation({isValid: false, errorMessage: ''})
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(date)

        // set validations and navigate to reminders list

    };

    return (
        <div className="container-fluid col-md-6 mt-4 p-4" style={{backgroundColor: 'white'}}>
            <h1 align="center"> Create Payment Reminder </h1>

            <Form noValidate onSubmit={handleSubmit}>

                <Form.Group controlId="reminderName">
                    <Form.Label className="mt-2">Reminder Name</Form.Label>
                    <Form.Control onChange={handleReminderName} value={reminderName} type="text"
                                  placeholder="Reminder Name"
                    />
                </Form.Group>
                <Form.Group controlId="reminderAmount">
                    <Form.Label className="mt-2">Amount</Form.Label>
                    <Form.Control
                        onChange={handleReminderAmount} value={reminderAmount}
                        type="number"
                        min="0"
                        max="50000"
                        placeholder="Amount"
                    />
                    <Form.Control.Feedback type="invalid">
                        Amount should be between 0 and 50,000
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="reminderDesc">
                    <Form.Label className="mt-2">Description</Form.Label>
                    <Form.Control
                        onChange={handleReminderDesc} value={reminderDesc}
                        type="text"
                        placeholder="Description"
                    />
                    <Form.Control.Feedback type="invalid">
                        Description should be only letters
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="date">
                    <Form.Label className="mt-2">Time</Form.Label>
                    <DateTimePicker className="form-control" onChange={setDate} minDate={new Date()} value={date}/>

                </Form.Group>


                <Form.Group>
                    <label hidden={validation.isValid} className="mt-2 text-red-600">
                        {validation.errorMessage}
                    </label>
                </Form.Group>

                <Button className="mt-2" type="submit">Submit</Button>

            </Form>
        </div>
    );
}
