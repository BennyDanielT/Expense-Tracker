/**
 * @author ${abhishekuppe}
 */

import { all, fork } from 'redux-saga/effects';
import * as groupSaga from './group';
import * as reminderSaga from './reminder';
import * as tagSaga from './tags';
import * as expenseSaga from './expense';

// combining all the sagas
function* rootSaga() {
  yield all(
    [
      ...Object.values(groupSaga),
      ...Object.values(reminderSaga),
      ...Object.values(tagSaga),
      ...Object.values(expenseSaga),
    ].map(fork),
  );
}
export default rootSaga;
