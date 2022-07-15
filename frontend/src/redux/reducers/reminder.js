import {
    CREATE_REMINDER,
    CREATE_REMINDER_RESPONSE,
    DELETE_REMINDER,
    DELETE_REMINDER_RESPONSE,
    EDIT_REMINDER,
    EDIT_REMINDER_RESPONSE,
    VIEW_REMINDERS,
    VIEW_REMINDERS_RESPONSE
} from "../actions";

const initialState = {
    viewRemindersResponseData: {},
    isViewRemindersResponseReceived: false,
    editReminderResponseData: {},
    isEditReminderResponseReceived: false,
    deleteReminderResponseData: {},
    isDeleteReminderResponseReceived: false,
    createReminderResponseData: {},
    isCreateReminderResponseReceived: false
};

const reminder = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_REMINDER: {
            return {
                ...state,
                isCreateReminderResponseReceived: false
            };
        }
        case CREATE_REMINDER_RESPONSE: {
            console.log("reducer reminder", action.response)
            return {
                ...state,
                isCreateReminderResponseReceived: true,
                createReminderResponseData: action.response
            };
        }
        case VIEW_REMINDERS: {
            return {
                ...state,
                isViewRemindersResponseReceived: false
            }
        }
        case VIEW_REMINDERS_RESPONSE: {
            return {
                ...state,
                isViewRemindersResponseReceived: true,
                viewRemindersResponseData: action.response
            }
        }
        case EDIT_REMINDER: {
            return {
                ...state,
                isEditReminderResponseReceived: false
            }
        }
        case EDIT_REMINDER_RESPONSE: {
            return {
                ...state,
                isEditReminderResponseReceived: true,
                editReminderResponseData: action.response
            }
        }
        case DELETE_REMINDER: {
            return {
                ...state,
                isDeleteReminderResponseReceived: false
            }
        }
        case DELETE_REMINDER_RESPONSE: {
            return {
                ...state,
                isDeleteReminderResponseReceived: true,
                deleteReminderResponseData: action.response
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}

export default reminder;