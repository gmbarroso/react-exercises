import { useState, useEffect } from "react";

export default function App() {
  const [items, setItems] = useState(["apple", "banana"]);
  // const [filteredItems, setFilteredItems] = useState([]);

  // useEffect(() => {
  //   setFilteredItems(items.filter(item => item.startsWith("a")));
  // }, [items]);
  const filteredItems = items.filter((item) => item.startsWith("a"));

  return (
    <div>
      {filteredItems.map(item => (
        <p key={item}>{item}</p>
      ))}
    </div>
  );
}

/*
- What is the design problem in this code?
The problem is that filteredItems is derived from items,
so it should not be stored in state. That duplicates the source of
truth and can lead to unnecessary complexity and extra renders. A
better approach is to compute the filtered list directly during render.

- Why is this considered an anti-pattern in React?
This is an anti-pattern because filteredItems is derived from items,
so storing it in state duplicates data that can already be calculated during render.

- How would you rewrite it in a better way?
*/