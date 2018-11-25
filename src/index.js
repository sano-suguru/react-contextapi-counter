import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CounterContext from './Contexts/counter';

import Counter from './components/counter'

class App extends Component {
  constructor(props) {
    super(props);

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);

    this.state = {
      count: 0,
      increment: this.increment,
      decrement: this.decrement
    }
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  decrement() {
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    return (
      <CounterContext.Provider value={this.state}>
        <Counter />
      </CounterContext.Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
