import React, { Component } from "react";
import TodoListTemplate from "./components/TodoListTemplate";
import Form from "./components/Form";
import TodoItemList from "./components/TodoItemList";
import "./App.css";
import { render } from "@testing-library/react";
let displayDay = 0;
let displayDayEng = "Monday";
let listid = 1;
let timeid = 1;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayDAY: "MONDAY",
      weekend: [
        {
          day: 0,
          input: "",
          tsinput: "",
          teinput: "",
          todos: [],
        },
        //시간 list추가하고 ui로 나타내기!!!
        {
          day: 1,
          input: "",
          tsinput: "",
          teinput: "",
          todos: [],
        },
        {
          day: 2,
          input: "",
          tsinput: "",
          teinput: "",
          todos: [],
        },
        {
          day: 3,
          input: "",
          tsinput: "",
          teinput: "",
          todos: [],
        },
        {
          day: 4,
          input: "",
          tsinput: "",
          teinput: "",
          todos: [],
        },
        {
          day: 5,
          input: "",
          tsinput: "",
          teinput: "",
          todos: [],
        },
        {
          day: 6,
          input: "",
          tsinput: "",
          teinput: "",
          todos: [],
        },
      ],
    };
    this.checkingDay = this.checkingDay.bind(this);
  }

  handleChange = (e) => {
    const { weekend } = this.state;
    const newWeek = weekend.map((weekend) =>
      weekend.day === displayDay
        ? { ...weekend, input: e.target.value }
        : weekend
    );
    this.setState({ weekend: newWeek });
  };

  handleTSChange = (e) => {
    const { weekend } = this.state;
    const newWeek = weekend.map((weekend) =>
      weekend.day === displayDay
        ? { ...weekend, tsinput: e.target.value }
        : weekend
    );
    this.setState({ weekend: newWeek });
  };

  handleTEChange = (e) => {
    const { weekend } = this.state;
    const newWeek = weekend.map((weekend) =>
      weekend.day === displayDay
        ? { ...weekend, teinput: e.target.value }
        : weekend
    );
    this.setState({ weekend: newWeek });
  };

  handleCreate = () => {
    const { weekend } = this.state;
    const { input, tsinput, teinput, todos } = this.state.weekend[displayDay];
    //displayDay에 해당하는 배열 수정
    const newWeek = weekend.map((weekend) =>
      weekend.day === displayDay
        ? {
            ...weekend,
            input: "",
            tsinput: "",
            teinput: "",
            todos: todos.concat({
              id: listid++,
              text: input,
              start: Number(tsinput),
              end: Number(teinput),
              timetext: "FROM  " + tsinput + "  TO  " + teinput,
              checked: false,
            }),
          }
        : weekend
    );
    this.setState({ weekend: newWeek });
  };

  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      this.handleCreate();
    }
  };

  handleToggle = (id) => {
    const { weekend } = this.state;
    const { todos } = this.state.weekend[displayDay];
    const index = todos.findIndex((todos) => todos.id === id);
    const selected = todos[index];
    const nextTodos = [...todos];

    nextTodos[index] = {
      ...selected,
      checked: !selected.checked,
    };

    const newWeek = weekend.map((w) =>
      w.day === displayDay ? { ...w, todos: nextTodos } : w
    );
    this.setState({ weekend: newWeek });
  };

  handleRemove = (id) => {
    const { weekend } = this.state;
    const { todos } = this.state.weekend[displayDay];
    let newWeek;
    newWeek = weekend.map((w) =>
      w.day === displayDay
        ? {
            ...w,
            todos: todos.filter((todo) => todo.id !== id),
          }
        : w
    );

    this.setState({
      weekend: newWeek,
    });
  };

  checkingDay(num) {
    switch (num) {
      case 0:
        displayDay = 0;
        displayDayEng = "MONDAY";
        this.setState({ displayDAY: "MONDAY" });
        break;

      case 1:
        displayDay = 1;
        displayDayEng = "TUESDAY";
        this.setState({ displayDAY: "TUESDAY" });
        break;

      case 2:
        displayDay = 2;
        displayDayEng = "WEDNSDAY";
        this.setState({ displayDAY: "WEDNSDAY" });
        break;

      case 3:
        displayDay = 3;
        displayDayEng = "THURSDAY";
        this.setState({ displayDAY: "THURSDAY" });
        break;

      case 4:
        displayDay = 4;
        displayDayEng = "FRIDAY";
        this.setState({ displayDAY: "FRIDAY" });
        break;

      case 5:
        displayDay = 5;
        displayDayEng = "SATURYDAY";
        this.setState({ displayDAY: "SATURDAY" });
        break;

      case 6:
        displayDay = 6;
        displayDayEng = "SUNDAY";
        this.setState({ displayDAY: "SUNDAY" });
        break;

      default:
    }

    document.getElementsByClassName("dpDay")[0].innerHTML = displayDayEng;
  }

  render() {
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRemove,
      checkingDay,
      handleTSChange,
      handleTEChange,
    } = this;

    return (
      <main>
        <div className="title">TodoMate</div>
        <div className="checkDay">
          <div className="MON" onClick={() => checkingDay(0)}>
            MON
          </div>
          <div className="TUE" onClick={() => checkingDay(1)}>
            TUE
          </div>
          <div className="WED" onClick={() => checkingDay(2)}>
            WED
          </div>
          <div className="THU" onClick={() => checkingDay(3)}>
            THU
          </div>
          <div className="FRI" onClick={() => checkingDay(4)}>
            FRI
          </div>
          <div className="SAT" onClick={() => checkingDay(5)}>
            SAT
          </div>
          <div className="SUN" onClick={() => checkingDay(6)}>
            SUN
          </div>
        </div>
        <div className="dpDay">{displayDayEng}</div>
        <div className="s1">
          <TodoListTemplate
            form={
              <Form
                value={this.state.weekend[displayDay].input}
                vs={this.state.weekend[displayDay].tsinput}
                ve={this.state.weekend[displayDay].teinput}
                onKeyPress={handleKeyPress}
                onChange={handleChange}
                onCreate={handleCreate}
                onTSChange={handleTSChange}
                onTEChange={handleTEChange}
              />
            }
          >
            <TodoItemList
              todos={this.state.weekend[displayDay].todos}
              onToggle={handleToggle}
              onRemove={handleRemove}
            />
          </TodoListTemplate>
        </div>
      </main>
    );
  }
}

export default App;

//history 추가
//date와 일치하는 index의 todo값 불러오기
