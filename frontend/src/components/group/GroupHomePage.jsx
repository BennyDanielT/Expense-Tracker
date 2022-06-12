import {useEffect, useState} from "react";
import {getLocalStorage, routes} from "../../constants";
import {Button, Form} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import Swal from "sweetalert2";
import "./group.css";
import {Heading} from "./Heading";

function GroupHomePage() {
    const [groups, updateGroups] = useState([]);

    useEffect(() => {
        const groups = JSON.parse(getLocalStorage("groups"));
        if (groups) {
            updateGroups(groups);
        }
    }, []);

    const history = useHistory();

    const onClickLink = (e, currentGroup) => {
        e.preventDefault();
        history.push(routes.viewGroup.path.split(":")[0] + currentGroup[0]);
    }

    return (
        <div className="groups-home">
            <Form.Label><Heading>Groups HomePage</Heading></Form.Label>
            <div className="current-groups m-4">
                <div className="mb-4 mt-4"><b>Current Groups</b></div>
                <div className="groups-list mb-4">
                    {groups.length ? groups.map((group) => Object.entries(group).map((currentGroup) => {
                        return (
                            <div key={currentGroup[1].name} className="m-2">
                                <a href={"#"} onClick={(e) => onClickLink(e, currentGroup)}>
                                    {currentGroup[1].name}
                                </a>
                            </div>
                        )
                    })) : <div>Oops!! No groups to show. Create group by clicking the button below</div>}
                </div>
                <Button variant="primary" type="click" onClick={() => history.push(routes.createGroup.path)}>
                    Create Group
                </Button>
            </div>
        </div>
    )
}

export {GroupHomePage};