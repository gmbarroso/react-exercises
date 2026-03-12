import { useState, memo } from "react";

const Child = memo(function Child({ config }) {
  console.log("Child render");
  return <p>{config.name}</p>;
});

export default function Parent() {
  const [count, setCount] = useState(0);

  const config = { name: "John" };

  return (
    <>
      <button onClick={() => setCount(count + 1)}>+</button>
      <Child config={config} />
    </>
  );
}
/*
- Would Child re-render here?
Yes, Child would re-render every time the button is clicked because the config object
is being recreated on every render of Parent. Even though the content of the config
object (name: "John") does not change, it is a new object reference each time Parent
re-renders, which causes Child to re-render as well.
*/