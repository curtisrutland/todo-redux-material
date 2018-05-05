import React from 'react';
import { withStyles } from "material-ui/styles";
import AppBar from "material-ui/AppBar";
import Toolbar from 'material-ui/Toolbar';
import Typography from "material-ui/Typography";
import Switch from "material-ui/Switch";

const styles = {
  grow: {
    flex: 1
  }
};

export default withStyles(styles)(({ classes }) => (
  <AppBar position="static" color="default">
    <Toolbar>
      <Typography variant="title" color="inherit" className={classes.grow}>
        Todos
      </Typography>
      <Switch color="primary" checked={true} />
    </Toolbar>
  </AppBar>
));    