import { CreateToDo } from "./create.js";
import {
  defaultList,
  displayTodo,
  removeAllChildNodes,
  displayCustomProject,
} from "./display.js";
import { format, addDays } from "date-fns";

const addItemBtn = document.querySelector("#add-todo-btn");
const allBtn = document.querySelector("#all-btn");
const todayBtn = document.querySelector("#today-btn");
const tomorrowBtn = document.querySelector("#tomorrow-btn");
const rightContainerTitle = document.querySelector("#right-container-title");

const todayDate = format(new Date(), "yyyy-MM-dd");
const tomorrowDate = format(addDays(new Date(), 1), "yyyy-MM-dd");

allBtn.addEventListener("click", () => {
  removeAllChildNodes(document.querySelector("#todos-container"));
  displayTodo(defaultList);
  rightContainerTitle.innerText = allBtn.textContent;
});

todayBtn.addEventListener("click", () => {
  const todayArray = defaultList.filter(function (obj) {
    return obj.dueDate === todayDate;
  });
  removeAllChildNodes(document.querySelector("#todos-container"));
  displayTodo(todayArray);
  rightContainerTitle.innerText = todayBtn.textContent;
});

tomorrowBtn.addEventListener("click", () => {
  const tomorrowArray = defaultList.filter(function (obj) {
    return obj.dueDate === tomorrowDate;
  });
  removeAllChildNodes(document.querySelector("#todos-container"));
  displayTodo(tomorrowArray);
  rightContainerTitle.innerText = tomorrowBtn.textContent;
});

addItemBtn.addEventListener("click", () => {
  const newItem = CreateToDo();
  defaultList.push(newItem);
  removeAllChildNodes(document.querySelector("#todos-container"));
  displayTodo(defaultList);
  rightContainerTitle.textContent = "All Items";
  removeAllChildNodes(document.querySelector("#custom-projects"));
  displayCustomProject(defaultList);
});

// Local Storage Functions

const saveListToLocalStorage = () => {
  let itemsStorage = JSON.stringify(defaultList);
  localStorage.setItem("itemsStorage", itemsStorage);
};

window.addEventListener("beforeunload", function (e) {
  e.preventDefault();
  localStorage.removeItem("itemsStorage");
  saveListToLocalStorage();
});

if (localStorage.getItem("itemsStorage") !== null) {
  displayTodo(defaultList);
  displayCustomProject(defaultList);
}
