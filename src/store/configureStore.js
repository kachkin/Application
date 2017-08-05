import {compose, createStore, applyMiddleware} from "redux";
import {persistStore, autoRehydrate} from 'redux-persist'
import rootReducer from "../reducers";
import createLogger from "redux-logger";
import thunkMiddleware from "redux-thunk";




const loggerMiddleware = createLogger();

export default function configureStore(preloadedState) {
    const store = createStore(
        rootReducer,
        preloadedState,
        applyMiddleware(
            thunkMiddleware,
            loggerMiddleware
        ),
        autoRehydrate()
    );
    persistStore(store);
    return store;
};
