import React, {useEffect, useRef, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {useDispatch, useSelector} from "react-redux";
import {usePrevious} from "react-use";
import {viewExpense} from "../../redux/actions";
import {useParams} from "react-router-dom";
import {isSuccessfulResponse, showError, showPopup} from "../../constants";
import axios from "axios";

export default function SettleExpense() {

    const {id} = useParams();

    const dispatch = useDispatch();

    const viewExpenseResponseData = useSelector(
        (state) => state.expense.viewExpenseResponseData
    );

    const isViewExpenseResponseReceived = useSelector(
        (state) => state.expense.isViewExpenseResponseReceived
    );

    const prevIsViewExpenseResponseReceived = usePrevious(isViewExpenseResponseReceived);

    const [currentExpense, setCurrentExpense] = useState({});

    useEffect(() => {
        dispatch(viewExpense(id));
    }, []);

    useEffect(() => {
        if (prevIsViewExpenseResponseReceived !== isViewExpenseResponseReceived && isSuccessfulResponse(viewExpenseResponseData)) {
            setCurrentExpense(viewExpenseResponseData['success'][0]);
        }
    }, [isViewExpenseResponseReceived]);


    const amount = useRef();

    const settleUp = () => {
        if (!amount.current.value) {
            showPopup("error", "Error", "Please Enter Amount")
        } else {
            if (amount.current.value > currentExpense.amount || amount.current.value < 0) {
                showPopup("error", "Error", `Please Enter Amount between the range 1 and ${currentExpense.amount} inclusive`)
            } else {
                axios.post("/api/settle-expense", {id, amount: amount.current.value}).then((ele) => {
                    showPopup("success", "Success", "Expense Successfully Updated", () => {
                        window.location.reload();
                    });
                }).catch((err) => {
                    showError(err);
                })
            }
        }
    };

    return (
        <div className="p-4">
            <h4>Settle the Expense</h4>
            <Form>
                <Form.Group className="mb-4">
                    <Form.Label>Enter the amount to be settled:</Form.Label>
                    <Form.Control type="text"
                                  placeholder="Enter amount"
                                  ref={amount}
                                  defaultValue={currentExpense.amount}/>
                </Form.Group>

                <Button variant="primary" type="button" onClick={settleUp}>
                    Settle Up!
                </Button>
            </Form>
        </div>
    );
}