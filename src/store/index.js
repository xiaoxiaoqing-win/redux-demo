import { createStore, applyMiddleware, compose } from 'redux';
// import { combineReducers } from 'redux'
import reducer from './reducer';
// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import mySaga from './sagas';

// 声明增强函数
const composeHancer = window.__Redux_DEVTOOLS_EXTENSION_COMPOSE__ ? 
                            window.__Redux_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const sagaMiddleware = createSagaMiddleware();

const hancer = composeHancer(applyMiddleware(sagaMiddleware));

const store = createStore(reducer, hancer);
sagaMiddleware.run(mySaga);

export default store;