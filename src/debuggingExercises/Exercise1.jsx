import { useState } from "react";

export default function Counter() {
//   let count = 0;
const [count, setCount] = useState(0);

  const handleClick = () => {
    // count++;
    // setCount(count + 1)
    setCount(prev => prev + 1);
    // Using the functional form ensures we always update from the
    // latest state value, even when React batches updates.
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}

/*
Questions that interviewers do often ask:
- What is wrong with that code?
This code declarates a variable count directly in the component,
and it is not using the useState hook to manage the state of the count variable.
This means that when the button is clicked and the handleClick function is called,
it increments the count variable, but since it is not a state variable,
React does not know that it needs to re-render the component to reflect the
updated count value.

- Why does the UI not update?
The UI does not update because the count variable is not a state variable,
so React does not trigger a re-render when it changes. The component will only
re-render when its state or props change, and since count is just a regular
variable, React has no way of knowing that it has changed and therefore does not
update the UI.

- How would you fix it?
I would declare the useState import at the beginning of the file. Then I would
declare the count and setCount variables using the useState hook.
*/