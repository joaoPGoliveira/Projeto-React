import React, { useState } from 'react';

function CounterList() {
  const [counters, setCounters] = useState([0, 0]);

  const incrementCounter = (index) => {
    const newCounters = counters.map((counter, i) => 
      i === index ? counter + 1 : counter
    );
    setCounters(newCounters);
  };

  return (
    <div>
      {counters.map((counter, index) => (
        <div key={index}>
          <p>Counter {index + 1}: {counter}</p>
          <button onClick={() => incrementCounter(index)}>Increment</button>
        </div>
      ))}
    </div>
  );
}

export default CounterList;