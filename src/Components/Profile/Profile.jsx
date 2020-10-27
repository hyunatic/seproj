import Appbar from '../AppBar/Appbar'
import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Card from '@material-ui/core/Card';
import { Link } from 'react-router-dom'

class Profile extends Component {
    state = {
        username: localStorage.getItem('username'),
        password: '',
        status: '',
        DOB: '',
        email: '',
        Hall: '' ,
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    onSubmit = (e) => {
        e.preventDefault();
        /*const post = {
            username : this.state.username,
            password : this.state.password,
            status: this.state.status,
            DOB: this.state.DOB,
            email: this.state.email,
            Hall: this.state.Hall
        };*/
    }
    render() {
        return (
            <div>
                <Card>
                <Grid container>
                    <Grid xs={12}>
                        <Appbar />
                    </Grid>
                    <br />
                    <Grid container xs={12} container justify="center" alignItems="center">
                        <Grid>
                            <TextField onChange={this.handleChange} id="username" className="input-text" variant="outlined" color="white" label={this.state.username} />
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
                            Hall :
                            <Select labelId="HallNumber" id="Hall" Value={' '} onChange={this.handleChange}>
                                <MenuItem value={'1'}>1</MenuItem> 
                                <MenuItem value={'2'}>2</MenuItem>
                                <MenuItem value={'3'}>3</MenuItem>
                                <MenuItem value={'4'}>4</MenuItem> 
                                <MenuItem value={'5'}>5</MenuItem>
                                <MenuItem value={'6'}>6</MenuItem> 
                                <MenuItem value={'7'}>7</MenuItem> 
                                <MenuItem value={'8'}>8</MenuItem>
                                <MenuItem value={'9'}>9</MenuItem> 
                                <MenuItem value={'10'}>10</MenuItem> 
                                <MenuItem value={'11'}>11</MenuItem>
                                <MenuItem value={'12'}>12</MenuItem>
                                <MenuItem value={'13'}>13</MenuItem> 
                                <MenuItem value={'14'}>14</MenuItem>
                                <MenuItem value={'15'}>15</MenuItem>
                                <MenuItem value={'16'}>16</MenuItem> 
                                <MenuItem value={'Crescent Hall'}>Crescent Hall</MenuItem>
                                <MenuItem value={'Pioneer Hall'}>Pioneer Hall</MenuItem>
                                <MenuItem value={'Binjai Hall'}>Binjai Hall</MenuItem>
                                <MenuItem value={'Tanjong Hall'}>Tanjong Hall</MenuItem>
                                <MenuItem value={'Banyan Hall'}>Banyan Hall</MenuItem>
                                <MenuItem value={'Sacara Hall'}>Sacara Hall</MenuItem>
                                <MenuItem value={'Tamarid Hall'}>Tamarid Hall</MenuItem>
                            </Select>
                        </Grid>
                        <Grid>
                            <Button Click={this.onSubmit} variant="contained" color="primary"> Confirm Changes </Button>
                        </Grid>
                        <Grid>
                            <Button variant="contained" color="primary"> Cancel Changes </Button>
                        </Grid>
                    </Grid>
                </Grid>
                </Card>
            </div>
        )
    }
}
export default Profile