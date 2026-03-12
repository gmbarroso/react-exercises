import { useState } from "react";

export default function App() {
  const [items, setItems] = useState([]);
  const [text, setText] = useState("");

  const addItem = () => {
    const trimmedText = text.trim();

    if (!trimmedText) return

    setItems(prev => {
      if (trimmedText !== "") {
        return [...prev, trimmedText];
      }
      return prev;
    });
    setText("");
  };

  return (
    <div style={{ padding: 40, display: "flex", flexDirection: "column", gap: 20 }}>
      <input
        type="text"
        placeholder="Enter item"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={addItem}>Add</button>

      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

/*
- Why is this considered bad practice? because push mutates the original array and React relies on immutability. React will still re-render, because setItems(items) is called.
Because you are incrementing items directly using push, which mutates the original array.
React relies on immutability to detect changes and trigger re-renders.
When you mutate the array directly, React does not recognize that the state has changed,
and therefore does not update the UI.

- What bug could happen? React memoization breaks. React.memo(Component) or useEffect([items]) React might not detect the change correctly.
The issue is that push mutates the existing state array.
React state should be treated as immutable because React relies on reference
changes to detect updates. Instead of mutating the array, we should create a
new array using the spread operator.

- How should we fix it?
I would fix this creating an input to get the users value trimmed and then with the trimmed
value, I would setItems using an arrow function receiving a previous value, spreading the
previous value to maintain previous items in the array and adding the new trimmed value at
the end of the array. This way we are creating a new array instead of mutating the existing
one, which allows React to detect the change and update the UI accordingly.
*/