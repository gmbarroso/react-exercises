import { useState } from "react";

export default function TodoApp() {
  const [taskName, setTaskName] = useState("");
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  const handleAddTask = () => {
    const trimmed = taskName.trim();

    if (!trimmed) return;

    const newTask = {
      id: Date.now(),
      name: trimmed,
      completed: false
    };

    setTasks((prev) => [...prev, newTask]);
    setTaskName("");
  };

  const handleRemove = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const handleToggle = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const filteredTasks = tasks
    .filter((task) => {
      if (filter === "active") return !task.completed;
      if (filter === "completed") return task.completed;
      return true;
    })
    .filter((task) =>
      task.name.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16, padding: 40 }}>
      <h1>React Exercises</h1>

      <input
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Add task"
      />

      <button onClick={handleAddTask}>Add</button>

      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search task"
      />

      <div style={{ display: "flex", gap: 10 }}>
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("active")}>Active</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
      </div>

      {tasks.length === 0 ? (
        <p>No tasks</p>
      ) : filteredTasks.length === 0 ? (
        <p>No matching tasks</p>
      ) : (
        <ul>
          {filteredTasks.map((task) => (
            <li
              key={task.id}
              style={{
                display: "flex",
                gap: 10,
                alignItems: "center",
                textDecoration: task.completed ? "line-through" : "none"
              }}
            >
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleToggle(task.id)}
              />

              {task.name}

              <button onClick={() => handleRemove(task.id)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}