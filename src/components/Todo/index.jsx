import React from "react";
import './index.css'
import {deleteTodo, modifyTodo} from "../../Data/TodoData";

const DATA_NOT_FOUND = "Not found";

class Todo extends React.Component {
    delete = () => {
        deleteTodo(this.props.id).then((response) => {
            if (response.data === DATA_NOT_FOUND) {
                alert(DATA_NOT_FOUND);
            } else {
                this.props.deleteTodo(this.props.id);
            }
        })
    }

    done = () => {
        modifyTodo(this.props.id, {status: !this.props.done})
            .then((response) => {
                if (response.data === DATA_NOT_FOUND) {
                    alert(DATA_NOT_FOUND);
                } else {
                    this.props.doneTodo(this.props.id);
                }
            })
    }

    render() {
        return <div className="outer">
            <span onClick={this.done} className={this.props.done ? 'done' : 'not-done'}>
                {this.props.value}
            </span>
            <button onClick={this.delete} className="x-button">x</button>
        </div>

    }
}
export default Todo