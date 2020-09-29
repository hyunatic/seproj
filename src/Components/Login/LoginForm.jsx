import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Link } from 'react-router-dom'
import Nav from '../NavBar/Nav.jsx'
import './Login.css';
import Logo from './Icon.png'; //need to fix link to get from src/img/icon.png

export default class LoginForm extends Component {
    state = {
        username: '',
        password: ''
    }
    onSubmit = () => {
        alert('test')
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    render() {
        return (
            <React.Fragment>
                <div class= "Login">    
                <Card>
                    <CardContent>
                        <Grid container direction="row" justify="center" alignItems="center">
                            <form noValidate autoComplete="off">
                                <Grid>
                                    <img src={Logo} />
                                </Grid>
                                <Grid>
                                    <TextField onChange={this.handleChange} id="username" className="input-text" variant="outlined" color="whiote" label="Username" />
                                </Grid>
                                <br />
                                <Grid>
                                    <TextField onChange={this.handleChange} id="password" variant="outlined" type="password" label="Password" />
                                </Grid>
                                <br />
                                <Grid container item alignitem="center" justify="center">
                                    <Button onClick={this.onSubmit} variant="contained" color="primary">Login</Button>
                                </Grid>
                                <br/><br/>
                                <Grid container item alignitem="center" justify="center">
                                        <p>Forget Password</p>
                                </Grid>
                            </form>
                        </Grid>
                    </CardContent>
                </Card>
                </div>
                <div class="Bottom">
                    <Card>
                        <CardContent>
                            <Grid container item alignitem="center" justify="center">
                                Don't have an account? &nbsp;
                                <Link className ="removeHyperlink" to="/register">
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
