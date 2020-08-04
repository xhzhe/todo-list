import {connect} from "react-redux";
import TodoForm from "../components/TodoForm";

const mapDispatchToProps = dispatch => {
    return {
        add: (data) => {
            dispatch({type: "ADD_TODO_LIST", data: data})
        },
        initData: (data) => {
            dispatch({type: "INIT_DATA", data: data})
        }
    }
}

export const TodoFormContainer = connect(null, mapDispatchToProps)(TodoForm);