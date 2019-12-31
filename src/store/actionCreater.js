import { ADD, DEL } from './action';

export const addTodoList = (value) => ({      // 简便写法返回一个对象的简便写法
    type: ADD,
    text: value,
})

export const delTodoList = (index) => ({
    type: DEL,
    index,
})


