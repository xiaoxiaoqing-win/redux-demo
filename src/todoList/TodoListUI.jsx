import React from 'react';
import { Input, List, Button } from 'antd';

const TodoListUI = (props) => {
        return (
            <div style={{ width: '60%', margin: '10px auto' }}>
                <div style={{ display: "flex", marginBottom: 10 }}>
                    <Input placeholder="add a thing" onBlur={props.onBlur} />
                    <Button
                        type="primary"
                        style={{ marginLeft: 10 }}
                        onClick={props.onAddClick}
                    >添加</Button>
                </div>
                <List
                    header={<h4>待完成事项</h4>}
                    bordered
                    dataSource={props.dataSource}
                    renderItem={item => (
                        <List.Item onClick={props.onDeleteClick}>
                            {item}
                        </List.Item>
                    )}
                />
            </div>
        )
}

export default TodoListUI;