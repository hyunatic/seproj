import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

export default class LoginForm extends Component {
    state ={
        username: '',
        password: ''
    }
    onSubmit = () => {
        alert('test')
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    
    render() {
        return (
            <div>
                <form noValidate autoComplete="off">
                    <Grid>
                        <Grid>
                            <TextField onChange={this.handleChange} id="username" label="Username" />
                        </Grid>
                        <Grid>
                            <TextField onChange={this.handleChange} id="password" type="password" label="Password" />
                        </Grid>
                        <Grid>
                            <Button onClick={this.onSubmit} variant="contained">Login</Button>
                        </Grid>
                    </Grid>
                </form>
            </div>
        )
    }
}
