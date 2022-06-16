import {useEffect, useState} from "react";
import {getLocalStorage, routes} from "../../constants";
import {Button, Form} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import Swal from "sweetalert2";
import "./expense.css";
import {Heading} from "../Heading/Heading";

function ExpenseHomePage() {
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

    
        const defaultList = [
          { name: "Expense 1" },
          { name: "Expense 2" },
          { name: "Expense 3" }
        ];
    

    const [list, updateList] = useState(defaultList);

  const handleRemoveItem = (e) => {
   const name = e.target.getAttribute("name")
    updateList(list.filter(item => item.name !== name));
  };
    
     

    return (
        <div className="groups-home">
            <Form.Label><Heading>Expenses</Heading></Form.Label>
            <div className="current-groups m-4">
                <div className="mb-4 mt-4"><b>Current Expenses</b></div>
                <div className="mb-4 mt-3">
                <Button variant="primary" type="click" onClick={() => history.push(routes.viewExpense.path)}>
                    View Expenses
                </Button>
                </div>
                <div className="delete">
                {list.map(item => {
                    return (
                        <>
                            <span name={item.name} onClick={handleRemoveItem}>
                             Delete Expense
                            </span>
                            <span>{item.name}</span>
                        </>
                        );
                        })}
                    </div>
                <div className="groups-list mb-4">
                    {groups.length ? groups.map((group) => Object.entries(group).map((currentGroup) => {
                        return (
                            <div key={currentGroup[1].name} className="m-2">
                                <a href={"#"} onClick={(e) => onClickLink(e, currentGroup)}>
                                    {currentGroup[1].name}
                                </a>
                            </div>
                        )
                    })) : <div>Click to add an expense.</div>}
                </div>
                <Button variant="primary" type="click" onClick={() => history.push(routes.addExpense.path)}>
                    Add Expense
                </Button>
                
            </div>
        </div>
    )
}

export {ExpenseHomePage};