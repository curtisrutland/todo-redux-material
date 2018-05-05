import { ADD_TODO, SET_TODO_COMPLETED, SET_ALL_COMPLETED, DELETE_ALL } from "./actionTypes";

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
      return {
        ...state,
        items: state.items.map((item, index) => index === action.payload.idx
          ? { ...item, completed: action.payload.completed }
          : item)
      };

    case SET_ALL_COMPLETED:
      return {
        ...state,
        items: state.items.map(item => ({ ...item, completed: action.payload }))
      }

    case DELETE_ALL:
      return {
        ...state,
        items: []
      }

    default:
      return state;
  }
};
