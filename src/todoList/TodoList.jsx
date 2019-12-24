import React, {Component} from 'react';
import { Input, List, Button } from 'antd';
import store from '../store';


export default class TodoList extends Component {
    // constructor(props) {
    //     super(props);
    //     // store.subscribe(this.handleClick)()
    // }
    state = {
        sub: store.getState(),
    }
    handleClick = () =>  {
        store.dispatch({
            type: 'add',
            text: '2222'
        });
        store.subscribe(() => {
            this.setState({
                sub: store.getState()
            })
        })
    }
    render() {
        console.log(this.state.sub, 9876);
        return (
            <div style={{width: '60%', margin: '10px auto'}}>
                <div style={{display: "flex", marginBottom: 10}}>
                    <Input placeholder="add a thing" />
                    <Button
                        type="primary"
                        style={{marginLeft: 10}}
                        onClick={this.handleClick}
                    >添加</Button>
                </div>
                <List
                    header={<h4>待完成事项</h4>}
                    bordered
                    dataSource={this?.state?.sub?.todoList}
                    renderItem={item => (
                        <List.Item>
                            {item}
                        </List.Item>
                    )}
                />
            </div>
        );
    }
}