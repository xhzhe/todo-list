import React from "react";
import todos from "../../Data/TodoData";

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todoText: ""
        }
    }

    componentDidMount() {
        todos.then((response) => {
            this.props.initData(response.data);
        })
    }

    addTodo = () => {
        this.props.add(this.state.todoText);
    }

    handleSubmit = (event) => {
        this.setState({todoText: event.target.value});
    }

    render() {
        return <div>
                <span><input name="todoText" onChange={this.handleSubmit}/><button onClick={this.addTodo} >add</button></span>
        </div>
    }
}

export default TodoForm