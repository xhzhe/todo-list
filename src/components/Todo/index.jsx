import React from "react";

class Todo extends React.Component{


    render() {
        return <div>
            {this.props.text}
        </div>

    }
}
export default Todo