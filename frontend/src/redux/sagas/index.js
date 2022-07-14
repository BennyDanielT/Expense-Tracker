import {all, fork} from "redux-saga/effects";
import * as groupSaga from "./group";

function* rootSaga() {
    yield all(
        [
            ...Object.values(groupSaga),
        ].map(fork)
    )
}

export default rootSaga;