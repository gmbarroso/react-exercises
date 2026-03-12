/*
React Exercise 4 — Remove Items

GOAL
Practice removing items from array state.

DESCRIPTION
Start from your list exercise and add a Remove button for each item.

REQUIREMENTS

1. Keep the input and add-item behavior from Exercise 3.

2. Each item in the list must have a Remove button.

Example:
• Apple   [Remove]
• Banana  [Remove]

3. Clicking Remove should delete only that item.

4. The UI must update immediately after removal.

5. Use filter() or another immutable approach.
Do not mutate the array directly.

6. Still prevent empty items from being added.
*/

import { useState } from "react";

export default function Exercise4() {
  const [list, setList] = useState([]);
  const [text, setText] = useState("");

  const handleList = () => {
    const trimmedText = text.trim();
    if (trimmedText !== "") {
      setList( prev => [...prev, trimmedText] );
      setText("");
    }
  };

  const handleInput = (e) => {
    setText(e.target.value);
  };

  const handleRemove = (indexToRemove) => {
    setList(prev => prev.filter((_, index) => index !== indexToRemove));
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <input
        value={text}
        onChange={handleInput}
        placeholder="Type something"
      />
      <button onClick={handleList}>Add to List</button>
      <ul>
        {list.map((item, index) => (
          <li key={index} style={{ display: "flex", gap: "10px", margin: "5px 0", alignItems: "center" }}>
            <span>{item}</span>
            <button onClick={() => handleRemove(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}