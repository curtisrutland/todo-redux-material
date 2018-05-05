import React, { Fragment } from 'react';
import { withStyles } from 'material-ui/styles';
import withRootTheme from '../theme/withRootTheme';
import SideDrawer from '../components/ui/SideDrawer';
import TitleBar from '../components/ui/TitleBar';
import TodoView from "./TodoView";

const styles = {
  root: {
    paddingTop: 80,
    width: '95%',
    maxWidth: 900,
    margin: "0 auto",
  }
}

const app = ({ classes }) => {
  return (
    <Fragment>
      <TitleBar />
      <SideDrawer />
      <div className={classes.root}>
        <TodoView />
      </div>
    </Fragment>
  )
};

const styledApp = withRootTheme(withStyles(styles)(app));
export default styledApp;