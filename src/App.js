import Ract, { Component } from 'react';
import TodoApp from './TodoApp';

class App extends Component {
  render() {
    return (
      <div className="App" style={{ backgroundColor: 'lavender' }}>
        <h1 style={{ backgroundColor: "greenyellow" }}>Todo List</h1>
        <br />
        <TodoApp />
      </div>
    );
  }
}
export default App;