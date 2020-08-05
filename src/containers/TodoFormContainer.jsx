import {connect} from "react-redux";
import TodoForm from "../components/TodoForm";
import {addTodo, initData} from "../actions";

const mapDispatchToProps = dispatch => {
    return {
        add: (data) => {
            dispatch(addTodo(data))
        },
        initData: (data) => {
            dispatch(initData(data))
        }
    }
}

export const TodoFormContainer = connect(null, mapDispatchToProps)(TodoForm);