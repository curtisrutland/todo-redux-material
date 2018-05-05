import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withStyles } from 'material-ui/styles';
import SwipeableDrawer from 'material-ui/SwipeableDrawer';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import InboxIcon from '@material-ui/icons/Inbox';

import * as UiActions from "../../redux/ui/actions";

const styles = {
  list: {
    width: 250,
  }
};

const mapStateToProps = ({ ui }) => {
  const { drawerOpen } = ui;
  return { drawerOpen };
};

const mapDispatchtoProps = dispatch => ({
  actions: bindActionCreators(UiActions, dispatch)
});

const sideDrawer = ({ drawerOpen, actions, classes }) => {
  return (
    <SwipeableDrawer open={drawerOpen} onOpen={actions.openDrawer} onClose={actions.closeDrawer}>
      <div tabIndex={0} role="button" onClick={actions.closeDrawer} onKeyDown={actions.closeDrawer}>
        <div className={classes.list}>
          <List>
            <ListItem button>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItem>
          </List>
        </div>
      </div>
    </SwipeableDrawer>
  )
};

const styledSideDrawer = withStyles(styles)(sideDrawer);

export default connect(mapStateToProps, mapDispatchtoProps)(styledSideDrawer);