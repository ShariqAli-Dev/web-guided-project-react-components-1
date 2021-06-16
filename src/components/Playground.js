import React, { useState } from 'react';
/*
💥💥💥 Rules of STATE 💥💥💥
  - We create a slice of state like this: `const [healthPoints, setHealthPoints] = useState(100)`
  - A component may have as may slices of state as it needs
  - An slice of state may contain a string, a number, a boolean, an array, an object...
  - We use slices of state to store information that changes as the user interacts with the app
  - State is used in the JSX interpolated inside curly brackets
  - We never tamper with state: `healthPoints++`, `healthPoints--` or `someState.push(item)` is FORBIDDEN
  - We use the dedicated "state updater" to schedule a state change: `setHealthPoints(healthPoints + 1)`
*/
const Playground = () => {
  const [count, setCount] = useState(0);
  const [isNight, setIsNight] = useState(false);
  return (
    <div>
      <div>Current Count: {count}</div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <div onClick={() => setIsNight(!isNight)}>{isNight ? '☀️' : '🌙'}</div>
    </div>
  );
}

export default Playground;