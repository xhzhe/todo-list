import React from "react";
import TodoContainer from "../../containers/TodoContainer";
import './index.css'

class TodoList extends React.Component{
    render() {
        return <div className="todo-list">
            {this.props.todo.map((item, index) => <TodoContainer key={index} value={item.text} done={item.done}
                                                                 index={index}/>)}
        </div>
    }
}
export default TodoList