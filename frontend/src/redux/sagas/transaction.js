import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
import {
  RECORD_TRANSACTION,
  VIEW_TRANSACTION,
  recordTransactionResponse,
  viewTransactionResponse,
} from '../actions';
import { showError } from '../../constants';

function* recordTransaction(action) {
  try {
    const json = yield axios
      .post('/api/record-transaction/', action.transactionData)
      .then((res) => res.data);
    yield put(recordTransactionResponse(json));
  } catch (err) {
    showError(err);
    yield put(recordTransactionResponse(err));
  }
}

export function* recordTransactionSaga() {
  yield takeLatest(RECORD_TRANSACTION, recordTransaction);
}

function* viewTransaction(action) {
  try {
    const json = yield axios
      .get(`/api/view-transaction/${action.id}`)
      .then((res) => res.data);
    yield put(viewTransactionResponse(json));
  } catch (err) {
    showError(err);
    yield put(viewTransactionResponse(err));
  }
}

export function* viewTransactionSaga() {
  yield takeLatest(VIEW_TRANSACTION, viewTransaction);
}
