import { FactoryTodoItem } from "./create.js";

const item1 = FactoryTodoItem(
  "Groceries",
  "Buy item 1, item 2, item 3",
  "11/22/21",
  "high",
  false
);

const item2 = FactoryTodoItem(
  "workout",
  "3 sets of bicep, 3 sets of tricep",
  `${new Date()}`,
  "low",
  "false"
);

const defaultList = [];
const today = [];
const thisWeek = [];

const addTodo = (...obj) => {
  defaultList.push(obj);
};

addTodo(item1, item2);

console.log(defaultList);
