import React from "react";
import './index.css'
import {deleteTodo, modifyTodo} from "../../Data/TodoAPI";
import {DeleteOutlined} from "@ant-design/icons/lib"
import {Button, message, Popconfirm} from "antd";

const DATA_NOT_FOUND = "Not found";

class Todo extends React.Component {
    delete = () => {
        deleteTodo(this.props.id)
            .then(() => {
                this.props.deleteTodo(this.props.id);
            })
            .catch(() => {
                message.info(DATA_NOT_FOUND);
            })
    }

    done = () => {
        modifyTodo(this.props.id, {content: this.props.value, status: !this.props.done})
            .then(() => {
                this.props.doneTodo(this.props.id);
            })
            .catch(() => {
                message.info(DATA_NOT_FOUND);
            })
    }

    render() {
        return <div className="outer">
            <span onClick={this.done} className={this.props.done ? 'done' : 'not-done'}
                  style={{overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}>
                {this.props.value}
            </span>
            <Popconfirm placement="top" title={"这么简单的任务都完成不了吗"} onConfirm={this.delete} okText="不做了"
                        cancelText="算了，做还不行嘛">
                <Button type="primary" danger className="x-button"
                        style={{height: '100%'}}><DeleteOutlined/></Button>
            </Popconfirm>
        </div>

    }
}

export default Todo