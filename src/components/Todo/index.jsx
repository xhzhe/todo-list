import React from "react";
import './index.css'
class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            done: this.props.done
        }
    }


    delete = () => {
        this.props.deleteTodo(this.props.index);
    }

    done = () => {
        this.props.doneTodo(this.props.index);
        this.setState({done: !this.state.done})
    }

    render() {
        return <div>
            <div onClick={this.done} className={this.state.done ? 'done' : 'not-done'}>
                {this.props.value}
            </div>
            <button onClick={this.delete}>x</button>
        </div>

    }
}
export default Todo