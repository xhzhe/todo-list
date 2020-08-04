import React from 'react';
import './App.css';
import {TodoFormContainer} from "./containers/TodoFormContainer";
import TodoListContainer from "./containers/TodoListContainer";


function App() {
  return (
      <div className="App">
          <header className="App-header">
              header
          </header>
          <TodoListContainer/>
          <TodoFormContainer/>
      </div>
  );
}

export default App;
