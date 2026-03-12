/*
React Exercise 2 — Character Counter

GOAL
Practice derived state and conditional rendering.

DESCRIPTION
Create an input where the user types text and the UI shows
how many characters have been typed.

REQUIREMENTS

1. Use useState to store the input value.

2. Display the number of characters typed.

Example:
Characters: 5

3. If the number of characters exceeds 20,
show a warning message.

Example:
Characters: 22
⚠ Maximum recommended length exceeded

4. The counter must update in real time while typing.

5. Do not store the character count in state.
It should be derived from the text value.

STARTER STRUCTURE

import { useState } from "react";

export default function Exercise2() {
  return (
    <div>
      <input />
      <p>Characters:</p>
    </div>
  );
}
*/

import { useState } from "react";

export default function Exercise2() {
  const [text, setText] = useState("");

  const handleInput = (e) => {
    setText(e.target.value);
  };

  const count = text.length;

  return (
    <div>
      <input
        value={text}
        onChange={handleInput}
        placeholder="Type something"
      />

      <p>Characters: {count}</p>

      {count > 20 && (
        <p style={{ color: "red" }}>
          ⚠ Maximum recommended length exceeded
        </p>
      )}
    </div>
  );
}