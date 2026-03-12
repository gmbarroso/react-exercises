import { useState } from "react";

export default function App() {
  const [items, setItems] = useState([]);

  const addItem = () => {
    // items.push("New Item");
    // setItems(items);
    setItems((prev) => [...prev, "New Item"]);
  };

  return (
    <div>
      <button onClick={addItem}>Add</button>
      <ul>
        {items.map((item, index) => (
          // <li key={index}>{item}</li>
          <li key={`${item}-${index}`}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

/*
- What is the problem with that code?
The main problem is that the state array is being mutated directly with push.
In React, state should be treated as immutable. Mutating the array keeps the
same reference, which can lead to incorrect rendering behavior because React
relies on reference changes to detect updates. The correct fix is to create a
new array using the spread operator or a functional state update, like
setItems(prev => [...prev, "New Item"]). Also, using the array index as a key
can be risky if the list changes order or items are removed.

- Why this can break React rendering?
It can break rendering because React relies on reference changes to detect updates.
If we mutate the existing array and pass the same reference back, React may not
treat it as a proper state update.

- How to correct that?
*/