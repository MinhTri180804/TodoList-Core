export const addTodo = (data) => {
  return {
    type: "todoList/addTodo",
    payload: data,
  };
};

export const searchTextFilter = (text) => {
  return {
    type: "filter/searchFilter",
    payload: text,
  };
};

export const statusOptionFilter = (option) => {
  return {
    type: "filter/statusOptionFilter",
    payload: option,
  };
};

export const toggleTodo = (todoId) => {
  return {
    type: "todoList/toggleTodo",
    payload: todoId,
  };
};

export const prioritiesOptionFilter = (optionPriorities) => {
    return {
        type: "filter/prioritiesOptionFilter",
        payload: optionPriorities,
    }
}


export const removeTodo = (todoId) => {
    return {
        type: "todoList/removeTodo",
        payload: todoId,
    }
}