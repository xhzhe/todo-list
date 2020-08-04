import React from "react";
import './index.css'

class Todo extends React.Component {
    delete = () => {
        this.props.deleteTodo(this.props.id);
    }

    done = () => {
        this.props.doneTodo(this.props.id);
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