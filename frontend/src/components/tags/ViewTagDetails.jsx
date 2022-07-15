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
      id: "1234",
      name: "expense_1",
      amount: 1102,
      tag: {
        tagId: "1234",
        name: "some tag",
      },
      type: "equally",
      group_ids: [],
      user_ids: [111],
    },
  ]);

  // Fetch all related expenses request and processing

  // const deleteTagResponseData = useSelector(
  //   (state) => state.tag.deleteTagResponseData
  // );

  // const isDeleteTagResponseReceived = useSelector(
  //   (state) => state.tag.isDeleteTagResponseReceived
  // );

  // const prevIsDeleteTagResponseReceived = usePrevious(
  //   isDeleteTagResponseReceived
  // );

  // useEffect(() => {
  //   if (
  //     prevIsDeleteTagResponseReceived !== undefined &&
  //     isDeleteTagResponseReceived
  //   ) {
  //     if (deleteTagResponseData.error) {
  //       Swal.fire("Failure", deleteTagResponseData.message, "failure");
  //     } else {
  //       Swal.fire("Deleted!", "Tag has been deleted.", "success");
  //       setTags(
  //         tags.filter((tag) => {
  //           return tag.id != deleteTagResponseData.data.id;
  //         })
  //       );
  //     }
  //   }
  // }, [isDeleteTagResponseReceived]);

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
      {/* {!isViewTagsResponseReceived ? (
        <Loading />
      ) : ( */}
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Expense Id</th>
            <th>Amount</th>
            <th>Type</th>
            <th>U/G</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense, index) => (
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
      {/* )} */}
    </div>
  );
}

export { ViewTagDetails };
