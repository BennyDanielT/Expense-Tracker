import {useEffect, useState} from "react";
import {getLocalStorage, routes} from "../../constants";
import {Button, Form} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import Swal from "sweetalert2";
import "./group.css";

function GroupHomePage() {
    const [groups, updateGroups] = useState([]);

    useEffect(() => {
        const groups = JSON.parse(getLocalStorage("groups"));
        if (groups) {
            updateGroups(groups);
        }
    }, []);

    const history = useHistory();

    const onClickLink = (e) => {
        e.preventDefault();
        Swal.fire(
            'In Progress :)',
            'Feature not yet implemented',
            'info'
        );
    }

    return (
        <div className="groups-home">
            <Form.Label><h2 className="title">Groups HomePage</h2></Form.Label>
            <div className="current-groups">
                <div className="mb-4 mt-4"><b>Current Groups</b></div>
                <div className="groups-list mb-4">
                    {groups.length ? groups.map((group) => Object.values(group).map((currentGroup) => {
                        return (
                            <div key={currentGroup.name} className="m-2">
                                <a href={"#"} onClick={onClickLink}>
                                    {currentGroup.name}
                                </a>
                            </div>
                        )
                    })) : <div>Oops!! No groups to show. Create group by clicking the button below</div>}
                </div>
                <Button variant="primary" type="click" onClick={() => history.push(routes["create-group"].path)}>
                    Create Group
                </Button>
            </div>
        </div>
    )
}

export {GroupHomePage};