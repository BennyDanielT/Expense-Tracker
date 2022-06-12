import {useId, useRef, useState} from "react";
import {getLocalStorage, routes, setLocalStorage} from "../../constants";
import {useHistory} from "react-router-dom";
import Picker from 'emoji-picker-react';
import "./tasks.css";

function ViewTagDetails() {
    const [errors, setErrors] = useState({});
    const [mainError, setMainError] = useState("");
    const history = useHistory();
    const uniqueId = useId();

    // 
    const [mode, setMode] = useState("edit");
    const [tagDetails, setTagDetails] = useState({
        "tagId": "110297",
        "name": "ferin",
        "description": "is a crazy person",
        "icon": {
            "unified": "1f975",
            "emoji": "🥵",
            "originalUnified": "1f975",
            "names": [
                "overheated face",
                "hot_face"
            ],
            "activeSkinTone": "neutral"
        }
    });
    const [chosenEmoji, setChosenEmoji] = useState(mode === "create"? null : tagDetails.icon);

    const onChangeFunctions = {
        'icon': (event, emojiObject) => {
            setChosenEmoji(emojiObject);
        }
    }

    const onEmojiClick = (event, emojiObject) => {
        setChosenEmoji(emojiObject);
      };

    const submitForm = (e) => {

        const callErrorFunctions = () => {
            setMainError("Enter all the form fields to continue!!");
        }

        e.preventDefault();
        console.log(chosenEmoji);
    }

    return (
        <div className="create-edit-tag">
            <h2>{mode === "create"? "Create Tag": "Edit Tag"}</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="tagNameInput">Tag Name</label>
                    <input type="tagName" className="form-control" id="tagNameInput" placeholder="Dinner Bills" value={mode === "create"? "" : tagDetails.name} disabled={mode === "create"? false: true} />
                    <small id="tagNameHelp" className="form-text text-muted"></small>
                </div>
                <div className="form-group">
                    <label htmlFor="descriptionTextArea">Description</label>
                    <textarea className="form-control" id="descriptionTextArea" rows="3"  value={mode === "create"? "": tagDetails.description} ></textarea>
                </div><br/>
                <div>
                    <label>Icon </label>
                    <div>
                        {chosenEmoji ? (
                            <span>{chosenEmoji.emoji}</span>
                        ) : (
                            <span>No emoji Chosen</span>
                        )}
                        <Picker onEmojiClick={onEmojiClick} pickerStyle={{ width: '40%'}} />
                    </div>        
                </div>
                <button type="submit" className="btn btn-primary" onClick={submitForm}>Submit</button>
            </form>
        </div>
    )
}

export {ViewTagDetails}