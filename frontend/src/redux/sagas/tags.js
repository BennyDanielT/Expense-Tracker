import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";
import {
  CREATE_TAG,
  createTagResponse,
  DELETE_TAG,
  deleteTagResponse,
  EDIT_TAG,
  editTagResponse,
  VIEW_TAG,
  VIEW_TAGS,
  viewTagResponse,
  viewTagsResponse,
} from "../actions";
import { showError } from "../../constants";

function* createTag(action) {
  try {
    const json = yield axios
      .post("http://localhost:3001/api/create-tag/", action.tagData)
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

function* viewTags() {
  try {
    const json = yield axios.get("/api/view-tags/").then((res) => res.data);
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
      .get(`http://localhost:3001/api/view-tag/${action.id}`)
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
