const quantitiesReducer = (state, action) => {
  switch (action.type) {
    case "add_update": {
      return new Map(state).set(
        action.id,
        action.value === "" || !action.value ? 1 : Number(action.value)
      );
    }
    case "remove": {
      const newMap = new Map(state);
      newMap.delete(action.id);
      return newMap;
    }
    case "reset": {
      return new Map();
    }
    default: {
      throw new Error("Quantities unknown action: " + action.type);
    }
  }
};

export default quantitiesReducer;
