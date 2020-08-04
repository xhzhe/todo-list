import React from "react";
import TodoContainer from "../../containers/TodoContainer";

class TodoList extends React.Component{
    render() {
        return <div>
            {this.props.todo.map((item, index) => <TodoContainer key={index} value={item.text} done={item.done}
                                                                 index={index}/>)}
        </div>
    }
}
export default TodoList