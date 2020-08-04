import Todo from "../components/Todo";
import {connect} from "react-redux";

const mapDispatchToProps = dispatch => {
    return {
        deleteTodo: (id) => {
            dispatch({type: "DELETE_TODO", id: id})
        },
        doneTodo: (id) => {
            dispatch({type: "DONE_TODO", id: id})
        }
    }
}


const TodoContainer = connect(null, mapDispatchToProps)(Todo);
export default TodoContainer;