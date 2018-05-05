import { ADD_TODO, SET_TODO_COMPLETED } from "./actionTypes";

const initialState = {
  items: [
    { text: "Text", completed: false },
    { text: "Text 2", completed: false }
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        items: [...state.items, action.payload]
      };
    case SET_TODO_COMPLETED:
      const { idx, completed } = action.payload;
      return {
        ...state,
        items: state.items.map((item, index) => index === idx
          ? { ...item, completed }
          : item)
      };
    default:
      return state;
  }
};
