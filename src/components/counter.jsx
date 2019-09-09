import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
    counter: this.props.counter
  };

  styles = {
    fontSize: 10,
    fontWeight: "bold"
  };

  /* constructor(props) {
    super(props);
  } */
  /* renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;

    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  } */

  /* handleClickIncrement = product => {
    console.log("product", product);
    this.setState({ value: this.state.value + 1 });
  }; */

  render() {
    return (
      <div>
        <h4>Item {this.props.counter}</h4>
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.value)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value, counter } = this.props;
    //console.log("formatcount", this.props);
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
