import {
    CREATE_GROUP,
    CREATE_GROUP_RESPONSE,
    DELETE_GROUP,
    DELETE_GROUP_RESPONSE,
    EDIT_GROUP,
    EDIT_GROUP_RESPONSE,
    VIEW_GROUP,
    VIEW_GROUP_RESPONSE,
    VIEW_GROUPS,
    VIEW_GROUPS_RESPONSE
} from "../actions";

const initialState = {
    viewGroupResponseData: {},
    isViewGroupResponseReceived: false,
    viewGroupsResponseData: {},
    isViewGroupsResponseReceived: false,
    editGroupResponseData: {},
    isEditGroupResponseReceived: false,
    deleteGroupResponseData: {},
    isDeleteGroupResponseReceived: false,
    createGroupResponseData: {},
    isCreateGroupResponseReceived: false
};

const group = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_GROUP: {
            return {
                ...state,
                isCreateGroupResponseReceived: false
            };
        }
        case CREATE_GROUP_RESPONSE: {
            return {
                ...state,
                isCreateGroupResponseReceived: true,
                createGroupResponseData: action.response
            };
        }
        case VIEW_GROUPS: {
            return {
                ...state,
                isViewGroupsResponseReceived: false
            }
        }
        case VIEW_GROUPS_RESPONSE: {
            return {
                ...state,
                isViewGroupsResponseReceived: true,
                viewGroupsResponseData: action.response
            }
        }
        case VIEW_GROUP: {
            return {
                ...state,
                isViewGroupResponseReceived: false
            }
        }
        case VIEW_GROUP_RESPONSE: {
            return {
                ...state,
                isViewGroupResponseReceived: true,
                viewGroupResponseData: action.response
            }
        }
        case EDIT_GROUP: {
            return {
                ...state,
                isEditGroupResponseReceived: false
            }
        }
        case EDIT_GROUP_RESPONSE: {
            return {
                ...state,
                isEditGroupResponseReceived: true,
                editGroupResponseData: action.response
            }
        }
        case DELETE_GROUP: {
            return {
                ...state,
                isDeleteGroupResponseReceived: false
            }
        }
        case DELETE_GROUP_RESPONSE: {
            return {
                ...state,
                isDeleteGroupResponseReceived: true,
                deleteGroupResponseData: action.response
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}

export default group;