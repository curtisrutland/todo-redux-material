import { ADD_TODO, SET_TODO_COMPLETED, SET_ALL_COMPLETED, DELETE_ALL } from "./actionTypes";

export const addTodo = todo => ({ type: ADD_TODO, payload: todo });
export const setTodoCompleted = (idx, completed) => ({
  type: SET_TODO_COMPLETED,
  payload: {
    idx,
    completed
  }
});
export const setAllCompleted = completed => ({ type: SET_ALL_COMPLETED, payload: completed });
export const deleteAll = () => ({ type: DELETE_ALL });