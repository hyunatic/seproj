import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import './Login.css'
import { Link } from 'react-router-dom'

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
                <Card className="BgImg">
                    <CardContent>
                        <Grid container direction="row" justify="center" alignItems="center">
                            <form noValidate autoComplete="off">
                                <Grid>
                                    <TextField onChange={this.handleChange} id="username" className="input-text" variant="outlined" color="whiote" label="Username" />
                                </Grid>
                                <br />
                                <Grid>
                                    <TextField onChange={this.handleChange} id="password" variant="outlined" type="password" label="Password" />
                                </Grid>
                                <br />
                                <Grid container xs={12}>
                                    <Grid item xs={6}>
                                        <Button onClick={this.onSubmit} variant="contained">Login</Button>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Link className="RemoveHyperlink" to="/register"><Button variant="contained">Register</Button></Link>
                                    </Grid>
                                </Grid>
                            </form>
                        </Grid>
                    </CardContent>
                </Card>
            </React.Fragment>
        )
    }
}
