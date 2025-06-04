const cartItemsReducer = (state, action) => {
  switch (action.type) {
    case "add": {
      return state.includes(action.id) ? state : [...state, action.id];
    }
    case "remove": {
      return state.filter((item) => item !== action.id);
    }
    case "reset": {
      return [];
    }
    default: {
      throw new Error("Cart item unknown action: " + action.type);
    }
  }
};

export default cartItemsReducer;
