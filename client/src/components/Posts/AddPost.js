import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";

import { addPost } from "../../actions/postActions";

const styles = {
  paper: {
    padding: 8,
  },
  textField: {
    width: "100%",
  },
  button: {
    width: "100%",
    justifyContent: "center",
    marginTop: 14,
    marginBottom: 10,
    backgroundColor: "#D2691E",
    color: "#fff",
    "&:hover": {
      color: "#CD853F",
    },
  },
};
class AddPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      errors: {}
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    const postData = {
      text: this.state.text,
    };

    this.props.addPost(postData);
    this.setState({ text: "" });
  }

  render() {
    const { classes } = this.props;
    const { errors } = this.state;
    return (
      <Paper className={classes.paper}>
        <TextField
          className={classes.textField}
          multiline
          type="text"
          name="text"
          rowsMax="4"
          label="What do you want to say ?"
          onChange={this.handleChange}
          value={this.state.text}
          helperText={errors.text ? errors.text : ""}
          error={errors.text ? true : false}
        />
        <Button
          className={classes.button}
          variant="outlined"
          onClick={this.handleSubmit}
        >
          Send
        </Button>
      </Paper>
    );
  }
}

const mapStateToProps = (state) => ({
    errors: state.errors
})

//export default connect(null, { addPost })(withStyles(styles)(AddPost));
export default connect(mapStateToProps, { addPost })(withRouter(withStyles(styles)(AddPost)));
