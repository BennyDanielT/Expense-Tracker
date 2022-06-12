import {useLocation} from "react-router-dom";

function EditGroup() {
    const location = useLocation();

    console.log(location.state);

    return (
        <div>Edit Group</div>
    )
}

export {EditGroup}