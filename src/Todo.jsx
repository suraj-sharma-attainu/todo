import React from "react";

export default class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      input: ""
    };
  }

  onInputChange = (e) => {
    this.setState({
      input: e.target.value
    });
  };

  addTodo = () => {
    this.setState({
      todos: [...this.state.todos, this.state.input],
      input: ""
    });
  };

  doneTodo = (id) => {
    let newTodos = this.state.todos;
    let index = this.state.todos.indexOf(this.state.todos[id]);

    newTodos.splice(index, 1);

    this.setState({
      todos: newTodos
    });
  };

  render() {
    return (
      <React.Fragment>
        <input
          value={this.state.input}
          placeholder={"Enter A Todo"}
          onChange={this.onInputChange}
        />{" "}
        &nbsp;
        <button onClick={this.addTodo}>Add</button>
        {this.state.todos.map((todo, i) => (
          <div key={i}>
            <li>{todo}</li>{" "}
            <button onClick={() => this.doneTodo(i)}>Done</button>
          </div>
        ))}
      </React.Fragment>
    );
  }
}
