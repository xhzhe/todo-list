import React from "react";

class Todo extends React.Component{


    render() {
        return <div>
            {this.props.value}
        </div>

    }
}
export default Todo