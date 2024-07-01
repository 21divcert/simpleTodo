let todos = [
  {
    id: 1,
    title: "First Task",
    contents: "This is 첫번째 태스크 입니다.",
    create_at: new Date().toISOString(),
    update_at: new Date().toISOString(),
  },
  {
    id: 2,
    title: "Second Task",
    contents: "This is the Second task",
    create_at: new Date().toISOString(),
    update_at: new Date().toISOString(),
  },
];
// 모든 todo
export const getTodos = () => {
  return todos;
};

// id로 todo 찾기
export const getTodoById = (id) => {
  return todos.find((todo) => todo.id === id);
};

//todo 추가
export const addTodo = (todo) => {
  todo.id = todos.length ? todos[todos.length - 1].id + 1 : 1;
  todo.create_at = new Date().toISOString();
  todo.update_at = new Date().toISOString();
  todos.push(todo);
};

//todo 수정
export const updateTodo = (updatedTodo) => {
  todos = todos.map((todo) =>
    todo.id === updatedTodo.id
      ? { ...updatedTodo, update_at: new Date().toISOString() }
      : todo
  );
};

//todo 삭제
export const deleteTodo = (id) => {
  todos = todos.filter((todo) => todo.id !== id);
};
