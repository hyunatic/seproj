import React, { Component } from 'react'
import Types from './Type/Types'
import PrimarySearchAppBar from '../AppBar/appbar'
import Grid from '@material-ui/core/Grid';


export default class OrderPage extends Component {
    constructor(props) {
        super();
    }
    state = {
        Date: '',
        Time: '',
        Postid: '',
        req_Userid: ''
    }
    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value });
    }
    handleSubmit(event) {
        event.preventDefault();
    }
    Route = (val) =>{
        this.props.history.push('/refresh/' + val)
    }
    render() {
        const { post } = this.props
        return (
            <div>
                <Grid container>
                    <Grid xs={12}>
                        <PrimarySearchAppBar />
                    </Grid>
                    <br />
                    <Grid xs={12}>
                        <Types route={this.Route}/>
                    </Grid>
                </Grid>
            </div>
        )
    }
}
