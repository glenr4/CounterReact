import React, { Component } from "react";
import Counters from "./components/counters";
import NavBar from "./components/navbar";
import "./App.css";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = this.state.counters.indexOf(counter);
    counters[index].value++;
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = [...this.state.counters];
    counters.map(counter => (counter.value = 0));
    this.setState(counters);
  };
}

export default App;
