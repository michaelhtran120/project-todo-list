//Factory Function => To do items

const CreateToDo = (
  title = "Add title here",
  description = "Add details here",
  dueDate = `${new Date().getFullYear()}-${
    new Date().getMonth() + 1
  }-${new Date().getDate()}`,
  priority = "low",
  isComplete = "false"
) => {
  return { title, description, dueDate, priority, isComplete };
};

export { CreateToDo };
