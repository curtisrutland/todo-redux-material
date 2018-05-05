import { ADD_TODO, SET_TODO_COMPLETED } from "./actionTypes";

export const addTodo = todo => ({ type: ADD_TODO, payload: todo });
export const setTodoCompleted = (idx, completed) => ({
  type: SET_TODO_COMPLETED, 
  payload: {
    idx,
    completed
  }
});