import "../../css/expense.css";
import {Heading} from "../Heading/Heading";
import {Button, Card} from "react-bootstrap";
import {useHistory, useParams} from "react-router-dom";
import {isSuccessfulResponse, routes} from "../../constants";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {viewExpense} from "../../redux/actions";
import {usePrevious} from "react-use";
import {Loading} from "../Loading";
import Swal from "sweetalert2";

function ViewExpense() {

    const history = useHistory();

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

    const editExpense = (currentExpense) => {
        history.push({pathname: routes.editExpense.path.split(":")[0] + currentExpense.id});
    };

    const deleteExpense = (currentExpense) => {

    };

    console.log(currentExpense);

    return (
        <div className="view-expense">
            <Heading>View Detailed Expense</Heading>
            <h2 className="mt-4 text-center">Expenses</h2>
            <div className="m-5">
                {!isViewExpenseResponseReceived ? <Loading/> :
                    <Card className="p-2 mb-3">
                        <div>
                            <h4>{currentExpense.name}</h4>
                        </div>
                        <div>
                            <h5>Users for expenses</h5>
                            <ul>
                                {currentExpense?.users?.map((user) => {
                                    return (
                                        <li key={user}>{user}</li>
                                    )
                                })}
                            </ul>
                        </div>

                        <div>
                            <h5>Groups related to expenses</h5>
                            <ul>
                                {currentExpense?.groups?.map((group) => {
                                    return (
                                        <li key={group}>{group}</li>
                                    )
                                })}
                            </ul>
                        </div>
                        <div className="d-flex justify-content-evenly">
                            <Button className="mt-2" onClick={() => history.push(routes.settleExpense.path)}>
                                Settle Up
                            </Button>
                            <Button className="mt-2" onClick={() => editExpense(currentExpense)}>
                                Edit Expense
                            </Button>
                            <Button className="mt-2" onClick={() => Swal.fire({
                                title: 'Are you sure?',
                                text: "You won't be able to revert this!",
                                icon: 'warning',
                                showCancelButton: true,
                                confirmButtonColor: '#3085d6',
                                cancelButtonColor: '#d33',
                                confirmButtonText: 'Yes, delete it!'
                            })}>
                                Delete Expense
                            </Button>
                        </div>
                    </Card>

                }
            </div>
        </div>
    )
}

export {ViewExpense}