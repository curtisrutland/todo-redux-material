import React, { Fragment } from 'react';
import { withStyles } from 'material-ui/styles';
import { connect } from "react-redux";
import withRootTheme from '../theme/withRootTheme';
import SideDrawer from '../components/ui/SideDrawer';
import TitleBar from '../components/ui/TitleBar';

import TodoList from "../components/todos/TodoList";

const styles = {
  root: {
    paddingTop: 80
  }
}

const mapStateToProps = ({ todos }) => ({todos: todos.items});

const app = ({ classes, todos }) => {
  return (
    <Fragment>
      <TitleBar />
      <SideDrawer />
      <div className={classes.root}>
        <TodoList todos={todos} />
      </div>
    </Fragment>
  )
};

const styledApp = withRootTheme(withStyles(styles)(app));
export default connect(mapStateToProps)(styledApp);