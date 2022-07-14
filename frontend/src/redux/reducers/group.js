import {CREATE_GROUP, CREATE_GROUP_RESPONSE} from "../actions";

const initialState = {
    createGroupResponseData: {},
    isCreateGroupResponseReceived: false
};

const group = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_GROUP: {
            return {
                ...state,
                isCreateGroupResponseReceived: false,
                createGroupResponseData: action.groupData
            };
        }
        case CREATE_GROUP_RESPONSE: {
            return {
                ...state,
                isCreateGroupResponseReceived: true,
                createGroupResponseData: action.response
            };
        }
        default: {
            return {
                ...state
            }
        }
    }
}

export default group;