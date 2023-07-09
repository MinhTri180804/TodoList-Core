const initValue = {
  Filter: {
    search: "",
    status: "All",
    priorities: [],
  },

  todoList: JSON.parse(localStorage.getItem('todoList')) || [],   
};

export const reducer = (state = initValue, action) => {
  switch (action.type) {
    case "todoList/addTodo":
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };

    case "filter/searchFilter":
      return {
        ...state,
        Filter: {
          ...state.Filter,
          search: action.payload,
        },
      };

    case "filter/statusOptionFilter":
      return {
        ...state,
        Filter: {
          ...state.Filter,
          status: action.payload,
        },
      };

    case "todoList/toggleTodo":
      return {
        ...state,
        todoList: state.todoList.map((todo) => {
          return todo.id === action.payload
            ? { ...todo, completed: todo.completed ? false : true }
            : todo;
        }),
      };

    case "filter/prioritiesOptionFilter":
      return {
        ...state,
        Filter: {
          ...state.Filter,
          priorities: action.payload,
        },
      };

    case "todoList/removeTodo":
      return {
        ...state,
        todoList: state.todoList.filter(todo => todo.id !== action.payload)
      };
    default:
      return state;
  }
};
