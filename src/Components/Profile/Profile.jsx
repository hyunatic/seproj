import Appbar from '../AppBar/appbar'
import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Card from '@material-ui/core/Card';
import { Link } from 'react-router-dom'
import { retrieveUserDonationPost } from '../../Redux/Actions/DonationAction'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import './Profile.css';
import { updateProfile } from '../../Redux/Actions/AuthAction'

class Profile extends Component {
    state = {
        username: '',
        password: '',
        email: '',
        Hall: '',
        status: false,
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    onSubmit = () => {
        const post = {
            username: this.state.username,
            password: "None",
            email: this.state.email,
            Hall: this.state.Hall
        };
        this.props.updateProfile(post)
        localStorage.setItem('hall', post.Hall)
        this.setState({ status: true })
    }

    componentDidMount() {
        this.setState({
            username: localStorage.getItem('username'),
            email: localStorage.getItem('email'),
            Hall: localStorage.getItem('hall'),
        })
    }
    SelectChange = (e) => {
        this.setState({ Hall: e.target.value })
    }

    render() {
        var visibilityState = this.state.status ? "visible" : "hidden";
        return (
            <div>
                <Card>
                        <Grid xs={12}>
                            <Appbar />
                        </Grid>
                        <br />
                        <Grid container justify="center" alignItems="center" xs={6} className="grid-container">
                        <Grid container xs={12} spacing={2}>
                            <Grid item sm={6}>
                                <TextField onChange={this.handleChange} id="username" className="input-text" variant="outlined" color="white" disabled value={this.state.username} label="username" />
                            </Grid>
                            <Grid item sm={6}>
                                <TextField onChange={this.handleChange} id="email" disabled value={this.state.email} variant="outlined" label="email" />
                            </Grid>
                        </Grid>
                        <Grid container xs={12} spacing={2}>
                            <Grid item sm={6}>
                                Hall :
                            <Select labelId="HallNumber" id="Hall" value={this.state.Hall} onChange={this.SelectChange}>
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
                                    <MenuItem value={'Tamarind Hall'}>Tamarind Hall</MenuItem>
                                </Select>
                            </Grid>
                            <Grid item sm={6}>
                                <Button onClick={this.onSubmit} variant="contained" color="primary"> Confirm Changes </Button>
                            </Grid>
                            <Grid item >
                                <p style={{ visibility: visibilityState, color: "red" }}>Profile Updated</p>
                            </Grid>
                        </Grid>
                        </Grid>
                </Card>
            </div>
        )
    }
}
Profile.propTypes = {
    updateProfile: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    status: state.auth.updatestatus
});

export default connect(mapStateToProps, { updateProfile })(Profile)