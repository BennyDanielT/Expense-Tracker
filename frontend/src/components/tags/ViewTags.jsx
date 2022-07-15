import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Table, Button } from "react-bootstrap";
import { isSuccessfulResponse, routes } from "../../constants";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { viewTags } from "../../redux/actions";
import { usePrevious } from "react-use";

function ViewTags() {
  const [tags, setTags] = useState([]);

  const history = useHistory();

  let dispatch = useDispatch();

  const viewTagsResponseData = useSelector(
    (state) => state.tag.viewTagsResponseData
  );

  const isViewTagsResponseReceived = useSelector(
    (state) => state.tag.isViewTagsResponseReceived
  );

  const prevIsViewTagsResponseReceived = usePrevious(
    isViewTagsResponseReceived
  );

  useEffect(() => {
    dispatch(viewTags());
  }, [dispatch]);

  useEffect(() => {
    if (
      viewTagsResponseData &&
      viewTagsResponseData.data &&
      viewTagsResponseData.data.length
    ) {
      setTags(viewTagsResponseData.data);
    } else {
      setTags([]);
    }
  }, [viewTagsResponseData]);

  function showDeleteAlert() {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Tag has been deleted.", "success");
      }
    });
  }

  const onClickFunctions = {
    viewTag: (tag) => {
      history.push(routes.viewTagDetails.path, { tag });
    },
    editTag: (tag) => {
      history.push(routes.editTag.path, { tag });
    },
    deleteTag: () => {},
  };

  return (
    <div
      style={{
        padding: "30px",
      }}
    >
      <div className="d-flex justify-content-between my-3">
        <h2>Tags</h2>
        <Button onClick={() => history.push("/create-tag")}>
          <i className="fas fa-plus"></i>
        </Button>
      </div>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Tags</th>
            <th>Icon</th>
            <th>Usage</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tags.map((tag, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{tag.name}</td>
              <td>{tag.icon.emoji}</td>
              <td>{tag.usage_count}</td>
              <td>
                <Button
                  variant="primary"
                  onClick={() => {
                    onClickFunctions["viewTag"](tag);
                  }}
                >
                  <span className="fas fa-eye"></span>
                </Button>
                <Button
                  variant="warning"
                  className="mx-2"
                  onClick={() => {
                    onClickFunctions["editTag"](tag);
                  }}
                >
                  <span className="fas fa-pen"></span>
                </Button>
                <Button variant="danger" onClick={showDeleteAlert}>
                  <span className="fas fa-trash"></span>
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
export { ViewTags };
