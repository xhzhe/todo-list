import {connect} from "react-redux";
import TodoForm from "../components/TodoForm";

const mapDispatchToProps = dispatch => {
    return {
        add: (text) => {
            dispatch({type: "ADD_TODO_LIST", text: text})
        }
    }
}

export const TodoFormContainer = connect(null, mapDispatchToProps)(TodoForm);