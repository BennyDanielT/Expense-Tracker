/**
 * @author ${abhishekuppe}
 */

import {applyMiddleware, createStore} from "redux";
import createSagaMiddleware from "redux-saga";
import {createLogger} from "redux-logger";
import {composeWithDevTools} from "redux-devtools-extension";
import {rootReducer} from "./reducers";
import saga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const logger = createLogger({
    collapsed: true,
    duration: true,
    predicate: () => process.env.NODE_ENV === "development"
});

// Creating the redux store
export const store = createStore(
    rootReducer,
    {},
    composeWithDevTools(
        applyMiddleware(sagaMiddleware),
        applyMiddleware(logger),
    )
);

sagaMiddleware.run(saga);