import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    // setCount(count + 1);
    // setCount(count + 1);
    setCount(prevCount => prevCount + 2);
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={handleClick}>Increment twice</button>
    </div>
  );
}

/*
- After clicking the button once, what value will be displayed?
It will increment only once, so the value displayed will be 1.

- Why does this happen?
Both updates use the same stale value of count from the current render.
Since React batches state updates, both calls effectively execute setCount(0 + 1),
resulting in a final value of 1.

- How would you modify the code so that the counter actually increments twice?
to resolve this issue I would do the following:

const handleClick = () => {
    setCount(prevCount => prevCount + 1);
    setCount(prevCount => prevCount + 1);
  };
*/