import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { registerUser } from '../../actions/authActions';

const styles = {
    textField: {
        width: '100%',
        marginBottom: 16
    },
    btnBlock: {
        textAlign: 'center',
        marginBottom: 12,
        marginTop: 12
    }
}

class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            email: '',
            password: '',
            passwordconf: '',
            errors: {}
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors})
        }
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault()
        const userData = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            passwordconf: this.state.passwordconf
        }
        this.props.registerUser(userData, this.props.history)
    }

    render() {
        const { classes } = this.props;
        const { errors } = this.state

        return (
            <Paper style={{ padding: 16 }}>
                <form onSubmit={this.handleSubmit}>
                    <TextField
                        // required
                        // id="outlined-required"
                        label="Username"
                        type="text"
                        name="username"
                        variant="outlined"
                        value={this.state.username}
                        onChange={this.handleChange}
                        className={classes.textField}
                        helperText={errors.username ? errors.username : ''}
                        error={errors.username ? true : false}
                    />

                    <TextField
                        //required
                        //id="outlined-required"
                        label="Email"
                        type="email"
                        name="email"
                        variant="outlined"
                        value={this.state.email}
                        onChange={this.handleChange}
                        className={classes.textField}
                        helperText={errors.email ? errors.email : ''}
                        error={errors.email ? true : false}
                    />

                    <TextField
                        // required
                        // id="outlined-password-input"
                        label="Password"
                        type="password"
                        name="password"
                        // autoComplete="current-password"
                        variant="outlined"
                        value={this.state.password}
                        onChange={this.handleChange}
                        className={classes.textField}
                        helperText={errors.password ? errors.password : ''}
                        error={errors.password ? true : false}
                    />

                    <TextField
                        // required
                        //id="outlined-password-input"
                        label="Password confirmation"
                        type="password"
                        name="passwordconf"
                        //autoComplete="current-password"
                        variant="outlined"
                        value={this.state.passwordconf}
                        onChange={this.handleChange}
                        className={classes.textField}
                        helperText={errors.passwordconf ? errors.passwordconf : ''}
                        error={errors.passwordconf ? true : false}
                    />

                    <div className={classes.btnBlock}>
                        <Button variant="contained" type="submit" color="primary" size="large">
                            Register
                        </Button>
                    </div>
                </form>
            </Paper>
        )
    }
}

const mapStateToProps = (state) => ({
    errors: state.errors
})


export default connect(mapStateToProps, { registerUser })(withRouter(withStyles(styles)(Register)))

