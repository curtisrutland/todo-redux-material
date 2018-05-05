import React from 'react';
import { withStyles } from "material-ui/styles";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import {
  AppBar, Toolbar, Typography,
  Switch, Button
} from "material-ui";

import * as UiActions from "../../redux/ui/actions";

const styles = {
  grow: {
    flex: 1
  }
};

const mapStateToProps = ({ ui }) => ({
  showCompleted: ui.showCompleted,
  buttonText: !ui.showCompleted ? "Hide Completed" : "Show Completed"
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(UiActions, dispatch)
})

const todoHeader = withStyles(styles)(({ classes, actions, showCompleted, buttonText }) => (
  <AppBar position="static" color="default">
    <Toolbar>
      <Typography variant="title" color="inherit" className={classes.grow}>
        Todos
      </Typography>
      <Button onClick={evt => actions.setShowCompleted(!showCompleted)} >{buttonText}</Button>
      <Switch color="primary" checked={showCompleted} onChange={evt => actions.setShowCompleted(!showCompleted)} />
    </Toolbar>
  </AppBar>
));

export default connect(mapStateToProps, mapDispatchToProps)(todoHeader);