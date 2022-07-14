import { combineReducers } from "redux";
import group from "./group";
import tag from "./tags";

export const rootReducer = combineReducers({
  group,
  tag,
});
