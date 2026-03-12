/*
Vanilla JS Exercise — Add and Filter Items

GOAL
Practice DOM manipulation, form/input handling, validation, list rendering, and filtering.

HTML

<input id="item-input" placeholder="Add item..." />
<button id="add-button">Add</button>

<input id="search-input" placeholder="Search items..." />

<ul id="list"></ul>

<p id="error-message" style="display:none; color:red"></p>
<p id="empty-message">No items yet</p>

REQUIREMENTS

1. When the user types an item and clicks Add, add the item to the list.

2. Prevent adding empty items.
If empty, show:
"Item cannot be empty"

3. After a valid add:
- clear the add input
- hide the error message

4. The search input must filter items in real time.

5. Filtering must be case-insensitive.

6. If the list has no items at all, show:
"No items yet"

7. If the list has items, but no search results match, show:
"No items found"

8. Do this with vanilla JavaScript DOM manipulation.
*/
import { useEffect } from "react";

export default function Parent() {
  useEffect(() => {
  const itemInput = document.querySelector("#item-input");
  const items = document.querySelector("#list");
  const addButton = document.querySelector("#add-button");
  const searchInput = document.querySelector("#search-input");
  const errorMessage = document.querySelector("#error-message");
  const emptyMessage = document.querySelector("#empty-message");

  function updateEmptyMessage() {
    const listItems = items.querySelectorAll("li");
    if (listItems.length === 0) {
      emptyMessage.textContent = "No items yet";
      emptyMessage.style.display = "block";
    } else {
      emptyMessage.style.display = "none";
    }
  }

  function handleItemInput() {
    if (itemInput.value.trim()) {
      errorMessage.textContent = "";
      errorMessage.style.display = "none";
    }
  }

  function handleAddItem() {
    const text = itemInput.value.trim();

    if (!text) {
      errorMessage.textContent = "Item cannot be empty";
      errorMessage.style.display = "block";
      return;
    }

    const li = document.createElement("li");
    li.textContent = text;
    items.appendChild(li);
    itemInput.value = "";
    updateEmptyMessage();
  }

  function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase();
    const listItems = items.querySelectorAll("li");

    let visibleCount = 0;

    listItems.forEach((li) => {
      if (li.textContent.toLowerCase().includes(searchTerm)) {
        li.style.display = "list-item";
        visibleCount++;
      } else {
        li.style.display = "none";
      }
    });

    if (listItems.length === 0) {
      emptyMessage.textContent = "No items yet";
      emptyMessage.style.display = "block";
    } else if (visibleCount === 0) {
      emptyMessage.textContent = "No items found";
      emptyMessage.style.display = "block";
    } else {
      emptyMessage.style.display = "none";
    }
  }

  itemInput.addEventListener("input", () => {
    if (itemInput.value.trim()) {
      errorMessage.textContent = "";
      errorMessage.style.display = "none";
    }
  });

  addButton.addEventListener("click", handleAddItem);
  searchInput.addEventListener("input", handleSearch);
  itemInput.addEventListener("input", handleItemInput);

  return () => {
    addButton.removeEventListener("click", handleAddItem);
    searchInput.removeEventListener("input", handleSearch);
    itemInput.removeEventListener("input", handleItemInput);
  };
}, []);


  return (
    <>
      <div style={{ padding: 40, display: "flex", flexDirection: "column", gap: 20 }}>
        <input id="item-input" placeholder="Add item..." />
        <button id="add-button">Add</button>

        <input id="search-input" placeholder="Search items..." />

        <ul id="list"></ul>

        <p id="error-message" style={{ display: "none", color: "red" }}></p>
        <p id="empty-message">No items yet</p>
      </div>
    </>
  );
}