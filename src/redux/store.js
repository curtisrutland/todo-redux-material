import { createStore } from "redux";
import rootReducer from "./rootReducer";
import { addTodo } from "./todos/actions";
import storage from "../services/storage";

const store = createStore(rootReducer);

(async () => {
  // store.dispatch(addTodo({ text: "Hello" }))
  // store.dispatch(addTodo({ text: "Hello 2" }))
  const items = await storage.getItems();
  if (items.length)
    items.map(item => store.dispatch(addTodo(item)));
})();

export default store;