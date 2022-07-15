/**
 * @author ${abhishekuppe}
 */

import {useEffect, useState} from "react";
import {isSuccessfulResponse, routes} from "../../constants";
import {Button, Form} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import "../../css/group.css";
import {Heading} from "../Heading/Heading";
import {viewGroups} from "../../redux/actions";
import {useDispatch, useSelector} from "react-redux";
import {usePrevious} from "react-use";
import {Loading} from "../Loading";

function GroupHomePage() {
    const [groups, updateGroups] = useState([]);

    const dispatch = useDispatch();

    const viewGroupsResponseData = useSelector(
        (state) => state.group.viewGroupsResponseData
    );

    const isViewGroupsResponseReceived = useSelector(
        (state) => state.group.isViewGroupsResponseReceived
    );

    const prevIsViewGroupsResponseReceived = usePrevious(isViewGroupsResponseReceived);

    useEffect(() => {
        dispatch(viewGroups());
    }, []);

    useEffect(() => {
        if (prevIsViewGroupsResponseReceived !== isViewGroupsResponseReceived && isSuccessfulResponse(viewGroupsResponseData)) {
            const res = [];
            viewGroupsResponseData['success'].forEach((ele) => {
                res.push({name: ele.name, id: ele.id});
            });
            updateGroups(res);
        }
    }, [isViewGroupsResponseReceived]);

    const history = useHistory();

    const onClickLink = (e, currentGroup) => {
        e.preventDefault();
        history.push(routes.viewGroup.path.split(":")[0] + currentGroup.id);
    }

    return (
        <div className="groups-home">
            <Form.Label><Heading>Groups HomePage</Heading></Form.Label>
            <div className="current-groups m-4">
                <div className="mb-4 mt-4"><b>Current Groups</b></div>
                <div className="groups-list mb-4">
                    {!isViewGroupsResponseReceived ? <Loading/> :
                        groups.length ? groups.map((group) => {
                            return (
                                <div key={group.name} className="m-2">
                                    <a href={"#"} onClick={(e) => onClickLink(e, group)}>
                                        {group.name}
                                    </a>
                                </div>
                            )
                        }) : <div>Oops!! No groups to show. Create group by clicking the button below</div>

                    }
                </div>
                <Button variant="primary" type="click" onClick={() => history.push(routes.createGroup.path)}>
                    Create Group
                </Button>
            </div>
        </div>
    )
}

export {GroupHomePage};