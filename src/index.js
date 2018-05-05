import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux"

import './index.css';
import App from './containers/App';
import store from "./redux/store";
import { addTodo, setTodoCompleted } from "./redux/todos/actions";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


window.store = store;
window.addTodo = addTodo;
window.setTodoCompleted = setTodoCompleted;

store.dispatch(addTodo({ text: "Hello" }))
store.dispatch(addTodo({ text: "Hello 2" }))

// import registerServiceWorker from './registerServiceWorker';
// registerServiceWorker();
