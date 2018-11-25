import React from 'react';
import CounterContext from '../Contexts/counter'

export default function Counter() {
  return (
    <CounterContext.Consumer>
      {
        ({ count, increment, decrement }) => (
          <>
          <div>count: {count}</div>
          <button onClick={increment}>+1</button>
          <button onClick={decrement}>-1</button>
          </>
        )
      }
    </CounterContext.Consumer>
  );
}