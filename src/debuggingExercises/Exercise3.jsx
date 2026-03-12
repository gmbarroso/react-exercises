import { useState } from "react";

function Child() {
  console.log("Child render");

  return <p>Child component</p>;
}

export default function Parent() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>+</button>
      <Child />
    </div>
  );
}

/*
- When clicking the button, does Child re-render?
Yes, Child re-renders every time the button is clicked because the Parent
component re-renders when its state changes (when count is updated).
Since Child is a child of Parent, it also re-renders whenever Parent re-renders.

- Why?
Child re-renders because it is a child component of Parent, and when the state of
Parent changes (when count is updated), React triggers a re-render of Parent and all
of its child components, including Child. This is the default behavior in React,
where any change in state or props causes a re-render of the component and its children.

- How could we prevent unnecessary re-renders?
I would React.memo(Child) to memoize the Child component.
This way, Child will only re-render if its props change, which in this case,
they do not. Since Child does not receive any props, it will not re-render when the count state
in Parent changes, thus preventing unnecessary re-renders.
*/