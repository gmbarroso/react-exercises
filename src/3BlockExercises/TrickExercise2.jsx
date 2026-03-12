import { useState, useEffect } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Effect ran");
  // });
  // }, []);
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <p>{count}</p>
    </div>
  );
}

/*
- When does the useEffect run?
The effect runs after every render because there is no dependency array.

- Why does it behave this way?
Because no dependency array is provided, React executes the effect after every render.

- How would you change it so that the effect runs only once when the component mounts?
useEffect(() => {
    console.log("Effect ran");
  }, []);
*/