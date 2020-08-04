import {connect} from "react-redux";
import DoneTodoList from "../components/DoneTodoList";

const mapStateToProps = state => {
    return {
        todo: state.todo
    }
}
const DoneTodoListContainer = connect(mapStateToProps)(DoneTodoList);
export default DoneTodoListContainer;