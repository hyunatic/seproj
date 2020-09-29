import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import './Register.css'
import { Link } from 'react-router-dom'

export default class RegisterForm extends Component {
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
            <div class="Center">
            <Card>
                <CardContent>
                    <Grid container direction="row" justify="center" >
                        <form noValidate autoComplete="off">
                            <Grid item xs={12}>
                                <TextField onChange={this.handleChange} id="username" className="input-text" variant="outlined" color="white" label="Username" />
                            </Grid>
                            <br />
                            <Grid item xs={12}>
                                <TextField onChange={this.handleChange} id="password" variant="outlined" type="password" label="Password" />
                            </Grid>
                            <br />
                            <Grid container direction="row" justify="center" alignItems="center">
                                <Grid xs={6}>
                                    <Button color="primary" onClick={this.onSubmit} variant="contained">Login</Button>
                                </Grid>
                                <Grid>
                                    <Link className="RemoveHyperlink" to="/"><Button variant="contained">Back</Button></Link>
                                </Grid>
                            </Grid>
                        </form>
                    </Grid>
                </CardContent>
            </Card>
            </div>
        )
    }
}
