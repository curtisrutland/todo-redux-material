import { ADD_TODO, SET_TODO_COMPLETED, SET_ALL_COMPLETED, DELETE_ALL, DELETE_TODO } from "./actionTypes";
import uuidv1 from "uuid";


export const addTodo = ({ text, completed = false }) => ({ type: ADD_TODO, payload: { text, completed, id: uuidv1() } });
export const setTodoCompleted = (id, completed) => ({
  type: SET_TODO_COMPLETED,
  payload: {
    id,
    completed
  }
});
export const setAllCompleted = completed => ({ type: SET_ALL_COMPLETED, payload: completed });
export const deleteAll = () => ({ type: DELETE_ALL });
export const deleteTodo = id => createMessage(DELETE_TODO, id);

const createMessage = (type, payload) => ({ type, payload });