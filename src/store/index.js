import { createStore, applyMiddleware, compose } from 'redux';
// import { combineReducers } from 'redux'
import reducer from './reducer';
import thunk from 'redux-thunk';

// 声明增强函数
const composeHancer = window.__Redux_DEVTOOLS_EXTENSION_COMPOSE__ ? 
                            window.__Redux_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const hancer = composeHancer(applyMiddleware(thunk));

const store = createStore(reducer, hancer);

export default store;