import React, { Fragment } from 'react';
import { withStyles } from "material-ui/styles";
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import List, { ListItem, ListItemText } from "material-ui/List";
import Checkbox from "material-ui/Checkbox";
import Divider from 'material-ui/Divider';
import Typography from "material-ui/Typography";

import * as TodoActions from "../../redux/todos/actions";

const styles = theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: "100%",
    alignItems: 'center',
  },
  list: {
    width: "100%"
  },
  strikethrough: {
    textDecoration: "line-through",
    color: "#ddd"
  }
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(TodoActions, dispatch)
});

const todoList = ({ classes, children, todos, actions }) => {
  if (!todos) todos = [];
  return (
    <div className={classes.container}>
      <List className={classes.list}>
        <Divider />
        {todos.map((todo) => {
          const { text, completed, id } = todo;
          return (
            <Fragment key={id}>
              <ListItem
                dense button
                onClick={() => actions.setTodoCompleted(id, !completed)}
                className={classes.listItem}
              >
                <ListItemText disableTypography={true}>
                  <Typography className={completed ? classes.strikethrough : null} variant="subheading">
                    {text}
                  </Typography>
                </ListItemText>
                <Checkbox checked={completed} tabIndex={-1} disableRipple color="default" />
              </ListItem>
              <Divider />
            </Fragment>
          )
        })}
      </List>
    </div>
  );
};

const styledTodoList = withStyles(styles)(todoList);

export default connect(null, mapDispatchToProps)(styledTodoList);