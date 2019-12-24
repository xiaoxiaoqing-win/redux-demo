// import { combineReducers } from 'redux'

const defaultState = {
    todoList: []
};

export default (state = defaultState, action) => {
    let newState = JSON.parse(JSON.stringify(state));
    if(action.type === "add") {
        newState.todoList.push(action.text);
        return newState;
    } else if(action.type === "del") {
        newState.todoList.pop();
        return newState;
    }
    return state;
}