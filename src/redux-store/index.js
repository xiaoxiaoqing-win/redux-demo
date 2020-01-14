/*
 * @Author: your name
 * @Date: 2020-01-11 13:40:52
 * @LastEditTime : 2020-01-14 20:14:07
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /redux-demo/src/redux-store/index.js
 */
import { createStore } from 'redux';
import reducer from './reducer';

const store = createStore(reducer);

export default store;