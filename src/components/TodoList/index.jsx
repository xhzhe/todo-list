import React from "react";
import Todo from "../Todo";

class TodoList extends React.Component{
    render() {
        return <div>
            {this.props.todo.map((text, index) => <Todo key={index} value={text}/>)}
        </div>
    }
}
export default TodoList