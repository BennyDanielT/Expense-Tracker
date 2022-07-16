import { all, fork } from 'redux-saga/effects';
import * as groupSaga from './group';
import * as transactionSaga from './transaction';

function* rootSaga() {
  yield all(
    [
      ...Object.values(groupSaga),
      // ...Object.values(transactionSaga),
    ].map(fork),
  );
}

export default rootSaga;
