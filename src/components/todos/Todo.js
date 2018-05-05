import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withStyles } from "material-ui/styles";
import * as TodoActions from "../../redux/todos/actions";
import Paper from "material-ui/Paper";
import Typography from "material-ui/Typography";
import Checkbox from 'material-ui/Checkbox';

const styles = {
  paper: {
    width: "100%",
    borderRadius: 0,
    display: "flex",
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    padding: 5,
    flex: 1
  },
  strikethrough: {
    textDecoration: "line-through",
    color: "#ddd"
  }
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(TodoActions, dispatch)
})

const todo = ({ classes, actions, text, completed, idx }) => {
  const textClasses = [classes.text];
  if (completed) textClasses.push(classes.strikethrough);
  return (
    <Paper className={classes.paper}>
      <Typography variant="subheading" className={textClasses.join(' ')}>{text}</Typography>
      <Checkbox onChange={evt => actions.setTodoCompleted(idx, evt.target.checked)} 
        checked={completed}
        color="default" />
    </Paper>
  )
};

const styledTodo = withStyles(styles)(todo);

export default connect(null, mapDispatchToProps)(styledTodo);