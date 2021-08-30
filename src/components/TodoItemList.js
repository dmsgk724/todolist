import React, { Component } from "react";
import TodoItem from "./TodoItem";
class TodoItemList extends Component {
  render() {
    const { todos, onToggle, onRemove } = this.props;
    const todoList = todos.map(
      ({ id, timetext, text, checked, start, end }) => (
        <div>
          <TodoItem
            id={id}
            text={text}
            timetext={timetext}
            checked={checked}
            onToggle={onToggle}
            onRemove={onRemove}
            start={start}
            end={end}
            key={id}
          />
        </div>
      )
    );

    return <div>{todoList}</div>;
  }
}

export default TodoItemList;
