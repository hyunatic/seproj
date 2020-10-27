import Appbar from '../AppBar/Appbar'
import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';


class Profile extends Component {
    state = {
        username: '',
        password: '',
        status: '',
        DOB: '',
        email: '',
    }

    render() {
        return (
            <div>
                <Grid container>
                    <Grid xs={12}>
                        <Appbar />
                    </Grid>
                    <br />
                    <Grid container xs={12} container justify="center" alignItems="center">
                        <Grid>
                            <TextField onChange={this.handleChange} id="username" className="input-text" variant="outlined" color="white" label="Username" />
                        </Grid>
                        <Grid>
                            <TextField onChange={this.handleChange} id="password" variant="outlined" type="password" label="Password" />
                        </Grid>
                        <Grid>
                            <TextField onChange={this.handleChange} id="status" variant="outlined" label="status" />
                        </Grid>
                        <Grid>
                            <TextField onChange={this.handleChange} id="DOB" variant="outlined" type="date" label="DOB" />
                        </Grid>
                        <Grid>
                            <TextField onChange={this.handleChange} id="email" variant="outlined" label="email" />
                        </Grid>
                        <Grid>
                            <Button Click={this.onSubmit} variant="contained" color="primary"> Confirm Changes </Button>
                        </Grid>
                        <Grid>
                            <Button Click={this.onSubmit} variant="contained" color="primary"> Cancel Changes </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        )
    }
}
export default Profile