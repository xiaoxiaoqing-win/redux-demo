import { ADD, DEL } from './action';

export const addTodoList = (value) => (dispatch) => setTimeout(() => {
    dispatch({   
        type: ADD,
        text: value,
    })   
}, 1000)

export const delTodoList = (index) => ({
    type: DEL,
    index,
})
