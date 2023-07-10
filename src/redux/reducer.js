import { filterSlice } from "../components/Filters/filterSlice";
import { todoSlice } from "../components/TodoList/todoSlice";

export const reducer = (state = {}, action) => {
  return {
    filter: filterSlice(state.filter, action),
    todoList: todoSlice(state.todoList, action),
  };
};
