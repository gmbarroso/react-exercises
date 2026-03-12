import { useState } from "react";

let initialTasks = [
  { id: 1, name: "Task 1", completed: false },
  { id: 2, name: "Task 2", completed: false },
  { id: 3, name: "Task 3", completed: false },
];

export default function Exercise4() {
    const [taskList, setTaskList] = useState(initialTasks);

    const handleCheckBox = id => {
        setTaskList(prev => prev.map(t => {
            return t.id === id ? { ...t, completed: !t.completed } : t;
        }))
    }

    const handleSelectAll = () => {
        const areAllSelected = taskList.every(t => t.completed)

        // if (areAllSelected) {
        //     setTaskList(prev => prev.map( t => {
        //         return { ...t, completed: false }
        //     }))
        //     return
        // }

        setTaskList(prev => prev.map( t => {
            return { ...t, completed: !areAllSelected }
        }))
    }

  return (  
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <label>
            <input
                type="checkbox"
                // checked={taskList.every(t => t.completed)}
                checked={taskList.length > 0 && taskList.every(t => t.completed)}
                onChange={handleSelectAll}
            />SelectAll</label>
        <ul>
            {taskList.map(task => (
                <li key={task.id}>
                    <label>
                        <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => {
                                handleCheckBox(task.id);
                            }}
                        />
                        {task.name}
                    </label>
                </li>
            ))}
        </ul>
    </div>
  );
}

/*
1. Render a list of tasks
2. Each task has a checkbox
3. There is a "Select All" checkbox on top
4. If Select All is checked → all tasks become checked
5. If Select All is unchecked → all tasks become unchecked
6. If user manually checks all tasks → Select All becomes checked
7. If user unchecks one task → Select All becomes unchecked
*/