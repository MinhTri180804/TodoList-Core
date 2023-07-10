const initValue = JSON.parse(localStorage.getItem("todoList")) || [];

export const todoSlice = (state = initValue, action) => {
  switch (action.type) {
    case "todoList/addTodo":
      return [...state, action.payload];

    case "todoList/toggleTodo":
      return state.map((todo) => {
        return todo.id === action.payload
          ? { ...todo, completed: todo.completed ? false : true }
          : todo;
      });

    case "todoList/removeTodo":
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
};
