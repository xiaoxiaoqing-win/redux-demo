import React, {Component} from 'react';
import TodoListUI from './TodoListUI';
import store from '../store';
import { addTodoList } from '../redux-store/actionCreater';
import { connect } from 'react-redux';


class TodoList extends Component {
    state = {
        inputValue: '',
    }
    handleAddClick = () =>  {
        const { inputValue } = this.state;
        const addData = addTodoList(inputValue);
        store.dispatch(addData);
    }
    render() {
        return (
            <TodoListUI 
                // onBlur={this.props.handleInputBlur}
                onAddClick={this.props.handleAddClick}
                dataSource={this.props.todoList}
                onDeleteClick={this.handleListItemClick}
            />
        );
    }
}


const stateToProps = state  => {
    return {
        todoList: state.todoList
    }
}

const dispatchToProps = (dispatch) => {
    return {
        handleAddClick() {
            // const { inputValue } = this.state;
            const addData = addTodoList(111);
            dispatch(addData);
        }
    }
}

export default connect(stateToProps, dispatchToProps)(TodoList);