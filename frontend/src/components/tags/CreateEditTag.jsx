import Picker from "emoji-picker-react";
import { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import "../../css/tags.css";
import { createTag, editTag } from "../../redux/actions";
import { routes } from "../../constants";
import { usePrevious } from "react-use";

function CreateEditTag({ setting }) {
  const history = useHistory();
  const location = useLocation();
  let dispatch = useDispatch();

  const createTagResponseData = useSelector(
    (state) => state.tag.createTagResponseData
  );

  const isCreateTagResponseReceived = useSelector(
    (state) => state.tag.isCreateTagResponseReceived
  );

  const prevIsCreateTagResponseReceived = usePrevious(
    isCreateTagResponseReceived
  );

  useEffect(() => {
    if (
      prevIsCreateTagResponseReceived !== undefined &&
      prevIsCreateTagResponseReceived !== isCreateTagResponseReceived &&
      isCreateTagResponseReceived
    ) {
      if (createTagResponseData.error) {
        toast(createTagResponseData.message);
        history.push(routes.viewTags.path);
      } else {
        toast(createTagResponseData.message);
        history.push(routes.viewTags.path);
      }
    }
  }, [isCreateTagResponseReceived]);

  const editTagResponseData = useSelector(
    (state) => state.tag.editTagResponseData
  );

  const isEditTagResponseReceived = useSelector(
    (state) => state.tag.isEditTagResponseReceived
  );

  const prevIsEditTagResponseReceived = usePrevious(isEditTagResponseReceived);

  useEffect(() => {
    if (
      prevIsEditTagResponseReceived !== undefined &&
      prevIsEditTagResponseReceived !== isEditTagResponseReceived &&
      isEditTagResponseReceived
    ) {
      if (editTagResponseData.error) {
        toast(editTagResponseData.message);
        history.push(routes.viewTags.path);
      } else {
        toast(editTagResponseData.message);
        history.push(routes.viewTags.path);
      }
    }
  }, [isEditTagResponseReceived]);

  const isUsersResponseReceived = useSelector(
    (state) => state.tag.isUsersResponseReceived
  );
  const usersResponseData = useSelector((state) => state.tag.usersResponseData);

  useEffect(() => {
    console.log("--------------");
    if (usersResponseData) {
      console.log(usersResponseData);
      // const array = [];
      // usersResponseData['success'].forEach((ele) => {
      //     array.push({label: getUserFullName(ele), value: ele.user_id});
      // });
      // setUsers(array);
    }
  }, [isUsersResponseReceived]);

  const [showPicker, setShowPicker] = useState(false);
  const [mode] = useState(setting);
  const [tagDetails, setTagDetails] = useState({
    id: location.state?.tag?.id || "",
    name: location.state?.tag?.name || "",
    description: location.state?.tag?.description || "",
    icon: location.state?.tag?.icon || {
      activeSkinTone: "neutral",
      emoji: "🏷️",
      names: ["label"],
      originalUnified: "1f3f7-fe0f",
      unified: "1f3f7-fe0f",
    },
    usage: location.state?.tag?.usage_count || 0,
    user_id: location.state?.tag?.user_id || 13,
  });

  const [tagError, setTagError] = useState(null);
  const [chosenEmoji, setChosenEmoji] = useState(
    mode === "create" ? null : tagDetails.icon
  );

  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
    tagDetails.icon = emojiObject;
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

    if (mode === "create") {
      dispatch(createTag(tagDetails));
    } else {
      dispatch(editTag(tagDetails.id, tagDetails));
    }
    console.log(tagDetails);
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
