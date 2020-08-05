import Todo from "../components/Todo";
import {connect} from "react-redux";
import {deleteTodo, doneTodo} from "../actions";

const mapDispatchToProps = dispatch => {
    return {
        deleteTodo: (id) => {
            dispatch(deleteTodo(id))
        },
        doneTodo: (id) => {
            dispatch(doneTodo(id))
        }
    }
}


const TodoContainer = connect(null, mapDispatchToProps)(Todo);
export default TodoContainer;