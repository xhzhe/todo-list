import React from "react";
import todos from "../../Data/TodoData";
import axios from "axios";

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
        axios.post('https://5e9ec500fb467500166c4658.mockapi.io/todos', {
            "content": this.state.todoText
        }).then((response) => {
            this.props.add(response.data)
        })
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