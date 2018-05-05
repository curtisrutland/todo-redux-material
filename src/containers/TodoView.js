import React from 'react';
import { connect } from "react-redux";
import { withStyles } from 'material-ui/styles';

import Card, { CardContent } from "material-ui/Card";

import TodoList from "../components/todos/TodoList";
import TodoHeader from "../components/todos/TodoHeader"

const styles = {
  root: {
    width: "100%"
  },
  card: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  }
};

const mapStateToProps = ({ todos }) => ({ todos: todos.items });

const todoView = ({ classes, todos }) => {
  return (
    <div className={classes.root}>
      <TodoHeader />
      <Card className={classes.card}>
        <CardContent>
          <TodoList todos={todos} />
        </CardContent>
      </Card>
    </div>
  )
};

const styledTodoView = withStyles(styles)(todoView);
export default connect(mapStateToProps)(styledTodoView);