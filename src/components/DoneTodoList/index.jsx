import React from "react";
import TodoContainer from "../../containers/TodoContainer";
import './index.css'

class DoneTodoList extends React.Component {
    render() {
        return (
            <div className='done-todo-list'>
                {this.props.todo.filter(item => item.done === true).map(item => <TodoContainer key={item.id}
                                                                                               value={item.text}
                                                                                               done={item.done}
                                                                                               id={item.id}/>)}
            </div>
        );
    }
}

export default DoneTodoList