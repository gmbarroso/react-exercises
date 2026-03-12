import { useEffect } from "react";

export default function Parent() {

  useEffect(() => {
    const searchInput = document.querySelector("#search");
    const items = document.querySelectorAll("#list li");
    const emptyMessage = document.querySelector("#empty-message");

    searchInput.addEventListener("input", () => {
      const searchTerm = searchInput.value.toLowerCase();

      let visibleCount = 0;

      items.forEach(item => {
        const text = item.textContent.toLowerCase();

        if (text.includes(searchTerm)) {
          item.style.display = "list-item";
          visibleCount++;
        } else {
          item.style.display = "none";
        }
      });

      emptyMessage.style.display = visibleCount === 0 ? "block" : "none";
    });

  }, []);

  return (
    <>
      <input id="search" placeholder="Search fruits..." />

      <ul id="list">
        <li>Apple</li>
        <li>Banana</li>
        <li>Orange</li>
        <li>Mango</li>
      </ul>

      <p id="empty-message" style={{ display: "none" }}>
        No items found
      </p>
    </>
  );
}

/*
I have to use JS vanilla without frameworks

querySelector

addEventListener

textContent

toLowerCase

includes

manipulation of style.display

Expose my logic:
First I'll capture the input event, then I'll iterate through the list items and hide those that don't match the search term.
*/