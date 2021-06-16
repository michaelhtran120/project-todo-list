import { format } from "date-fns";

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

function checkProjectExist() {}

export { CreateToDo };
