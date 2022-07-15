/**
 * @author ${abhishekuppe}
 */

import "../../css/group.css";
import {Heading} from "../Heading/Heading";
import {Button, Card} from "react-bootstrap";
import {useHistory, useParams} from "react-router-dom";
import {getUserFullName, isSuccessfulResponse, routes} from "../../constants";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {viewGroup} from "../../redux/actions";
import {usePrevious} from "react-use";
import {Loading} from "../Loading";
import {useAuth} from "../../contexts/Auth";

// The component purpose is to view a particular group based on group id.
function ViewGroup() {

    const history = useHistory();

    const {id} = useParams();

    const dispatch = useDispatch();

    const viewGroupResponseData = useSelector(
        (state) => state.group.viewGroupResponseData
    );

    const isViewGroupResponseReceived = useSelector(
        (state) => state.group.isViewGroupResponseReceived
    );

    const prevIsViewGroupResponseReceived = usePrevious(isViewGroupResponseReceived);

    const [currentGroup, setCurrentGroup] = useState({});

    const {user} = useAuth();

    useEffect(() => {
        dispatch(viewGroup(id, user().user.identities[0].user_id));
    }, []);

    useEffect(() => {
        if (prevIsViewGroupResponseReceived !== isViewGroupResponseReceived && isSuccessfulResponse(viewGroupResponseData)) {
            setCurrentGroup(viewGroupResponseData['success'][0]);
        }
    }, [isViewGroupResponseReceived]);

    const editGroup = (currentGroup) => {
        history.push({pathname: routes.editGroup.path.split(":")[0] + currentGroup.id});
    };

    const deleteGroup = (currentGroup) => {
        history.push({pathname: routes.deleteGroup.path.split(":")[0] + currentGroup.id});
    };

    return (
        <div className="view-group">
            <Heading>View Group</Heading>
            <h2 className="mt-4 text-center">Members and Expenses</h2>
            <div className="m-5">
                {!isViewGroupResponseReceived ? <Loading/> :
                    <Card className="p-2 mb-3">
                        <div className="d-flex flex-row justify-content-between p-3">
                            <div>
                                <div className="d-flex justify-content-between">
                                    <div><h4>{currentGroup.name}</h4></div>
                                    <div><img src={`data:image/jpeg;base64, ${currentGroup.icon}`} alt="group"
                                              width={40} height={40}/></div>
                                </div>
                                <div>
                                    <div>Current Group Members</div>
                                    <ul>
                                        {currentGroup?.users?.map((user) => {
                                            return (
                                                <li key={user.id}>{getUserFullName(user)}</li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <div>{!currentGroup?.expenses?.lent.length && !currentGroup?.expenses?.owed.length ?
                                    <div className="settled-up">{"Hurray !! All settled up"}</div> :
                                    currentGroup?.expenses?.owed.length ?
                                        <div
                                            className="owed">{"Expense owed : " + currentGroup?.expenses?.owed.map((ele) => ele.amount).reduce((ele, ind) => ele + ind)}</div> :
                                        <div
                                            className="lent">{"Expense lent : " + currentGroup?.expenses?.lent.map((ele) => ele.amount).reduce((ele, ind) => ele + ind)}</div>}</div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-evenly">
                            <Button className="mt-2" onClick={() => history.push(routes.settleExpense.path)}>
                                Settle Up
                            </Button>
                            <Button className="mt-2" onClick={() => editGroup(currentGroup)}>
                                Edit Group
                            </Button>
                            <Button className="mt-2" onClick={() => deleteGroup(currentGroup)}>
                                Delete Group
                            </Button>
                        </div>
                    </Card>
                }
            </div>
        </div>
    )
}

export {ViewGroup}