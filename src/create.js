import { format } from "date-fns";
import { defaultList } from "./index.js";
//Factory Function => To do items

const CreateToDo = (
  title = "Add title here",
  description = "Add details here",
  dueDate = format(new Date(), "yyyy-MM-dd"),
  priority = "low",
  isComplete = "false",
  project = "Unlisted"
) => {
  return { title, description, dueDate, priority, isComplete, project };
};

const saveListToLocalStorage = () => {
  let itemsStorage = JSON.stringify(defaultList);
  localStorage.setItem("itemsStorage", itemsStorage);
};

export { CreateToDo, saveListToLocalStorage };
