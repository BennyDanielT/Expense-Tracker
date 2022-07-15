import {combineReducers} from "redux";
import group from "./group";
import reminder from "./reminder";

export const rootReducer = combineReducers({
    group, reminder
});