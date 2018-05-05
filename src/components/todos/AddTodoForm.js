import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withStyles } from "material-ui/styles";
import { TextField, Button } from "material-ui";
import * as TodoActions from "../../redux/todos/actions";


const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(TodoActions, dispatch)
});

const styles = {
  container: {
    display: "flex"
  },
  text: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10
  },
  button: {
    margin: 10
  }
};

class AddTodoForm extends Component {
  state = {
    text: ""
  };

  handleChange = () => event => {
    this.setState({
      text: event.target.value,
    });
  };

  render() {
    const { classes, actions } = this.props;
    return (
      <form
        className={classes.container}
        onSubmit={e => {
          e.preventDefault();
          actions.addTodo({ text: this.state.text });
          this.setState({ text: "" });
        }}
      >
        <TextField
          label="Add Todo"
          value={this.state.text}
          onChange={this.handleChange()}
          className={classes.text}
        />
        <Button variant="raised" size="small" type="submit" color="primary" className={classes.button}>Add</Button>
      </form>
    )
  }
}

export default connect(null, mapDispatchToProps)(withStyles(styles)(AddTodoForm));