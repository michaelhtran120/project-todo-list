//Factory Function => To do items

const CreateToDo = (title, description, dueDate, priority, isComplete) => {
  return { title, description, dueDate, priority, isComplete };
};

export { CreateToDo };
