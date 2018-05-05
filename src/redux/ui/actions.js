import { TOGGLE_DRAWER, OPEN_DRAWER, CLOSE_DRAWER, SET_SHOW_COMPLETED } from "./actionTypes";

export const toggleDrawer = () => ({ type: TOGGLE_DRAWER });
export const openDrawer = () => ({ type: OPEN_DRAWER });
export const closeDrawer = () => ({ type: CLOSE_DRAWER });
export const setShowCompleted = show => ({ type: SET_SHOW_COMPLETED, payload: show });