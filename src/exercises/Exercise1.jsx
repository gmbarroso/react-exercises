/*
React Exercise 1 — Controlled Input

GOAL
Understand how React state and re-rendering work by creating a controlled input.

DESCRIPTION
Build a component where the user types text into an input field and the text
appears below the input in real time.

EXPECTED UI

Input: [Hello]

You typed: Hello

The displayed text should update immediately as the user types.

REQUIREMENTS

1. Use the React hook `useState` to store the input value.

2. The input must be a CONTROLLED component:
   - its value must come from React state
   - typing must update the state.

3. Use the `onChange` event to capture user input.

4. The paragraph below the input must display the current value.

5. The UI should update on every keystroke.

STARTER STRUCTURE

import { useState } from "react";

export default function Exercise1() {
  return (
    <div>
      <input />
      <p>You typed:</p>
    </div>
  );
}

QUESTIONS TO THINK ABOUT

- Where should the typed value be stored?
- How does React know when the input changes?
- How do we connect the input value with React state?

CONCEPTS BEING TESTED

- useState
- Controlled components
- React re-rendering
- Event handling with onChange
*/

import { useState } from "react";

export default function Exercise1() {
  const [text, setText] = useState("");

  const handleInput = (e) => {
    setText(e.target.value);
  }

  return (
    <div>
      <input
        value={text}
        onChange={handleInput}
        placeholder="Type something"
      />

      <p>You typed: {text}</p>
    </div>
  );
}