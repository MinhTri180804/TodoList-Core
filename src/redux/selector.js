import { createSelector } from "reselect";

export const todoListSelector = (state) => state.todoList;
export const searchFilterSelector = (state) => state.filter.search;
export const statusFilterSelector = (state) => state.filter.status;
export const prioritiesFilterSelector = (state) => state.filter.priorities;

export const todoListResultFilter = createSelector(
  todoListSelector,
  searchFilterSelector,
  statusFilterSelector,
  prioritiesFilterSelector,
  (todoList, searchText, statusFilter, priorities) => {
    const newTodo = [...todoList];
    const saveLocal = localStorage.setItem('todoList', JSON.stringify(newTodo));
    return todoList.filter((todo) => {
      const nameTodo = todo.name.toLowerCase();
      const statusTodo = todo.completed;
      const priorityTodo = todo.priority;

      if (statusFilter === "All") {
        return priorities.length
          ? nameTodo.includes(searchText.toLowerCase()) &&
              priorities.includes(priorityTodo)
          : nameTodo.includes(searchText.toLowerCase());
      }

      return priorities.length
        ? nameTodo.includes(searchText.toLowerCase()) &&
            (statusFilter === "Completed" ? statusTodo : !statusTodo) &&
            priorities.includes(priorityTodo)
        : nameTodo.includes(searchText.toLowerCase()) &&
            (statusFilter === "Completed" ? statusTodo : !statusTodo);
    });
  }
);
