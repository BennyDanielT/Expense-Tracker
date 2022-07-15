import { useState } from "react";
import { Card, Table, Button } from "react-bootstrap";
import { useHistory, useLocation } from "react-router-dom";
import "../../css/tags.css";

function ViewTagDetails() {
  const [errors, setErrors] = useState({});
  const [mainError, setMainError] = useState("");
  const history = useHistory();
  const location = useLocation();

  const [tagDetails, setTagDetails] = useState({
    tagId: location.state?.tag?.tagId || "",
    name: location.state?.tag?.name || "",
    description: location.state?.tag?.description || "",
    icon: location.state?.tag?.icon || null,
    usage: location.state?.tag?.usage || 0,
  });

  const [expenses, setExpense] = useState([
    {
      expenseId: "1234",
      amount: 1102,
      tag: {
        tagId: "1234",
        name: "some tag",
      },
      splitType: "equally",
      distributedBetween: {
        id: "192873",
        name: "friend1",
      },
    },
    {
      expenseId: "1111",
      amount: 1234,
      tag: {
        tagId: "1234",
        name: "some tag",
      },
      splitType: "custom",
      distributedBetween: {
        id: "9273",
        name: "group 1",
      },
    },
    {
      expenseId: "0998",
      amount: 876,
      tag: {
        tagId: "1234",
        name: "some tag",
      },
      splitType: "equally",
      distributedBetween: {
        id: "192873",
        name: "friend 11",
      },
    },
  ]);

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
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Expense Id</th>
            <th>Amount</th>
            <th>Split</th>
            <th>Distributed Between</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{expense.expenseId}</td>
              <td>{expense.amount}</td>
              <td>{expense.splitType}</td>
              <td>{expense.distributedBetween.name}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export { ViewTagDetails };
