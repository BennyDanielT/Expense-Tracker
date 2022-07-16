import { combineReducers } from 'redux';
import transaction from './transaction';
import group from './group';

export const rootReducer = combineReducers({
  group,
  transaction,
});
