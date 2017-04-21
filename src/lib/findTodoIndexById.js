const findTodoIndexById = (todos, id) =>
  todos.findIndex(todo => todo.id === id);

export default findTodoIndexById;
