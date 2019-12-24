const defaultState = {
    todoList: [
        '111',
        '222',
    ]
};

export default (state = defaultState, action) => {
    let newState = JSON.parse(JSON.stringify(state));
    if(action.type === "add") {
        newState.todoList.push(action.text);
        return newState;
    }
    return state;
}