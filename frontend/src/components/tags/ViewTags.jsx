import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Table, Button } from "react-bootstrap";
import { routes } from "../../constants";

function ViewTags() {
  const [tags, setTags] = useState([
    {
      tagId: "110297",
      name: "12sdfdf",
      description: "the first tag",
      icon: {
        unified: "1f975",
        emoji: "🥵",
        originalUnified: "1f975",
        names: ["overheated face", "hot_face"],
        activeSkinTone: "neutral",
      },
      usage: "11",
    },
    {
      tagId: "110297",
      name: "tag123",
      description: "the second one ",
      icon: {
        unified: "1f975",
        emoji: "🥵",
        originalUnified: "1f975",
        names: ["overheated face", "hot_face"],
        activeSkinTone: "neutral",
      },
      usage: "10",
    },
    {
      tagId: "110297",
      name: "12312asdgsdgs",
      description: "third!!",
      icon: {
        unified: "1f975",
        emoji: "🥵",
        originalUnified: "1f975",
        names: ["overheated face", "hot_face"],
        activeSkinTone: "neutral",
      },
      usage: "1",
    },
  ]);
  const history = useHistory();

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
      <h2>Tags</h2>
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
                <Button variant="danger">
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
