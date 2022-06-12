import {useHistory, useLocation} from "react-router-dom";
import {Heading} from "./Heading";
import "./group.css";
import {Button, Card} from "react-bootstrap";
import Swal from "sweetalert2";
import {routes} from "../../constants";

function DeleteGroup() {
    const location = useLocation();

    const values = location.state;

    let expenses;
    if (values.expenses.owed) {
        expenses = <div>Total Expenses owed : <b>{values.expenses.owed}</b></div>
    } else if (values.expenses.lent) {
        expenses = <div>Total Expenses lent : <b>{values.expenses.lent}</b></div>
    } else {
        expenses = <div>Hurray !! No expenses</div>
    }

    const history = useHistory();

    const deleteGroup = () => {
        Swal.fire({
            title: `Are you sure want to delete ${values.name}?`,
            text: "You won't be able to revert!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Delete'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'Your group has been deleted.',
                    'success'
                ).then(() => {
                    history.push(routes.group.path);
                })
            }
        })
    }

    return (
        <div className="delete-group p-4">
            <Heading>Delete Group</Heading>
            <div className="mt-4 mb-4">You are about to delete the group <b>{values.name} </b>
                with the following details
            </div>
            <Card className="p-2 mb-4">
                <div>
                    <div>The group has the following members. If you delete the group all the group members will be
                        automatically removed.
                    </div>

                    <ul>
                        {values.members.map((member) => {
                            return (
                                <li key={member}>
                                    <b>{member}</b>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </Card>

            <Card className="p-2 mb-4">
                <div>
                    <div className="mb-2">The group expenses are as following. If you delete the group all the expenses
                        will
                        be
                        deleted.
                    </div>
                    <div>{expenses}</div>
                </div>
            </Card>


            <Card className="p-2">
                <div>
                    <div>Detailed Report of Expenses</div>
                    {values.expenses?.details.map((expense, index) => {
                        const key = <span><b>{Object.keys(expense)[0]}</b></span>
                        let value;
                        if (Object.values(expense)[0].lent) {
                            value = <span>+{Object.values(expense)[0].lent}</span>
                        } else {
                            value = <span>-{Object.values(expense)[0].owed}</span>
                        }

                        return (
                            <div key={index} className="d-flex justify-content-between">
                                <div style={{marginRight: "10px !important"}}>
                                    {key}
                                </div>
                                <div>
                                    {value}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </Card>

            <Button variant="danger" className="mt-4" onClick={deleteGroup}>
                Delete {values.name}
            </Button>
        </div>
    )
}

export {DeleteGroup}