import React from 'react';
import { withStyles } from "material-ui/styles";

import Todo from "./Todo";

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '95%',
    maxWidth: 900,
    alignItems: 'center',
    margin: "0 auto"
  },
  line: {
    width: "100%"
  }
};

const todoList = ({ classes, children, todos }) => {
  if (!todos) todos = [];
  return (
    <div className={classes.container}>
      {todos.map((t, idx) => {
        const {text, completed} = t;
        return (
          <Todo text={text} completed={completed} idx={idx} key={idx} />
        );
      })}
    </div>
  );
};

const styledTodoList = withStyles(styles)(todoList);

export default styledTodoList;