import "./group.css";
import {Heading} from "./Heading";
import {Button, Card} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import {routes} from "../../constants";

function ViewGroup() {

    const json = {
        results: [
            {
                "id": 1,
                "name": "Group 1",
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
                "members": ["foo", "bar"]
            },
            {
                "id": 2,
                "name": "Group 2",
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
                "members": ["foo"]
            },
            {
                "id": 3,
                "name": "Group 3",
                "expenses": {},
                "members": ["bar"]
            },
        ]
    };

    const history = useHistory();

    const editGroup = (currentGroup) => {
        history.push({pathname: routes.editGroup.path, state: currentGroup});
    };

    const deleteGroup = (currentGroup) => {
        history.push({pathname: routes.deleteGroup.path, state: currentGroup});
    };


    return (
        <div className="view-group">
            <Heading>View Group</Heading>
            <h2 className="mt-4 text-center">Members and Expenses</h2>
            <div className="m-5">
                {json.results.map((result) => {
                    return (
                        <Card key={result.id} className="p-2 mb-3">
                            <div className="d-flex flex-row justify-content-between p-3">
                                <div>
                                    <div><h4>{result.name}</h4></div>
                                    <div>
                                        <div>Current Group Members</div>
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
                                    {/*{!result.expenses.owed && !result.expenses.lent ? "" :*/}
                                    {/*    <div>*/}
                                    {/*        <div className="mt-2 mb-2">*/}
                                    {/*            <b>Detailed Report</b>*/}
                                    {/*        </div>*/}
                                    {/*        <div className="mb-3">*/}
                                    {/*            {result.expenses?.details?.map((ele, index) => {*/}
                                    {/*                const key = <span><b>{Object.keys(ele)[0]}</b></span>*/}
                                    {/*                let value;*/}
                                    {/*                if (Object.values(ele)[0].lent) {*/}
                                    {/*                    value = <span>+{Object.values(ele)[0].lent}</span>*/}
                                    {/*                } else {*/}
                                    {/*                    value = <span>-{Object.values(ele)[0].owed}</span>*/}
                                    {/*                }*/}

                                    {/*                return (*/}
                                    {/*                    <div key={index} className="d-flex justify-content-between">*/}
                                    {/*                        <div style={{marginRight: "10px !important"}}>*/}
                                    {/*                            {key}*/}
                                    {/*                        </div>*/}
                                    {/*                        <div>*/}
                                    {/*                            {value}*/}
                                    {/*                        </div>*/}
                                    {/*                    </div>*/}
                                    {/*                )*/}
                                    {/*            })}*/}
                                    {/*        </div>*/}
                                    {/*    </div>*/}
                                    {/*}*/}
                                    <div>{!result.expenses.owed && !result.expenses.lent ?
                                        <div className="settled-up">{"Hurray !! All settled up"}</div> :
                                        result.expenses.owed ?
                                            <div className="owed">{"Expense owed : " + result.expenses.owed}</div> :
                                            <div
                                                className="lent">{"Expense lent : " + result.expenses.lent}</div>}</div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-evenly">
                                <Button className="mt-2">
                                    Settle Up
                                </Button>
                                <Button className="mt-2" onClick={() => editGroup(result)}>
                                    Edit Group
                                </Button>
                                <Button className="mt-2" onClick={() => deleteGroup(result)}>
                                    Delete Group
                                </Button>
                            </div>
                        </Card>
                    )
                })}
            </div>
        </div>
    )
}

export {ViewGroup}