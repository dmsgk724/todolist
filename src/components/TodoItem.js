import React, { Component } from "react";
import "./TodoItem.css";
import Table from "./Table";

class TodoItem extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.checked !== nextProps.checked;
  }
  render() {
    const { timetext, text, checked, id, onToggle, onRemove, start, end } =
      this.props;

    return (
      <div>
        <div className="todo-item" onClick={() => onToggle(id)}>
          <div
            className="remove"
            onClick={(e) => {
              e.stopPropagation();
              onRemove(id);
            }}
          >
            &times;
          </div>
          <div className={`todo-text ${checked && "checked"}`} id="text">
            <div className="mainText">{text}</div>
            <div className="edText">{timetext}</div>
          </div>
          {checked && <div className="check-mark">✓</div>}
        </div>
        <Table start={start} end={end} />
      </div>
    );
  }
}

export default TodoItem;
