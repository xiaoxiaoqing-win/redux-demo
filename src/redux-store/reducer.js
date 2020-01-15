import {ADD} from './action';

const initialState = {
    todoList: ["xxx"]
};

const reducer = (state =  initialState, action) =>  {
    if(action.type === ADD) {
        let newState = JSON.parse(JSON.stringify(state));
        newState.todoList.push(action.text);
        return newState;
    }
    return state;
}

export default reducer;