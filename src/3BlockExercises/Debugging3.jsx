// import { useState } from "react";
import { useState, memo, useCallba } from "react";


// function Child({ onClick }) {
const Child = memo(function Child({ onClick }) {
  console.log("Child render");

  return <button onClick={onClick}>Click me</button>;
});

export default function Parent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <p>{count}</p>
      {/* <Child onClick={() => setCount(count + 1)} /> */}
      <Child onClick={handleClick} />
    </div>
  );
}

/*
- Why Child re-render everytime?
Child re-renders because the parent re-renders, and the inline function
passed as onClick is recreated on every render, so its reference changes.

- How to minimize unecessary re-renders of Child component?
By using the useCallback hook to memoize the function, so its reference
doesn't change on every render.

- What is the hook to use for that?
useCallback is the hook used to memoize functions in React.
*/