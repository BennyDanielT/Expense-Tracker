/**
 * @author ${devarshivyas}
 */
// All the CRUD operations related to the tags sagas such as create, edit, view and delete tag are added here

import axios from "axios";
import { put, takeLatest, takeEvery } from "redux-saga/effects";
import {
    CREATE_TAG,
    createTagResponse,
    DELETE_TAG,
    deleteTagResponse,
    EDIT_TAG,
    editTagResponse,
    FETCH_EXPENSE,
    fetchExpensesResponse,
    VIEW_TAG,
    VIEW_TAGS,
    viewTagResponse,
    viewTagsResponse,
} from "../actions";
import {showError} from "../../constants";

function* createTag(action) {
    try {
        const json = yield axios
            .post("/api/create-tag/", action.tagData)
            .then((res) => res.data);
        yield put(createTagResponse(json));
    } catch (err) {
        showError(err);
        yield put(createTagResponse(err));
    }
}

export function* createTagSaga() {
    yield takeLatest(CREATE_TAG, createTag);
}

function* viewTags(action) {
    try {
        const json = yield axios
            .get(`/api/view-tags/${action.id}`)
            .then((res) => res.data);
        yield put(viewTagsResponse(json));
    } catch (err) {
        showError(err);
        yield put(viewTagsResponse(err));
    }
}

export function* viewTagsSaga() {
    yield takeLatest(VIEW_TAGS, viewTags);
}

function* viewTag(action) {
    try {
        const json = yield axios
            .get(`/api/view-tag/${action.id}`)
            .then((res) => res.data);
        yield put(viewTagResponse(json));
    } catch (err) {
        showError(err);
        yield put(viewTagResponse(err));
    }
}

export function* viewTagSaga() {
    yield takeLatest(VIEW_TAG, viewTag);
}

function* editTag(action) {
    try {
        const json = yield axios
            .put(`/api/update-tag/${action.id}`, action.tagData)
            .then((res) => res.data);
        yield put(editTagResponse(json));
    } catch (err) {
        showError(err);
        yield put(editTagResponse(err));
    }
}

export function* editTagSaga() {
    yield takeLatest(EDIT_TAG, editTag);
}

function* deleteTag(action) {
    try {
        const json = yield axios
            .delete(`/api/delete-tag/${action.id}`)
            .then((res) => res.data);
        yield put(deleteTagResponse(json));
    } catch (err) {
        showError(err);
        yield put(deleteTagResponse(err));
    }
}

export function* deleteTagSaga() {
    yield takeLatest(DELETE_TAG, deleteTag);
}

function* fetchExpenses(action) {
    try {
        const json = yield axios
            .get(`/api/fetch-expenses/${action.response}`)
            .then((res) => res.data);
        yield put(fetchExpensesResponse(json));
    } catch (err) {
        showError(err);
        yield put(fetchExpensesResponse(err));
    }
}

export function* fetchExpensesSaga() {
  yield takeEvery(FETCH_EXPENSE, fetchExpenses);
}
