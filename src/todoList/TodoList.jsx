import React, {Component} from 'react';
import TodoListUI from './TodoListUI';
import store from '../store';
import { addTodoList, delTodoList } from '../store/actionCreater';


export default class TodoList extends Component {
    constructor(props) {
        super(props);
        store.subscribe(this.changeData);
        this.state = {
            inputValue: '',
        }
    }

    handleInputBlur = (e) => {
        this.setState({inputValue: e.target.value})
    }

    changeData = () => {
        this.setState(store.getState())
    }

    handleAddClick = () =>  {
        const { inputValue } = this.state;
        const addData = addTodoList(inputValue);
        store.dispatch(addData);
    }

    handleListItemClick = (index) => {
        console.log(index);
        const delData =  delTodoList(index);
        store.dispatch(delData)
    }
    render() {
        // console.log(this.state.sub, 9876);
        return (
            <TodoListUI 
                onBlur={this.handleInputBlur}
                onAddClick={this.handleAddClick}
                dataSource={store?.getState()?.todoList}
                onDeleteClick={this.handleListItemClick}
            />
        );
    }
}