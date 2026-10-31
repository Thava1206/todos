// src/index.js
import "./index.css"
import { createTodo } from "./todo.js"

const form = document.getElementById('myForm');
const formEl = document.querySelector(".form-container");

const priority =  document.getElementById('priorityLevel');
const task = document.getElementById('theTask');

const taskList = document.getElementById('todo-list');


const todos = [];
document.querySelector(".open-form").addEventListener("click", ()=> {
    form.style.display = "block";
});
document.querySelector(".cancel").addEventListener("click", ()=> {
    form.style.display = "none";
});
formEl.addEventListener("submit", (e)=> {
  e.preventDefault();
  const text = task.value;
  const level = priority.value;
  formEl.reset();
  form.style.display = "none";

  todos.push(createTodo(text,level));

  render();
});

// creating a way to add new element onto the board
function addElements() {
  for (const todo of todos) {
    const newElement = document.createElement("li");
    newElement.textContent = todo.title + " " + todo.priority;
    newElement.className = "todoTaskOb";
    newElement.id = todo.id;
    const buttonRemover = document.createElement("button");
    buttonRemover.textContent = "Remove";
    buttonRemover.className = "remove-btn";

    buttonRemover.addEventListener("click", (e)=> {
      e.stopPropagation();
      const index = todos.indexOf(todo);
      todos.splice(index,1);
      render();
    });
    if (todo.done) {
      newElement.classList.add("done");
    }
    newElement.addEventListener("click", ()=> {
      todo.done = !todo.done;
      render();
    });
    taskList.appendChild(newElement);
    newElement.appendChild(buttonRemover);
  }
}
function render() {
  taskList.replaceChildren();

  addElements();
}

