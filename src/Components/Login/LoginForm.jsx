import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Link } from 'react-router-dom'
import { checkLogin } from '../../Redux/Actions/AuthAction'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import './Login.css';
import Logo from '../../img/icon.png'; //need to fix link to get from src/img/icon.png


class LoginForm extends Component {
    state = {
        username: '',
        password: '',
        status: '',
        error: false
    }
    onSubmit = () => {
        const post = {
            username: this.state.username,
            password: this.state.password
        };
        this.props.checkLogin(post);
    }

    componentWillReceiveProps(nextProps) {
        var status = nextProps.loginstatus.Result
        if (status === 0) {
            this.setState({ error: true })
        }
        else {
            localStorage.setItem('email', nextProps.loginstatus.email)
            localStorage.setItem('username', nextProps.loginstatus.username);
            localStorage.setItem('hall', nextProps.loginstatus.Hall);
            this.props.history.push('/home');
        }
    }
    checkKey = (e) => {
        if(e.key === 'Enter')
            this.onSubmit()
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    render() {
        var visibilityState = this.state.error ? "visible" : "hidden";
        return (
            <React.Fragment>
                <div class="Login">
                    <Card>
                        <CardContent>
                                <form noValidate autoComplete="off">
                                <Grid container direction="column" justify="center" alignItems="center" spacing={3}>
                                    <Grid>
                                        <img class="icon" src={Logo} alt="" />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField onChange={this.handleChange} error={this.state.error } onKeyDown={this.checkKey} id="username" className="input-text" variant="outlined" color="white" label="Username" />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField onChange={this.handleChange} error={this.state.error } onKeyDown={this.checkKey} id="password" variant="outlined" type="password" label="Password" />
                                    </Grid>
                                    <p style={{ visibility: visibilityState, color: "red" }}>Wrong Username or Password</p>
                                    <Grid container alignitem="center" justify="center" direction="row" spacing={4}>
                                        <Grid item>
                                            <Button onClick={this.onSubmit} variant="contained" color="primary">Login</Button>
                                        </Grid>
                                    </Grid>
                                    <Grid container item alignitem="center" justify="center">
                                        <p>Forget Password</p>
                                    </Grid>
                                </Grid>
                            </form>
                        </CardContent>
                    </Card>
                </div>
                <div class="Bottom">
                    <Card>
                        <CardContent>
                            <Grid container item direction="row" alignitem="center" justify="center">
                                Don't have an account? &nbsp;
                                <Link className="removeHyperlink" to="/register">
                                    Sign up
                                </Link>
                            </Grid>
                        </CardContent>
                    </Card>
                </div>
            </React.Fragment>
        )
    }
}

LoginForm.propTypes = {
    checkLogin: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    loginstatus: state.auth.status
});


export default connect(mapStateToProps, { checkLogin })(LoginForm)