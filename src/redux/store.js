import { createStore } from "redux";
import rootReducer from "./rootReducer";
import { addTodo } from "./todos/actions";
import { setShowCompleted } from "./ui/actions";
import * as storage from "../services/storage";

const store = createStore(rootReducer);

storage.getTodos().then(items => {
  if (items.length)
    items.forEach(item => store.dispatch(addTodo(item)));
});
storage.getShowCompleted().then(showCompleted => {
  store.dispatch(setShowCompleted(showCompleted));
});

export default store;