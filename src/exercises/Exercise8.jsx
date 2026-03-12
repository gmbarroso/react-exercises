import { useState } from "react";

export default function Exercise8() {
  const [list, setList] = useState([]);
  const [text, setText] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);

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

  const handleSelect = (item) => {
    setSelectedItem(item === selectedItem ? null : item)
  }

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
              style={{
                display: "flex",
                gap: "10px",
                margin: "5px 0",
                alignItems: "center",
              }}
              onClick={() => handleSelect(item)}
            >
              <span style={{
                backgroundColor: item === selectedItem ? "#0e1deb" : "transparent",
                cursor: "pointer",
                fontWeight: item === selectedItem ? "bold" : "normal",
                border: item === selectedItem ? "1px solid #999" : "1px solid transparent",
              }}>
                {searchTerm
                  ? item.split(new RegExp(`(${searchTerm})`, "gi")).map((part, i) =>
                      part.toLowerCase() === searchTerm.toLowerCase() ? <mark key={i}>{part}</mark> : part
                    )
                  : item}
              </span>
              <button onClick={(e) => { e.stopPropagation(); handleRemove(item); }}>Remove</button>
            </li>
          ))}
        </ul>
      )}

    </div>
  );
}