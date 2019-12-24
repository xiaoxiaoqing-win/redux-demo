import React, {Component} from 'react';
import { Input, List, Button } from 'antd';
import store from '../store';


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

    handleClick = () =>  {
        const { inputValue } = this.state;
        store.dispatch({
            type: 'add',
            text: inputValue
        });
    }

    handleListItemClick = () => {
        store.dispatch({type: 'del'})
    }
    render() {
        // console.log(this.state.sub, 9876);
        return (
            <div style={{width: '60%', margin: '10px auto'}}>
                <div style={{display: "flex", marginBottom: 10}}>
                    <Input placeholder="add a thing" onBlur={this.handleInputBlur}/>
                    <Button
                        type="primary"
                        style={{marginLeft: 10}}
                        onClick={this.handleClick}
                    >添加</Button>
                </div>
                <List
                    header={<h4>待完成事项</h4>}
                    bordered
                    dataSource={store.getState().todoList}
                    renderItem={item => (
                        <List.Item onClick={this.handleListItemClick}>
                            {item}
                        </List.Item>
                    )}
                />
            </div>
        );
    }
}