/**
 * @author ${abhishekuppe, Vatsal Yadav}
 */

import { combineReducers } from "redux";
import group from "./group";
import tag from "./tags";
import reminder from "./reminder";
import expense from "./expense";


export const rootReducer = combineReducers({
  group,
  reminder,
  tag,
  expense
});
