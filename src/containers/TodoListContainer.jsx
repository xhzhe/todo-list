import TodoList from "../components/TodoList";
import {connect} from "react-redux";

const mapStateToProps = state => {
    return {
        todo: state.todo
    }
}
const TodoListContainer = connect(mapStateToProps)(TodoList);
export default TodoListContainer;