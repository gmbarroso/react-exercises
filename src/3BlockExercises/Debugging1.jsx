import { useState, useEffect } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Count changed");
//   }, []);
  }, [count]);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

/*
- Why useEffect wont run when count changes?
The effect has an empty dependency array, so it only runs once after the component mounts.

- How to correct that?
useEffect(() => {
  console.log("Count changed");
}, [count]);

- What is the mental thinking behind useEffect and its dependencies array?
useEffect runs after the render phase. The dependency array tells React when the effect should
re-run. If a dependency changes between renders, the effect runs again.
*/