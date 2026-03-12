import { useState, memo } from "react";

const Child = memo(function Child({ name }) {
  console.log("Child render");
  return <p>{name}</p>;
});

export default function Parent() {
  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>+</button>
      <Child name="John" />
    </>
  );
}

/*
- Does Child re-render now? Why?
No, Child does not re-render when the button is clicked because it is wrapped with React.memo.
React.memo memoizes the component, preventing it from re-rendering unless its props change.
Since the props of Child (name="John") do not change when the count state in Parent changes,
Child will not re-render, thus optimizing performance by avoiding unnecessary renders.
*/