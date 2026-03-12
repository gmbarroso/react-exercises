// import { useState, memo } from "react";
import { useState, memo, useMemo } from "react";

const Child = memo(function Child({ config }) {
  console.log("Child render");
  return <p>{config.label}</p>;
});

export default function Parent() {
  const [count, setCount] = useState(0);

  // const config = { label: "Hello" };
  const config = useMemo(() => ({ label: "Hello" }), []);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <Child config={config} />
    </div>
  );
}

/*
- Will Child re-render when the button is clicked?
Yes, it will.

- Why?
Because the config object is recreated on every render, so its reference
changes. Since React.memo performs a shallow comparison of props, it detects
a different object and re-renders the child.

- How would you prevent that unnecessary re-render?
To prevent the unnecessary re-render, we can use the useMemo hook to memoize the config object.
This way, the same object reference will be used across renders, and Child will not re-render
unless the dependencies of useMemo change.
*/