/**
 * @author ${Vatsal Yadav}
 */

import axios from "axios";
import {put, takeLatest} from "redux-saga/effects";
import {
    CREATE_REMINDER,
    createReminderResponse, DELETE_REMINDER, deleteReminderResponse, EDIT_REMINDER, editReminderResponse,
    VIEW_REMINDERS,
    viewRemindersResponse
} from "../actions";
import {showError} from "../../constants";

// All the CRUD operations related to the payment reminders sagas such as create, edit, view and delete payment reminder are added here
function* createReminder(action) {
    try {
        const json = yield axios
            .post("/api/create-reminder/", action.reminderData)
            .then((res) => res.data);
        yield put(createReminderResponse(json));
    } catch (err) {
        showError(err);
        yield put(createReminderResponse(err));
    }
}

export function* createReminderSaga() {
    yield takeLatest(CREATE_REMINDER, createReminder);
}

function* viewReminders(action) {
    try {
        const json = yield axios
            .post("/api/view-reminders/", action.reminderData)
            .then((res) => res.data);
        yield put(viewRemindersResponse(json));
    } catch (err) {
        showError(err);
        yield put(viewRemindersResponse(err));
    }
}

export function* viewRemindersSaga() {
    yield takeLatest(VIEW_REMINDERS, viewReminders);
}

function* editReminder(action) {
    try {
        const json = yield axios
            .put("/api/edit-reminder/", action.reminderData)
            .then((res) => res.data);
        yield put(editReminderResponse(json));
    } catch (err) {
        showError(err);
        yield put(editReminderResponse(err));
    }
}

export function* editReminderSaga() {
    yield takeLatest(EDIT_REMINDER, editReminder);
}

function* deleteReminder(action) {
    try {
        const json = yield axios
            .delete(`/api/delete-reminder/${action.id}`)
            .then((res) => res.data);
        yield put(deleteReminderResponse(json));
    } catch (err) {
        showError(err);
        yield put(deleteReminderResponse(err));
    }
}

export function* deleteReminderSaga() {
    yield takeLatest(DELETE_REMINDER, deleteReminder);
}