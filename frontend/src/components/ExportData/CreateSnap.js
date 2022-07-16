import {useState} from 'react';
import {Alert, Button, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import DateTimePicker from 'react-datetime-picker';
import "../../css/CreateSnap.css";
import DatePicker from "react-datepicker";
import ReactDOMServer from "react-dom/server";
import Swal from "sweetalert2";



// Reference : https://www.npmjs.com/package/react-datetime-picker
export default function CreateSnap() {
    const [accountCategory, setAccountCategory] = useState('');
    const [balance, setBalance] = useState('');
    const [date, setDate] = useState(new Date());
    let minDate = new Date();
    minDate.setFullYear(minDate.getFullYear() - 10);

    const [validation, setValidation] = useState({
        isValid: true,
        errorMessage: '',
    });

    const handleAccount = (e) => {
        setAccountCategory(e.target.value);
    }

    const handleBalance = (e) => {
        setBalance(e.target.value);
        setValidation({isValid: false, errorMessage: ''});
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(date);

    };
    const alertUser = () => {
        let title, account,amount;
        
        // amount = <div className="lent"><b>Balance: {balance}</b></div>;
        // account = <div className="lent"><b>Account: {accountCategory}</b></div>;
    
        // amount = ReactDOMServer.renderToString(amount);
        // account = ReactDOMServer.renderToString(account);
    
        Swal.fire({
            title: `New Snap Created !`,
            icon: 'success',
            cancelButtonText:'Back',
            showCloseButton: true,
            showDenyButton: false,
            showConfirmButton: false,
            showCancelButton:true,
            preDeny() {
                Swal.fire(
                    'Deleted!',
                    'Snapshot has been deleted.',
                    'success'
                );
            }
        })
    }

    return (
        <div
            className='container-fluid col-md-6 mt-4 p-4'
            style={{backgroundColor: 'white'}}
        >
            <Alert variant='success'>
                <Alert.Heading className='text-center'>Create a Snapshot</Alert.Heading>
                <hr/>
                <p>
                    Input the date corresponding to which you want to create a snapshot,
                    your account detail and balance.
                </p>
            </Alert>
            <Form noValidate onSubmit={handleSubmit}>
                <Form.Group className='mt-3' controlId='date'>
                    <mark><Form.Label className='mt-2'>Date & Time</Form.Label></mark>
                    <DatePicker
                        showTimeSelect
                        selected={date}
                        onChange={setDate}
                        dateFormat="Pp"
                    />
                </Form.Group>

                <Form.Group className='mt-3' controlId='accountCategory'>
                    <mark><Form.Label className='mt-2'>Account Category</Form.Label></mark>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"
                               checked onChange={handleAccount}/>
                        <label class="form-check-label" for="flexRadioDefault1">
                            Current
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"
                               onChange={handleAccount}/>
                        <label class="form-check-label" for="flexRadioDefault2">
                            Savings
                        </label>
                    </div>
                </Form.Group>

                <Form.Group className='mt-3' controlId='balance'>
                    <mark><Form.Label className='mt-2'>Balance</Form.Label></mark>
                    <Form.Control
                        onChange={handleBalance}
                        value={balance}
                        type='number'
                        min='0'
                        max='50000'
                        placeholder='Amount'
                    />
                    <Form.Control.Feedback type='invalid'>
                        Balance should be a number between 0 and 1,000,000
                    </Form.Control.Feedback>
                </Form.Group>
                <Button className='mt-2 end' type='submit' onClick={() => alertUser()}>
                    Submit
                </Button>


            </Form>
        </div>
    );
}


