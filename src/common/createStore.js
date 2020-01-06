// import {reducer} from './reducer';

let defaultState = {
    count: 0,
};

const reducer = (state = defaultState, action) => {
    if (action.type === "add") {
        let newState = JSON.parse(JSON.stringify(state));
        newState.count ++;
        return newState
    } 
}  

const createStore = (initialState) => {
    let state = initialState;

    let listeners = [];

    function getState() {
        return state;
    }

    function dispatch(action) {
        state = reducer(state, action);
        for(let i = 0; i < listeners.length; i++) {
            const listener = listeners[i];
            listener();
        }
    }

    function subscribe(listener) {
        listeners.push(listener)
    }

    return {getState, dispatch, subscribe};
}

const store = createStore();

store.subscribe(() => {
    console.log(store.getState());
})
store.dispatch({type: "add"})
store.dispatch({type: "add"})
store.dispatch({type: "add"})
store.dispatch({type: "add"})