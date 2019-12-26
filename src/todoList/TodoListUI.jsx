import React, { Component } from 'react';
import { Input, List, Button } from 'antd';

export default class TodoListUI extends Component {
    render() {
        return (
            <div style={{ width: '60%', margin: '10px auto' }}>
                <div style={{ display: "flex", marginBottom: 10 }}>
                    <Input placeholder="add a thing" onBlur={this.props.onBlur} />
                    <Button
                        type="primary"
                        style={{ marginLeft: 10 }}
                        onClick={this.props.onAddClick}
                    >添加</Button>
                </div>
                <List
                    header={<h4>待完成事项</h4>}
                    bordered
                    dataSource={this.props.dataSource}
                    renderItem={item => (
                        <List.Item onClick={this.props.onDeleteClick}>
                            {item}
                        </List.Item>
                    )}
                />
            </div>
        )
    }
}