/*
React Exercise 7 — Form Submit Behavior

GOAL
Practice form handling and keyboard interaction.

DESCRIPTION
Refactor the add-item flow to use a form.

REQUIREMENTS

1. Wrap the add input and button inside a form.

2. Submitting the form with Enter must add the item.

3. Use event.preventDefault() to prevent page refresh.

4. Keep duplicate validation, empty validation, search, and remove behavior.

5. After a valid add:
   - clear the input
   - keep the search term unchanged
   - clear any error message
*/
import { useState } from "react";

export default function Exercise7() {
  const [list, setList] = useState([]);
  const [text, setText] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState("");

  const handleList = (e) => {
    e.preventDefault();
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

  const handleRemove = (itemToRemove) => {
    setList((prev) => prev.filter((item) => item !== itemToRemove));
  };

  const filteredList = list.filter(item => item.toLowerCase().includes(searchTerm));

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <form style={{ display: "flex", flexDirection: "column", gap: "10px" }} onSubmit={handleList}>
        <input
          value={text}
          onChange={handleInput}
          placeholder="Type something"
        />
        <button type="submit">Add to List</button>
      </form>

      <input
          value={searchTerm}
          onChange={handleSearchInput}
          placeholder="Search something"
      />

      {error && <p style={{ color: "red" }}>{error}</p>}

      {filteredList.length === 0 ? (
        <p>No items found</p>
      ) : (
        <ul>  
          {filteredList.map((item, index) => (
            <li
              key={`${item}-${index}`}
              style={{ display: "flex", gap: "10px", margin: "5px 0", alignItems: "center" }}
            >
              <span>{item}</span>
              <button onClick={() => handleRemove(item)}>Remove</button>
            </li>
          ))}
        </ul>
      )}

    </div>
  );
}