/*
React Exercise 3 — Add Items to a List

GOAL
Practice managing arrays in state and rendering lists.

DESCRIPTION
Create an input where the user can type an item and add it to a list.

REQUIREMENTS

1. Use useState to store the list of items.

2. The user should be able to type an item in an input.

3. Clicking "Add" should add the item to the list.

Example:

Input: [Apple] [Add]

List
• Apple
• Banana
• Orange

4. Render the list using map().

5. Each list item must have a React key.

6. Prevent adding empty items.

Hint:
Trim whitespace before validating.

Example:
"   " should not be accepted.
*/

import { useState } from "react";

export default function Exercise3() {
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
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}