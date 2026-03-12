/*
React Exercise 6 — Prevent Duplicates

GOAL
Practice validation and edge-case handling.

DESCRIPTION
Start from your list exercise and prevent the user from adding duplicate items.

REQUIREMENTS

1. Keep add, remove, and search behavior.

2. When the user tries to add an item that already exists, do not add it.

3. Duplicate validation must be case-insensitive.

Example:
"Apple" and "apple" should be considered duplicates.

4. Show an error message when a duplicate is detected.

Example:
Item already exists

5. Still prevent empty items.

6. Clear the error message after a valid add.
*/
import { useState } from "react";

export default function Exercise6() {
  const [list, setList] = useState([]);
  const [text, setText] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState("");

  const handleList = () => {
    const trimmedText = text.trim();

    if(!trimmedText) {
      setError("Item cannot be empty");
      return;
    }

    const hasDuplicate = list.some(item => item.toLowerCase() === text.trim().toLowerCase());
    if (hasDuplicate) {
      setError("Item already exists in the list");
      return;
    }

    if (trimmedText !== "") {
      setList( prev => [...prev, trimmedText] );
      setText("");
      setError("");
    }
  };

  const handleInput = (e) => {
    setText(e.target.value);
    if (error) setError("");
  };

  const handleSearchInput = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  }

  const handleRemove = (indexToRemove) => {
    setList(prev => prev.filter((_, index) => index !== indexToRemove));
  }

  const filteredList = list.filter(item => item.toLowerCase().includes(searchTerm));

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
        <input
          value={text}
          onChange={handleInput}
          placeholder="Type something"
        />
        <input
          value={searchTerm}
          onChange={handleSearchInput}
          placeholder="Search something"
        />
      </div>

      <button onClick={handleList}>Add to List</button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {filteredList.length === 0 ? (
        <p>No items found</p>
      ) : (
        <ul>
          {filteredList.map((item, index) => (
            <li
              key={index}
              style={{ display: "flex", gap: "10px", margin: "5px 0", alignItems: "center" }}
            >
              <span>{item}</span>
              <button onClick={() => handleRemove(index)}>Remove</button>
            </li>
          ))}
        </ul>
      )}

    </div>
  );
}