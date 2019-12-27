import { takeEvery } from 'redux-saga/effects';

function* mySaga () {
    yield takeEvery();  // 两个参数、拼接
}

function* getList () {
    // 写逻辑  put方法
}
export default mySaga;