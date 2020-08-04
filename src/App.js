import React from 'react';
import './App.css';
import {TodoFormContainer} from "./containers/TodoFormContainer";
import TodoListContainer from "./containers/TodoListContainer";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import DoneTodoListContainer from "./containers/DoneTodoListContainer";


function App() {
  return (
      <div className="App">
          <header className="App-header">
              TodoList
          </header>
          <Router>
              <Link to='/'>root</Link><br/>
              <Link to='/done-todo-list'>to done list</Link><br/>
              <Route path="/" exact component={TodoListContainer} />
              <Route path="/done-todo-list" component={DoneTodoListContainer}/>
          </Router>
          <TodoFormContainer/>
      </div>
  );
}

export default App;
