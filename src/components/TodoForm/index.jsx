import React from "react";
import {addTodo, getTodoList} from "../../Data/TodoAPI";
import {Button, Col, Input, Row} from "antd";
import {PlusOutlined} from '@ant-design/icons/lib'

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todoText: ""
        }
    }

    componentDidMount() {
        getTodoList().then((response) => {
            this.props.initData(response.data);
        })
    }

    addTodo = () => {
        addTodo({"content": this.state.todoText}).then((response) => {
            this.props.add(response.data)
        })
        this.setState({todoText: ""});
    }

    handleSubmit = (event) => {
        this.setState({todoText: event.target.value});
    }

    render() {
        return <div style={{margin: '10px auto', width: '60%'}}>
            <>
                <Row>
                    <Col flex={50}>
                        <Input placeholder='今天要做什么呢，博士' size="large" name="todoText" onChange={this.handleSubmit}
                               value={this.state.todoText}/>
                    </Col>
                    <Col flex={1}>
                        <Button type="primary" shape="circle" size="large" onClick={this.addTodo}
                                aria-colspan={6}><PlusOutlined/></Button>
                    </Col>
                </Row>
            </>
        </div>
    }
}

export default TodoForm