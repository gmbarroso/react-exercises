/*
React Exercise 5 — Filter List

GOAL
Practice derived state and case-insensitive filtering.

DESCRIPTION
Start from your list exercise and add a second input to filter the items.

REQUIREMENTS

1. Keep the add-item and remove-item behavior.

2. Add a second input for search/filter.

3. As the user types in the search input, show only matching items.

4. Filtering must be case-insensitive.

Example:
"apple" should match "Apple"

5. If no items match, show:
No items found

6. Do not store the filtered list in state.
Derive it from the main list and the search text.
*/
import { useState } from "react";

export default function Exercise6() {
  const [list, setList] = useState([]);
  const [text, setText] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

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

  const handleSearchInput = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
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