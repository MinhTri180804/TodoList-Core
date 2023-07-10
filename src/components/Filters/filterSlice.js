const initValue = {
  search: "",
  status: "All",
  priorities: [],
};

export const filterSlice = (state = initValue, action) => {
  switch (action.type) {
    case "filter/searchFilter":
      return {
        ...state,
        search: action.payload,
      };

    case "filter/statusOptionFilter":
      return {
        ...state,
        status: action.payload,
      };

    case "filter/prioritiesOptionFilter":
      return {
        ...state,
        priorities: action.payload,
      };

    default:
      return state;
  }
};
