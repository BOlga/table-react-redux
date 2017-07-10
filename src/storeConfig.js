import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/rootReducer'
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';

const loggerMiddleware = createLogger();

export default function storeConfig(initialState) {
    return createStore(
      rootReducer,
      initialState,
      applyMiddleware(thunkMiddleware, loggerMiddleware)
    )
}