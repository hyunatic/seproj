import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import './Register.css'
import { Link } from 'react-router-dom'
import Checkbox from '@material-ui/core/Checkbox';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { registerUser } from '../../Redux/Actions/AuthAction'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';

import Logo from '../../img/icon.png'; //need to fix link to get from src/img/icon.png

class RegisterForm extends Component {
    state = {
        username: '',
        password: '',
        email: '',
        Hall: '',
        buttondisabled: true
    }
    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.username === "" || this.state.password === "" || this.state.email === "") {
            alert("Username / email / password cannot be blank")
        }
        else {
            const post = {
                username: this.state.username,
                email: this.state.email,
                password: this.state.password,
                Hall: this.state.Hall
            };
            this.props.registerUser(post);
        }
    }
    componentWillReceiveProps(nextProps) {
        // Need to do validation
        //console.log(nextProps.registerstatus)
        //var status = nextProps.registerstatus
        this.props.history.push('/');
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    SelectChange = (e) => {
        this.setState({Hall : e.target.value})
    }
    handleCheck = (e) => {
        this.setState({ buttondisabled: !this.state.buttondisabled });
    }
    render() {
        return (
            <div class="Center">
                <Card>
                    <CardContent>
                        <Grid container direction="row" justify="center" >
                            <form noValidate autoComplete="off">
                                <Grid>
                                    <img src={Logo} alt="none" />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField onChange={this.handleChange} id="username" className="input-text" variant="outlined" color="white" label="Username" />
                                </Grid>
                                <br />
                                <Grid item xs={12}>
                                    <TextField onChange={this.handleChange} id="password" variant="outlined" type="password" label="Password" />
                                </Grid>
                                <br />
                                <Grid>
                                    <TextField onChange={this.handleChange} id="email" className="input-text" variant="outlined" color="white" label="Email" />
                                </Grid>
                                <br />
                                <Grid item xs={6}>
                                    <InputLabel id="label">Hall</InputLabel>
                                    <Select style={{width: "100%"}} onChange={this.SelectChange} labelId="label" id="Hall" value={this.state.Hall}>
                                        <MenuItem value="Hall 1">Hall 1</MenuItem>
                                        <MenuItem value="Hall 2">Hall 2</MenuItem>
                                        <MenuItem value="Hall 3">Hall 3</MenuItem>
                                    </Select>
                                </Grid>
                                <br />
                                <Grid>
                                    <Checkbox onChange={this.handleCheck} id='TnC' label='TnC' inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} /> <Link to="">Terms and conditions</Link>
                                </Grid>
                                <br /><br />
                                <Grid container direction="row" justify="center" alignItems="center">
                                    <Grid xs={6}>
                                        <Button disabled={this.state.buttondisabled} color="primary" onClick={this.onSubmit} variant="contained">Register</Button>
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

RegisterForm.propTypes = {
    RegisterStatus: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    registerstatus: state.auth.registerstatus
});

export default connect(mapStateToProps, { registerUser })(RegisterForm)