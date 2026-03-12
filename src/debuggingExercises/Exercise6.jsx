import { useState, memo, useMemo } from "react";

const Child = memo(function Child({ config }) {
  console.log("Child render");
  return <p>{config.name}</p>;
});

export default function Parent() {
  const [count, setCount] = useState(0);

  const config = useMemo(() => ({ name: "John" }), []);

  return (
    <>
      <button onClick={() => setCount(prev => prev + 1)}>+</button>
      <Child config={config} />
    </>
  );
}
/*
- How to prevent this re-render?
You can use the useMemo hook to memoize the config object, ensuring that it
retains the same reference between renders unless its dependencies change.

In this case, yes, Child re-renders. Even though the object content is the same,
the config object is recreated on every parent render, so its reference changes.
Since React.memo does a shallow comparison, it sees a new object and re-renders the child.
*/