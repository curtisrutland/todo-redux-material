import { ADD_TODO, SET_TODO_COMPLETED, SET_ALL_COMPLETED, DELETE_ALL, DELETE_TODO } from "./actionTypes";
import * as storage from "../../services/storage";

const initialState = {
  items: []
};

const updateStorage = async items => {
  await storage.setTodos(items);
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      if (!action.payload.text || !action.payload.text.trim())
        return state;
      const items = [...state.items, action.payload];
      updateStorage(items);
      return {
        ...state,
        items
      };
    }

    case SET_TODO_COMPLETED: {
      const items = state.items.map(item => item.id === action.payload.id
        ? { ...item, completed: action.payload.completed }
        : item);
      updateStorage(items);
      return {
        ...state,
        items
      };
    }

    case SET_ALL_COMPLETED: {
      const items = state.items.map(item => ({ ...item, completed: action.payload }))
      updateStorage(items);
      return {
        ...state,
        items
      }
    }

    case DELETE_ALL:
      updateStorage([]);
      return {
        ...state,
        items: []
      }

    case DELETE_TODO: {
      const items = state.items.filter(item => item.id !== action.payload);
      updateStorage(items);
      return {
        ...state,
        items
      }
    }

    default:
      return state;
  }
};
