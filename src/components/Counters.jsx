import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 2 },
      { id: 3, value: 2 },
      { id: 4, value: 3 }
    ]
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleDelete = counterId => {
    console.log("handle delete", { counterId });
    const counters = this.state.counters.filter(c => c.value !== counterId);
    this.setState({ counters });
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    console.log("counter", counter);
    const index = counters.find(c => c.id === counter.counter);
    console.log("index", index);
    const id = index.id;
    const count = { ...index };
    count.value++;
    console.log("count value", count.value);
    counters[id] = { ...count };

    this.setState(counters);
    console.log(this.state.counters[id].value);
  };

  render() {
    return (
      <div>
        <button
          onClick={this.handleReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {this.state.counters.map(count => (
          <Counter
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            counter={count.id}
            value={count.value}
            key={count.id}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
