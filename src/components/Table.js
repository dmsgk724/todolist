import { Component } from "react";
import "./Table.css";

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeblock: [],
    };
  }

  getContent(ts, te) {
    return (
      <section className="table">
        <div id="0" className={0 >= ts && 0 <= te ? "exist" : "notexist"}>
          {0}
        </div>
        <div id="1" className={1 >= ts && 1 <= te ? "exist" : "notexist"}>
          {1}
        </div>
        <div id="2" className={2 >= ts && 2 <= te ? "exist" : "notexist"}>
          {2}
        </div>
        <div id="3" className={3 >= ts && 3 <= te ? "exist" : "notexist"}>
          {3}
        </div>
        <div id="4" className={4 >= ts && 4 <= te ? "exist" : "notexist"}>
          {4}
        </div>
        <div id="5" className={5 >= ts && 5 <= te ? "exist" : "notexist"}>
          {5}
        </div>
        <div id="6" className={6 >= ts && 6 <= te ? "exist" : "notexist"}>
          {6}
        </div>
        <div id="7" className={7 >= ts && 7 <= te ? "exist" : "notexist"}>
          {7}
        </div>
        <div id="8" className={8 >= ts && 8 <= te ? "exist" : "notexist"}>
          {8}
        </div>
        <div id="9" className={9 >= ts && 9 <= te ? "exist" : "notexist"}>
          {9}
        </div>
        <div id="10" className={10 >= ts && 10 <= te ? "exist" : "notexist"}>
          {10}
        </div>
        <div id="11" className={11 >= ts && 11 <= te ? "exist" : "notexist"}>
          {11}
        </div>
        <div id="12" className={12 >= ts && 13 <= te ? "exist" : "notexist"}>
          {12}
        </div>
        <div id="13" className={13 >= ts && 13 <= te ? "exist" : "notexist"}>
          {13}
        </div>
        <div id="14" className={14 >= ts && 14 <= te ? "exist" : "notexist"}>
          {14}
        </div>
        <div id="15" className={15 >= ts && 15 <= te ? "exist" : "notexist"}>
          {15}
        </div>
        <div id="16" className={16 >= ts && 16 <= te ? "exist" : "notexist"}>
          {16}
        </div>
        <div id="17" className={17 >= ts && 17 <= te ? "exist" : "notexist"}>
          {17}
        </div>
        <div id="18" className={18 >= ts && 18 <= te ? "exist" : "notexist"}>
          {18}
        </div>
        <div id="19" className={19 >= ts && 19 <= te ? "exist" : "notexist"}>
          {19}
        </div>
        <div id="20" className={20 >= ts && 20 <= te ? "exist" : "notexist"}>
          {20}
        </div>
        <div id="21" className={21 >= ts && 21 <= te ? "exist" : "notexist"}>
          {21}
        </div>
        <div id="22" className={22 >= ts && 22 <= te ? "exist" : "notexist"}>
          {22}
        </div>
        <div id="23" className={23 >= ts && 23 <= te ? "exist" : "notexist"}>
          {23}
        </div>
      </section>
    );
  }
  render() {
    console.log(this.props.todos);
    console.log(this.props.index);

    const start = this.props.start;
    const end = this.props.end;
    return <div>{this.getContent(start, end)}</div>;
  }
}

export default Table;
