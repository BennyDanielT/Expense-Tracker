import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Table, Button } from "react-bootstrap";
import { routes } from "../../constants";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { viewTags } from "../../redux/actions";

function ViewTags() {
  const [tags, setTags] = useState([
    {
      tagId: "110297",
      name: "Books",
      description: "Expenses around books and audio books",
      icon: {
        unified: "1f975",
        emoji: "📚",
        originalUnified: "1f975",
        names: ["overheated face", "hot_face"],
        activeSkinTone: "neutral",
      },
      usage: "11",
    },
    {
      tagId: "110298",
      name: "Coffee",
      description: "During lecture breaks",
      icon: {
        unified: "1f975",
        emoji: "☕",
        originalUnified: "1f975",
        names: ["overheated face", "hot_face"],
        activeSkinTone: "neutral",
      },
      usage: "10",
    },
    {
      tagId: "110299",
      name: "Rent",
      description: "Monthly rental expenses",
      icon: {
        unified: "1f975",
        emoji: "💵",
        originalUnified: "1f975",
        names: ["overheated face", "hot_face"],
        activeSkinTone: "neutral",
      },
      usage: "1",
    },
  ]);

  const history = useHistory();
  const dispatch = useDispatch();
  const result = dispatch(viewTags());
  console.log(result);

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
              <td>{tag.usage}</td>
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
