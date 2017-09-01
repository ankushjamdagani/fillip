import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

import reducers from '../reducers';

let logger = createLogger({ predicate: (getState, action) => __DEV__ });

const configureStore = (initialState) => {
    return createStore(
        combineReducers(reducers),
        initialState,
        applyMiddleware(
            thunk,
            logger
        )
    );
}

export default configureStore;
