import React from 'react';
import { connect } from "react-redux";
import { withStyles } from 'material-ui/styles';

import Card, { CardHeader, CardContent } from "material-ui/Card";

import TodoList from "../components/todos/TodoList";

const styles = {
  root: {
    width: "100%"
  }
};

const mapStateToProps = ({ todos }) => ({ todos: todos.items });

const todoView = ({ classes, todos }) => {
  return (
    <div className={classes.root}>
      <Card>
        <CardHeader title="Card Title" />
        <CardContent>
          <TodoList todos={todos} />
        </CardContent>
      </Card>
    </div>
  )
};

const styledTodoView = withStyles(styles)(todoView);
export default connect(mapStateToProps)(styledTodoView);