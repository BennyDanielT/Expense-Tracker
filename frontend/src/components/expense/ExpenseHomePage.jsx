import {routes} from "../../constants";
import {Button, Form} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import "../../css/expense.css";
import {Heading} from "../Heading/Heading";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {viewExpenses} from "../../redux/actions";
import {useAuth} from "../../contexts/Auth";
import {usePrevious} from "react-use";
import {Loading} from "../Loading";

function ExpenseHomePage() {

    const history = useHistory();

    const dispatch = useDispatch();

    const user = useAuth();


    const [expenses, setExpenses] = useState([]);

    const isViewExpensesResponseReceived = useSelector(
        (state) => state.expense.isViewExpensesResponseReceived
    );

    const viewExpensesResponseData = useSelector(
        (state) => state.expense.viewExpensesResponseData
    );

    const prevIsViewExpensesResponseReceived = usePrevious(isViewExpensesResponseReceived);


    useEffect(() => {
        if (prevIsViewExpensesResponseReceived !== undefined && prevIsViewExpensesResponseReceived !== isViewExpensesResponseReceived) {
            setExpenses(viewExpensesResponseData.success);
        }
    }, [isViewExpensesResponseReceived]);

    useEffect(() => {
        dispatch(viewExpenses(user.user().user.id));
    }, []);


    const onClickLink = (e, currentExpense) => {
        e.preventDefault();
        history.push(routes.viewExpense.path.split(":")[0] + currentExpense.id);
    };

    return (
        <div className="groups-home">
            <Form.Label><Heading>Expenses</Heading></Form.Label>
            <div className="current-groups m-4">
                <div className="mb-4 mt-4"><b>Current Expenses</b></div>
                {!isViewExpensesResponseReceived ? <Loading/> :
                    expenses.length ? expenses.map((expense) => {
                        return (
                            <div key={expense.name} className="m-2">
                                <a href={"#"} onClick={(e) => onClickLink(e, expense)}>
                                    {expense.name}
                                </a>
                            </div>
                        )
                    }) : <div>Oops!! No expenses to show. Create expense by clicking the button below</div>

                }
                <Button variant="primary" className="mt-4" type="click"
                        onClick={() => history.push(routes.addExpense.path)}>
                    Add Expense
                </Button>
            </div>

        </div>
    )
}

export {ExpenseHomePage};