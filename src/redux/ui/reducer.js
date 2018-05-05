import { TOGGLE_DRAWER, OPEN_DRAWER, CLOSE_DRAWER, SET_SHOW_COMPLETED } from "./actionTypes";
import * as storage from "../../services/storage";

const initialState = {
  drawerOpen: false,
  theme: "light",
  showCompleted: true
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_DRAWER:
      return {
        ...state,
        drawerOpen: !state.drawerOpen
      }

    case OPEN_DRAWER:
      return {
        ...state,
        drawerOpen: true
      }

    case CLOSE_DRAWER:
      return {
        ...state,
        drawerOpen: false
      }

    case SET_SHOW_COMPLETED:
      storage.setShowCompleted(action.payload);
      return {
        ...state,
        showCompleted: action.payload
      }

    default:
      return state;
  }
};