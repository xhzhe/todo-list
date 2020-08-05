import React from "react";
import {addTodo, getTodoList} from "../../Data/TodoData";

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todoText: ""
        }
    }

    componentDidMount() {
        getTodoList().then((response) => {
            this.props.initData(response.data);
        })
    }

    addTodo = () => {
        addTodo({"content": this.state.todoText}).then((response) => {
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