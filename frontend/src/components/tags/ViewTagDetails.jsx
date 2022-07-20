/**
 * @author ${devarshivyas}
 */

import { useState, useEffect } from "react";
import { Card, Table } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import "../../css/tags.css";
import { usePrevious } from "react-use";
import { useDispatch, useSelector } from "react-redux";
import { fetchExpenses } from "../../redux/actions";
import { Loading } from "../Loading";

// function responsible to create the component to view a specific tag's details
// list of the expenses which are associated with this tag are displayed by this component
function ViewTagDetails() {
  const location = useLocation();

  let dispatch = useDispatch();

  const [tagDetails, setTagDetails] = useState({
    tagId: location.state?.tag?.id || "",
    name: location.state?.tag?.name || "",
    description: location.state?.tag?.description || "",
    icon: location.state?.tag?.icon || null,
    usage: location.state?.tag?.usage_count || 0,
    user_id: location.state?.tag?.user_id || "",
  });

  const [expenses, setExpenses] = useState([]);

  // hook to request the data
  useEffect(() => {
    dispatch(fetchExpenses(tagDetails.tagId));
  }, [dispatch]);

  // Fetch all related expenses request and processing
  // hook to check if the data is received from the backend
  // UI is updated accordingly

  const fetchExpensesResponseData = useSelector(
    (state) => state.tag.fetchExpensesResponseData
  );

  const isFetchExpensesResponseReceived = useSelector(
    (state) => state.tag.isFetchExpensesResponseReceived
  );

  const prevIsFetchExpensesResponseReceived = usePrevious(
    isFetchExpensesResponseReceived
  );

  useEffect(() => {
    if (fetchExpensesResponseData) {
      if (fetchExpensesResponseData.error) {
        // TODO: handle error
        setExpenses([]);
      } else {
        setExpenses(fetchExpensesResponseData.data);
      }
    }
  }, [isFetchExpensesResponseReceived]);

  return (
    <div
      style={{
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "30px",
        // margin: "30px",
      }}
    >
      <h2>View Tag</h2>
      <Card style={{ width: "50%" }}>
        <Card.Body>
          <Card.Text>Name: {tagDetails.name}</Card.Text>
          <Card.Text>Description: {tagDetails.description}</Card.Text>
          <Card.Text>Icon: {tagDetails.icon.emoji}</Card.Text>
          <Card.Text>Usage: {tagDetails.usage}</Card.Text>
        </Card.Body>
      </Card>
      <hr />
      <h3>Related Expenses</h3>
      {!isFetchExpensesResponseReceived ? (
        <Loading />
      ) : (
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Expense Id</th>
              <th>Name</th>
              <th>Amount</th>
              <th>Type</th>
              <th>U/G</th>
            </tr>
          </thead>
          <tbody>
            {expenses &&
              expenses.length &&
              expenses.map((expense, index) => (
                <tr key={index}>
                  <td>{expense.id}</td>
                  <td>{expense.name}</td>
                  <td>{expense.amount}</td>
                  <td>{expense.type}</td>
                  <td>{expense.group_ids.length > 0 ? "G" : "U"}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      )}
    </div>
  );
}

export { ViewTagDetails };
