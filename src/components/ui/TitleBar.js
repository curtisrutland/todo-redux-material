import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import * as UiActions from "../../redux/ui/actions";

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(UiActions, dispatch)
});

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};


const titleBar = ({ classes, actions }) => {
  return (
    <div className={classes.root}>
      <AppBar position="fixed" elevation={8}>
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={actions.toggleDrawer}>
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit" className={classes.flex}>
            Another Todo List
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

const styledTitleBar = withStyles(styles)(titleBar);
export default connect(null, mapDispatchToProps)(styledTitleBar);