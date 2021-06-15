import { CreateToDo } from "./create.js";
import { defaultList, displayTodo, removeAllChildNodes } from "./display.js";
import { format, addDays } from "date-fns";

// let defaultList = [
//   {
//     title: "Groceries",
//     description: "Buy item 1, item 2, item 3",
//     dueDate: format(addDays(new Date(), 1), "yyyy-MM-dd"),
//     priority: "high",
//     isCompleted: false,
//     project: "Shopping",
//   },
//   {
//     title: "Workout",
//     description: "3 sets of bicep, 3 sets of tricep",
//     dueDate: format(new Date(), "yyyy-MM-dd"),
//     priority: "medium",
//     isCompleted: true,
//     project: "None",
//   },
// ];

displayTodo(defaultList);

const addItemBtn = document.querySelector("#add-todo-btn");
const allBtn = document.querySelector("#all-btn");
const todayBtn = document.querySelector("#today-btn");
const tomorrowBtn = document.querySelector("#tomorrow-btn");
const rightContainerTitle = document.querySelector("#right-container-title");

const todayDate = format(new Date(), "yyyy-MM-dd");
const tomorrowDate = format(addDays(new Date(), 1), "yyyy-MM-dd");

allBtn.addEventListener("click", () => {
  console.log("all items");
  removeAllChildNodes(document.querySelector("#todos-container"));
  displayTodo(defaultList);
  console.log(defaultList);
  rightContainerTitle.innerText = allBtn.textContent;
});

todayBtn.addEventListener("click", () => {
  console.log("today's items");
  const todayArray = defaultList.filter(function (obj) {
    return obj.dueDate === todayDate;
  });
  console.log(todayArray);
  removeAllChildNodes(document.querySelector("#todos-container"));
  displayTodo(todayArray);
  rightContainerTitle.innerText = todayBtn.textContent;
});

tomorrowBtn.addEventListener("click", () => {
  console.log("tomorrow's items");
  const tomorrowArray = defaultList.filter(function (obj) {
    return obj.dueDate === tomorrowDate;
  });
  console.log(tomorrowArray);
  removeAllChildNodes(document.querySelector("#todos-container"));
  displayTodo(tomorrowArray);
  rightContainerTitle.innerText = tomorrowBtn.textContent;
});

addItemBtn.addEventListener("click", () => {
  const newItem = CreateToDo();
  defaultList.push(newItem);
  //   saveListToLocalStorage();
  removeAllChildNodes(document.querySelector("#todos-container"));
  displayTodo(defaultList);
  console.log(defaultList);
  rightContainerTitle.textContent = "All Items";
});

// // // Local Storage Functions

// const saveListToLocalStorage = () => {
//   localStorage.setItem("allitems", defaultList);
// };

// const storedInput = localStorage.getItem("allitems");

// if (defaultList) {
//   defaultList = storedInput;
// }
