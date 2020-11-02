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
        Hall: '1',
        buttondisabled: true,
        usernameerror: false,
        passworderror: false,
        emailerror: false,
        schemailerror: false
    }
    onSubmit = () => {
        if (this.state.username === "") {
            this.setState({
                usernameerror : true,
                passworderror : false,
                emailerror: false,
                schemailerror: false
            })
        }
        else if(this.state.password === ""){
            this.setState({
                usernameerror: false,
                passworderror : true,
                emailerror: false,
                schemailerror: false
            })
        }
        else if(this.state.email === ""){
            this.setState({
                usernameerror : false,
                passworderror : false,
                emailerror: true,
                schemailerror: false
            })
        }
        else if(!this.state.email.includes("@e.ntu.edu.sg")){
            this.setState({
                usernameerror : false,
                passworderror : false,
                emailerror: false,
                schemailerror: true
            })
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
        this.props.history.push('/');
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    SelectChange = (e) => {
        this.setState({ Hall: e.target.value })
    }
    handleCheck = (e) => {
        this.setState({ buttondisabled: !this.state.buttondisabled });
    }
    render() {
        var visibilityState = this.state.usernameerror ? "visible" : "hidden";
        var visibilityState1 = this.state.passworderror ? "visible" : "hidden";
        var visibilityState2 = this.state.emailerror ? "visible" : "hidden";
        var visibilityState3 = this.state.schemailerror ? "visible" : "hidden";
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
                                    <p style={{ visibility: visibilityState, color: "red" }}>Username cannot be blank</p>
                                </Grid>
                                <br />
                                <Grid item xs={12}>
                                    <TextField onChange={this.handleChange} id="password" variant="outlined" type="password" label="Password" />
                                    <p style={{ visibility: visibilityState1, color: "red" }}>Password cannot be blank</p>
                                </Grid>
                                <br />
                                <Grid>
                                    <TextField onChange={this.handleChange} id="email" className="input-text" variant="outlined" color="white" label="Email" />
                                    <p style={{ visibility: visibilityState2, color: "red" }}>Email cannot be blank</p>
                                    <p style={{ visibility: visibilityState3, color: "red" }}>Please enter an NTU Email</p>
                                </Grid>
                                <br />
                                <Grid item xs={12}>
                                    <InputLabel id="label">Hall</InputLabel>
                                    <Select style={{ width: "100%" }} onChange={this.SelectChange} labelId="label" id="Hall" value={this.state.Hall}>
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