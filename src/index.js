import { CreateToDo } from "./create.js";
import { displayTodo } from "./display.js";

const defaultList = [
  {
    title: "Groceries",
    description: "Buy item 1, item 2, item 3",
    dueDate: "2021-07-21",
    priority: "high",
    isCompleted: false,
  },
  {
    title: "Workout",
    description: "3 sets of bicep, 3 sets of tricep",
    dueDate: "2021-06-30",
    priority: "medium",
    isCompleted: true,
  },
];

displayTodo(defaultList);

const addItemBtn = document.querySelector("#add-todo-btn");

addItemBtn.addEventListener("click", () => {
  const newItem = CreateToDo();
  defaultList.push(newItem);
  removeAllChildNodes(document.querySelector("#todos-container"));
  displayTodo(defaultList);
});

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

// let itemsArray = [];

// localStorage.setItem("items", JSON.stringify(itemsArray));
// const data = JSON.parse(localStorage.getItem("items"));
