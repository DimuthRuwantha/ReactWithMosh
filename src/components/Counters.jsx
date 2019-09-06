import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 1 },
      { id: 3, value: 2 },
      { id: 4, value: 3 }
    ]
  };

  handleDelete = counterId => {
    console.log("handle delete", { counterId });
    const counters = this.state.counters.filter(c => c.value !== counterId);
    this.setState({ counters });
  };

  render() {
    return (
      <div>
        {this.state.counters.map(counter => (
          <Counter
            onDelete={this.handleDelete}
            key={counter.id}
            value={counter.value}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
