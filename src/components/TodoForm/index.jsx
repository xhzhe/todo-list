import React from "react";

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todoText: ""
        }
    }

    addTodo = () => {
        this.props.add(this.state.todoText);
    }

    handleSubmit = (event) => {
        this.setState({todoText: event.target.value});
    }

    render() {
        return <div>
            <form onSubmit={this.addTodo} name="todoForm">
                <span><input name="todoText" onChange={this.handleSubmit}/><button>add</button></span>
            </form>
        </div>
    }
}

export default TodoForm