import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value
  };

  styles = {
    fontSize: 10,
    fontWeight: "bold"
  };

  constructor(props) {
    super(props);
    this.handleClickIncrement = this.handleClickIncrement.bind(this);
  }
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

  handleClickIncrement = product => {
    console.log("product", product);
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    console.log("props", this.props);
    return (
      <div>
        <h4>{this.props.children}</h4>
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.handleClickIncrement(this.state.value)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        {/* {this.renderTags()} */}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
