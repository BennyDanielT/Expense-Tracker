export const RECORD_TRANSACTION = 'RECORD_TRANSACTION';
export const RECORD_TRANSACTION_RESPONSE = 'RECORD_TRANSACTION_RESPONSE';
export const VIEW_TRANSACTION = 'VIEW_TRANSACTION';
export const VIEW_TRANSACTION_RESPONSE = 'VIEW_TRANSACTION_RESPONSE';

export const recordTransaction = (transactionData) => ({
  type: RECORD_TRANSACTION,
  transactionData,
});

export const recordTransactionResponse = (response) => ({
  type: RECORD_TRANSACTION_RESPONSE,
  response,
});

export const viewTransaction = (id) => ({
  type: VIEW_TRANSACTION,
  id,
});

export const viewTransactionResponse = (response) => ({
  type: VIEW_TRANSACTION_RESPONSE,
  response,
});
