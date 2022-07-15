/**
 * @author ${abhishekuppe}
 */

import {useHistory, useParams} from "react-router-dom";
import {Heading} from "../Heading/Heading";
import "../../css/group.css";
import {Button, Card} from "react-bootstrap";
import Swal from "sweetalert2";
import {getUserFullName, isSuccessfulResponse, routes, showPopup} from "../../constants";
import {useEffect, useState} from "react";
import {deleteGroup, viewGroup} from "../../redux/actions";
import {useDispatch, useSelector} from "react-redux";
import {usePrevious} from "react-use";
import {Loading} from "../Loading";
import {useAuth} from "../../contexts/Auth";

// The component purpose is to delete a group with particular id. The user is also prompted with all the details before deleting the group.
function DeleteGroup() {

    const [expenses, setExpenses] = useState();
    const [detailedExpenses, setDetailedExpenses] = useState();


    const history = useHistory();

    const isDeleteGroupResponseReceived = useSelector(
        (state) => state.group.isDeleteGroupResponseReceived
    );

    const deleteGroupResponseData = useSelector(
        (state) => state.group.deleteGroupResponseData
    );

    const prevIsDeleteGroupResponseReceived = usePrevious(isDeleteGroupResponseReceived);

    useEffect(() => {
        if (prevIsDeleteGroupResponseReceived !== undefined && prevIsDeleteGroupResponseReceived !== isDeleteGroupResponseReceived && isSuccessfulResponse(deleteGroupResponseData)) {
            showPopup("success", "Success", "Group Successfully Deleted");
            history.push(routes.group.path);
        }
    }, [isDeleteGroupResponseReceived]);

    const deleteGroupPopUp = () => {
        Swal.fire({
            title: `Are you sure want to delete ${groupDetails?.name}?`,
            text: "You won't be able to revert!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Delete'
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(deleteGroup(id));
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

    const [groupDetails, setGroupDetails] = useState({});

    const {id} = useParams();

    const viewGroupResponseData = useSelector(
        (state) => state.group.viewGroupResponseData
    );

    const isViewGroupResponseReceived = useSelector(
        (state) => state.group.isViewGroupResponseReceived
    );

    const prevIsViewGroupResponseReceived = usePrevious(isViewGroupResponseReceived);

    const dispatch = useDispatch();

    const {user} = useAuth();

    useEffect(() => {
        dispatch(viewGroup(id, user().user.identities[0].user_id));
    }, []);

    useEffect(() => {
        if (prevIsViewGroupResponseReceived !== isViewGroupResponseReceived && isSuccessfulResponse(viewGroupResponseData)) {
            const data = viewGroupResponseData['success'][0];
            setGroupDetails(data);

            let expenses;
            let detailedExpense = '';

            if (!data?.expenses?.lent.length && !data?.expenses?.owed.length) {
                expenses = <div>Hurray !! No expenses</div>
            } else if (data?.expenses?.lent.length) {
                expenses = <div>Total Expenses lent
                    : <b> {data?.expenses?.lent.map((ele) => ele.amount).reduce((ele, ind) => ele + ind)}</b></div>
                detailedExpense = (<div>
                    {data.expenses.lent.map((ele, index) => {
                        return (
                            <div key={index} className="d-flex justify-content-between">
                                <div style={{marginRight: "10px !important"}}>
                                    {ele.name}
                                </div>
                                <div>
                                    {`+${ele.amount}`}
                                </div>
                            </div>
                        )
                    })} </div>);

            } else {
                expenses = <div>Total Expenses lent
                    : <b> {data?.expenses?.owed.map((ele) => ele.amount).reduce((ele, ind) => ele + ind)}</b></div>
                detailedExpense = (<div>
                    {data.expenses.lent.map((ele, index) => {
                        return (
                            <div key={index} className="d-flex justify-content-between">
                                <div style={{marginRight: "10px !important"}}>
                                    {ele.name}
                                </div>
                                <div>
                                    {`-${ele.amount}`}
                                </div>
                            </div>
                        )
                    })} </div>);
            }

            setExpenses(expenses);
            setDetailedExpenses(detailedExpense);
        }
    }, [isViewGroupResponseReceived]);


    return (
        <div className="delete-group p-4">
            <Heading>Delete Group</Heading>
            {!isViewGroupResponseReceived ? <Loading/> :
                <>
                    <div className="mt-4 mb-4">You are about to delete the group <b>{groupDetails.name} </b>
                        with the following details
                    </div>
                    <Card className="p-2 mb-4">
                        <div>
                            <div>The group has the following members. If you delete the group all the group members will
                                be
                                automatically removed.
                            </div>

                            <ul>
                                {groupDetails?.users?.map((user) => {
                                    return (
                                        <li key={user.id}>
                                            <b>{getUserFullName(user)}</b>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </Card>

                    <Card className="p-2 mb-4">
                        <div>
                            <div className="mb-2">The group expenses are as following. If you delete the group all the
                                expenses
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
                            {detailedExpenses}
                        </div>
                    </Card>

                    <Button variant="danger" className="mt-4" onClick={deleteGroupPopUp}>
                        Delete {groupDetails.name}
                    </Button>
                </>
            }
        </div>
    )
}

export {DeleteGroup}