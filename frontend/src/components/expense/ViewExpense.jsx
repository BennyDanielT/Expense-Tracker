import "./expense.css";
import {Heading} from "../Heading/Heading";
import {Button, Card} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import {routes} from "../../constants";
import {useEffect, useState} from "react";
import {  useParams} from "react-router-dom";
import {getUserFullName, isSuccessfulResponse} from "../../constants";
import {useDispatch, useSelector} from "react-redux";
import {viewExpense} from "../../redux/actions";
import {usePrevious} from "react-use";
import {Loading} from "../Loading";
import {useAuth} from "../../contexts/Auth";
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

    const {user} = useAuth();

    useEffect(() => {
        dispatch(viewExpense(id, user().user.identities[0].user_id));
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
        history.push({pathname: routes.deleteExpense.path.split(":")[0] + currentExpense.id});
    };


    return (
        <div className="view-expense">
            <Heading>View Expense</Heading>
            <h2 className="mt-4 text-center">Members and Expenses</h2>
            <div className="m-5">
            {!isViewExpenseResponseReceived ? <Loading/> :
                    
                        <Card  className="p-2 mb-3">
                            <div className="d-flex flex-row justify-content-between p-3">
                                <div>
                                    <div><h4>{currentExpense.name}</h4></div>
                                    <div><img src={`data:image/jpeg;base64, ${currentExpense.image}`} alt="expense"
                                              width={40} height={40}/></div>
                                    <div>
                                        <div>Current Expense Members</div>

                                        <ul>
                                        {currentExpense?.users?.map((user) => {
                                            return (
                                                <li key={user.id}>{getUserFullName(user)}</li>
                                            )
                                        })}
                                        </ul>
                                        
                                    </div>
                                </div>
                                <div>
                                <div>{!currentExpense?.expenses?.lent.length && !currentExpense?.expenses?.owed.length ?
                                    <div className="settled-up">{"Hurray !! All settled up"}</div> :
                                    currentExpense?.expenses?.owed.length ?
                                        <div
                                            className="owed">{"Expense owed : " + currentExpense?.expenses?.owed.map((ele) => ele.amount).reduce((ele, ind) => ele + ind)}</div> :
                                        <div
                                            className="lent">{"Expense lent : " + currentExpense?.expenses?.lent.map((ele) => ele.amount).reduce((ele, ind) => ele + ind)}</div>}</div>
                                </div>
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
                                        }) }>
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