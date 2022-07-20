/**
 * @author ${Vatsal Yadav}
 */

export const CREATE_REMINDER = "CREATE_REMINDER";
export const CREATE_REMINDER_RESPONSE = "CREATE_REMINDER_RESPONSE";
export const EDIT_REMINDER = "EDIT_REMINDER";
export const EDIT_REMINDER_RESPONSE = "EDIT_REMINDER_RESPONSE";
export const DELETE_REMINDER = "DELETE_REMINDER";
export const DELETE_REMINDER_RESPONSE = "DELETE_REMINDER_RESPONSE";
export const VIEW_REMINDERS = "VIEW_REMINDERS";
export const VIEW_REMINDERS_RESPONSE = "VIEW_REMINDERS_RESPONSE";

export const createReminder = (reminderData) => ({
    type: CREATE_REMINDER,
    reminderData
});

export const createReminderResponse = (response) => ({
    type: CREATE_REMINDER_RESPONSE,
    response
});

export const editReminder = (reminderData) => ({
    type: EDIT_REMINDER,
    reminderData
});

export const editReminderResponse = (response) => ({
    type: EDIT_REMINDER_RESPONSE,
    response
});

export const deleteReminder = (id) => ({
    type: DELETE_REMINDER,
    id
});

export const deleteReminderResponse = (response) => ({
    type: DELETE_REMINDER_RESPONSE,
    response
});

export const viewReminders = (reminderData) => ({
    type: VIEW_REMINDERS,
    reminderData
});

export const viewRemindersResponse = (response) => ({
    type: VIEW_REMINDERS_RESPONSE,
    response
});
