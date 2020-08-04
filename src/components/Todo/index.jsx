import React from "react";
import './index.css'
import axios from 'axios';

class Todo extends React.Component {
    delete = () => {
        axios.delete('https://5e9ec500fb467500166c4658.mockapi.io/todos/' + this.props.id)
            .then((response) => {
                if (response.data === "Not found") {
                    alert("Not found");
                } else {
                    this.props.deleteTodo(this.props.id);
                }
            })
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