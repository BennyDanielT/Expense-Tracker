import {
  RECORD_TRANSACTION,
  RECORD_TRANSACTION_RESPONSE,
  VIEW_TRANSACTION,
  VIEW_TRANSACTION_RESPONSE,
} from '../actions';

const initialState = {
  viewTransactionResponseData: {},
  isViewTransactionResponseReceived: false,
  recordTransactionResponseData: {},
  isRecordTransactionResponseReceived: false,
};

const transaction = (state = initialState, action) => {
  switch (action.type) {
    case RECORD_TRANSACTION: {
      return {
        ...state,
        isRecordTransactionResponseReceived: false,
      };
    }
    case RECORD_TRANSACTION_RESPONSE: {
      return {
        ...state,
        isRecordTransactionResponseReceived: true,
        recordTransactionResponseData: action.response,
      };
    }
    case VIEW_TRANSACTION: {
      return {
        ...state,
        isViewTransactionResponseReceived: false,
      };
    }
    case VIEW_TRANSACTION_RESPONSE: {
      return {
        ...state,
        isViewTransactionResponseReceived: true,
        viewTransactionResponseData: action.response,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default transaction;
