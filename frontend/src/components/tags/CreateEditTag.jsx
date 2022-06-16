import Picker from "emoji-picker-react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "./tags.css";

function CreateEditTag({ setting }) {
  const history = useHistory();
  const [showPicker, setShowPicker] = useState(false);
  const [mode] = useState(setting);
  const [tagDetails, setTagDetails] = useState({
    tagId: mode === "edit" ? "110297" : "",
    name: mode === "edit" ? "Books" : "",
    description: mode === "edit" ? "Expenses around books and audio books" : "",
    icon:
      mode === "edit"
        ? {
            unified: "1f975",
            emoji: "🥵",
            originalUnified: "1f975",
            names: ["overheated face", "hot_face"],
            activeSkinTone: "neutral",
          }
        : null,
    usageCount: mode === "edit" ? 11 : null,
  });

  const [tagError, setTagError] = useState(null);
  const [chosenEmoji, setChosenEmoji] = useState(
    mode === "create" ? null : tagDetails.icon
  );

  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
    setShowPicker(false);
  };

  const submitForm = (e) => {
    setTagError(null);
    let isError = false;
    if (!tagDetails.name.trim().length) {
      setTagError((old) => {
        return {
          ...old,
          name: "Name cannot be empty",
        };
      });
      isError = true;
    }
    if (tagDetails.name.trim().length > 25) {
      setTagError((old) => {
        return {
          ...old,
          name: "Name cannot be greater than 25 characters",
        };
      });
      isError = true;
    }

    if (isError) {
      return;
    }
    toast(
      mode === "create"
        ? "Tag created successfully"
        : "Tag updated successfully"
    );
    setTimeout(() => {
      history.push("/view-tags");
    }, 2000);
  };

  return (
    <div className="p-5">
      <h2 className="mb-5">{mode === "create" ? "Create Tag" : "Edit Tag"}</h2>
      <div className="form-group">
        <label htmlFor="tagNameInput">Tag Name</label>
        <input
          type="tagName"
          className="form-control"
          id="tagNameInput"
          placeholder="Eg: Dinner Bills"
          value={tagDetails.name}
          onChange={(e) => {
            setTagDetails((old) => {
              return {
                ...old,
                name: e.target.value,
              };
            });
          }}
        />
        <small id="tagNameHelp" className="form-text text-danger">
          {tagError && tagError.name ? tagError.name : ""}
        </small>
      </div>
      <div className="form-group my-3">
        <label htmlFor="descriptionTextArea">Description</label>
        <textarea
          className="form-control"
          id="descriptionTextArea"
          rows="3"
          value={tagDetails.description}
          onChange={(e) => {
            setTagDetails((old) => {
              return {
                ...old,
                description: e.target.value,
              };
            });
          }}
        ></textarea>
      </div>
      <div className="d-flex  my-1">
        <label style={{ marginRight: "20px" }}>Icon </label>
        <div>
          {chosenEmoji ? (
            <span className="mx-1">{chosenEmoji.emoji}</span>
          ) : (
            <span className="mx-1">No emoji Chosen</span>
          )}

          {showPicker ? (
            <>
              <Picker
                onEmojiClick={onEmojiClick}
                pickerStyle={{ width: "40%" }}
              />
            </>
          ) : (
            <i
              className="fas fa-1.5x fa-chevron-down mx-3"
              style={{ cursor: "pointer" }}
              onClick={() => setShowPicker(true)}
            />
          )}
        </div>
      </div>
      <button
        type="submit"
        className="btn btn-primary my-5"
        onClick={submitForm}
      >
        {mode === "create" ? "Submit" : "Update"}
      </button>
    </div>
  );
}

export { CreateEditTag };

// TODO: emoji picker collapse
