import "../../css/expense.css";
import {Heading} from "../Heading/Heading";
import {Button, Card} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import {routes} from "../../constants";
import Swal from "sweetalert2";

function ViewExpense() {

    const json = {
        results: [
            {
                "id": 1,
                "name": "Expense 1",
                "expenses": {
                    "owed": "10.5",
                    "details": [
                        {
                            "milk": {
                                "lent": "2.10"
                            }
                        },
                        {
                            "birthday": {
                                "owed": "12.15"
                            }
                        }
                    ]
                },
                "members": ["foo", "bar"],
                
            },
            {
                "id": 2,
                "name": "Expense 2",
                "expenses": {
                    "lent": "20.5",
                    "details": [
                        {
                            "chocolates": {
                                "lent": "10.5"
                            }
                        },
                        {
                            "biscuits": {
                                "lent": "5"
                            }
                        },
                        {
                            "chips": {
                                "lent": "5"
                            }
                        }
                    ]
                },
                "members": ["foo"],
                
            },
            {
                "id": 3,
                "name": "Expense 3",
                "expenses": {},
                "members": ["bar"],
                
            },
        ]
    };

    const history = useHistory();

    const editExpense = (currentExpense) => {
        history.push({pathname: routes.editExpense.path, state: currentExpense});
    };

    const settleExpense = (currentExpense) => {
        history.push({pathname: routes.settleExpense.path, state: currentExpense});
    };



    return (
        <div className="view-group">
            <Heading>View Expense</Heading>
            <h2 className="mt-4 text-center">Members and Expenses</h2>
            <div className="m-5">
                {json.results.map((result) => {
                    return (
                        <Card key={result.id} className="p-2 mb-3">
                            <div className="d-flex flex-row justify-content-between p-3">
                                <div>
                                    <div><h4>{result.name}</h4></div>
                                    <div>
                                        <div>Current Expense Members</div>
                                        <ul>
                                            {result.members.map((member) => {
                                                return (
                                                    <li key={member}>{member}</li>
                                                )
                                            })}
                                        </ul>
                                        
                                    </div>
                                </div>
                                <div>
                                    <div>{!result.expenses.owed && !result.expenses.lent ?
                                        <div className="settled-up">{"Hurray !! All settled up"}</div> :
                                        result.expenses.owed ?
                                            <div className="owed">{"Expense owed : " + result.expenses.owed}</div> :
                                            <div
                                                className="lent">{"Expense lent : " + result.expenses.lent}</div>}</div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-evenly">
                                <Button className="mt-2" onClick={()=> settleExpense(result)}>
                                    Settle Up
                                </Button>
                                <Button className="mt-2" onClick={() => editExpense(result)}>
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
                    )
                })}
            </div>
        </div>
    )
}

export {ViewExpense}