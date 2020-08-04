import React from "react";
import './index.css'
class Todo extends React.Component {
    delete = () => {
        this.props.deleteTodo(this.props.index);
    }

    done = () => {
        this.props.doneTodo(this.props.index);
    }

    render() {
        return <div>
            <div onClick={this.done} className={this.props.done ? 'done' : 'not-done'}>
                {this.props.value}
            </div>
            <button onClick={this.delete}>x</button>
        </div>

    }
}
export default Todo