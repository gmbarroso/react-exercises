/*
GOAL
Practice state management, list rendering, derived state, and UI interaction.

REQUIREMENTS

1. User can add a task.
2. Empty tasks are not allowed.
3. Tasks are rendered in a list.
4. Each task has:
   - a text
   - a completed flag
5. User can toggle a task between completed and active.
6. User can remove a task.
7. Add 3 filters:
   - All
   - Active
   - Completed
8. Show "No tasks" when there are no tasks.
9. Show "No matching tasks" when the filter has no results.
*/
import { useState } from "react";

export default function ReactCodingExercise1() {
  const [task, setTask] = useState({
    name: "",
    completed: false
  })
  const [items, setItems] = useState([])
  // const [error, setError] = useState("")
  const [searchTask, setSearchTask] = useState("")

  const handleTask = (e) => {
    setTask({
      name: e.target.value,
      completed: false
    })
  }

  const handleItems = () => {
    const name = task.name.trim()

    // const hasNoTasks = items.some(item => item.length === 0)
    // if (hasNoTasks) {
    //   setError("No tasks")
    //   return
    // }

    if (name !== "") {
      setItems(prev => [...prev, {name, completed: false}])
      setTask({name: "", completed: false})
    }
  }

  const handleRemove = (itemToRemove) => {
    setItems(prev => prev.filter((item, index) => index !== itemToRemove))
  }

  const handleToggle = (indexToToggle) => {
    setItems(prev => prev.map((item, index) => {
      if (index === indexToToggle) {
        return { ...item, completed: !item.completed }
      }
      return item
    }))
  }

  const handleSearch = (e) => {
    setSearchTask(e.target.value.toLowerCase())
  }

  const filteredTasks = items.filter(item => item.name.toLowerCase().includes(searchTask))

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <input value={task.name} onChange={handleTask} placeholder="Type something" />
      <button onClick={handleItems}>Add to List</button>
      <input value={searchTask} onChange={handleSearch} placeholder="Search task" />
      {items.length === 0 && <p style={{ color: "red" }}>"No tasks"</p>}
      {filteredTasks.length === 0 ? (
        <p>No items found</p>
      ) : (
      <ul>
        {filteredTasks.map((item, index) => (
          <li key={`${item.name}-${index}`} style={{ textDecoration: item.completed ? "line-through" : "none"}}>
            <input type="checkbox" checked={item.completed} onChange={() => handleToggle(index)} />
            {item.name}
            <button style={{ marginLeft: "10px" }} onClick={() => handleRemove(index)}>Remove</button>
          </li>
        ))}
      </ul>
      )}
    </div>    
  );
}