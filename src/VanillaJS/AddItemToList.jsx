import { useEffect } from "react";

export default function ToggleVisibility() {

  useEffect(() => {
    const input = document.querySelector("#taskInput");
    const button = document.querySelector("#addTask");
    const taskList = document.querySelector("#taskList");

    if (!input || !button || !taskList) return;

    const handleClick = () => {
      const task = input.value.trim()

      if (!task) return

      // if (task) {
      //   const listItem = document.createElement("li")
      //   listItem.textContent = task
      //   taskList.appendChild(listItem)
      //   input.value = ""
      // }
      const listItem = document.createElement("li")
      listItem.textContent = task
      
      taskList.appendChild(listItem)
      input.value = ""
    }

    button.addEventListener("click", handleClick)
    return () => {
      button.removeEventListener("click", handleClick)
    }
  }, []);

  return (
    <div>
      <input id="taskInput" placeholder="Add task" />
      <button id="addTask">Add</button>
        
      <ul id="taskList"></ul>
    </div>
  );
}

/*
Quando clicar em Add

Criar um <li>

Inserir o texto do input

Adicionar na lista

Limpar o input

Não permitir item vazio
*/