/*
 * @Author: your name
 * @Date: 2020-01-15 10:59:41
 * @LastEditTime : 2020-01-15 11:00:33
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /redux-demo/src/react-todoList/actionCreater.js
 */
export const addTodoList = (val) => ({
    type: 'add',
    text: val
})