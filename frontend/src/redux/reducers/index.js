/**
 * @author ${abhishekuppe}
 */

import { combineReducers } from "redux";
import group from "./group";
import tag from "./tags";
import reminder from "./reminder";

export const rootReducer = combineReducers({
  group,
  reminder,
  tag,
});
