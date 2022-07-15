import { all, fork } from "redux-saga/effects";
import * as groupSaga from "./group";
import * as tagSaga from "./tags";

function* rootSaga() {
  yield all([...Object.values(groupSaga), ...Object.values(tagSaga)].map(fork));
}

export default rootSaga;
