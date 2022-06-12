import { useState } from "react";
import { Badge, ListGroup } from "react-bootstrap";

function ViewTags() {
  const [tags, setTags] = useState([
    {
      tagId: "110297",
      name: "12sdfdf",
      description: "is a crazy person",
      icon: {
        unified: "1f975",
        emoji: "🥵",
        originalUnified: "1f975",
        names: ["overheated face", "hot_face"],
        activeSkinTone: "neutral",
      },
      usageCount: "11",
    },
    {
      tagId: "110297",
      name: "tag123",
      description: "is a crazy person",
      icon: {
        unified: "1f975",
        emoji: "🥵",
        originalUnified: "1f975",
        names: ["overheated face", "hot_face"],
        activeSkinTone: "neutral",
      },
      usageCount: "10",
    },
    {
      tagId: "110297",
      name: "12312asdgsdgs",
      description: "is a crazy person",
      icon: {
        unified: "1f975",
        emoji: "🥵",
        originalUnified: "1f975",
        names: ["overheated face", "hot_face"],
        activeSkinTone: "neutral",
      },
      usageCount: "1",
    },
  ]);

  const onClickFunctions = {
    selectedTag: (tag) => {
      console.log(tag);
    },
  };

  return (
    <div className="view-tags">
      <h2>Tags</h2>
      <ListGroup as="ol" numbered>
        {tags.map((tag) => (
          <ListGroup.Item
            action
            as="li"
            className="d-flex justify-content-between align-items-start"
            onClick={() => onClickFunctions["selectedTag"](tag)}
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">{tag.name}</div>
              {tag.description}
            </div>
            <Badge bg="primary" pill>
              {tag.usageCount}
            </Badge>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}
export { ViewTags };
