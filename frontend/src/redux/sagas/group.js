import axios from "axios";
import {put, takeLatest} from "redux-saga/effects";
import {CREATE_GROUP, createGroupResponse} from "../actions";
import {showError} from "../../constants";

function* createGroup(action) {
    try {
        const json = yield axios
            .post("/api/create-group/", action.groupData)
            .then((res) => res.data);
        yield put(createGroupResponse(json));
    } catch (err) {
        showError(err);
        yield put(createGroupResponse(err));
    }
}

export function* createGroupSaga() {
    yield takeLatest(CREATE_GROUP, createGroup);
}