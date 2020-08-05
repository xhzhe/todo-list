import React from 'react';
import './App.css';
import {TodoFormContainer} from "./containers/TodoFormContainer";
import TodoListContainer from "./containers/TodoListContainer";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import DoneTodoListContainer from "./containers/DoneTodoListContainer";
import {Divider, Layout, Menu} from 'antd';
import {CalendarOutlined} from "@ant-design/icons/lib";

const {Header, Content, Footer} = Layout;

function App() {
    return (
        <Router>
            <Layout className="layout" style={{minHeight: '100vh'}}>
                <Header>
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                        <Menu.Item><CalendarOutlined/></Menu.Item>
                        <Menu.Item key="1"><Link to='/'>博士，您还有许多事情需要处理。现在还不能休息哦。</Link></Menu.Item>
                        <Menu.Item key="2"><Link to='/done-todo-list'>今天已经不剩多少时间了，您今天的任务完成了吗？</Link></Menu.Item>
                    </Menu>
                </Header>
                <Content style={{padding: '0 50px'}}>
                    <div className="App">
                        <TodoFormContainer/>
                        <Divider plain>Todos</Divider>
                        <Route path="/" exact component={TodoListContainer}/>
                        <Route path="/done-todo-list" component={DoneTodoListContainer}/>
                    </div>
                </Content>
                <Footer style={{textAlign: 'center'}}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </Router>
    );
}

export default App;
