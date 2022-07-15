import {all, fork} from "redux-saga/effects";
import * as groupSaga from "./group";
import * as reminderSaga from "./reminder";

function* rootSaga() {
    yield all(
        [
            ...Object.values(groupSaga), ...Object.values(reminderSaga),
        ].map(fork)
    )
}

export default rootSaga;