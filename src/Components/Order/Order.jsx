import React, { Component } from 'react'
import Types from './Type/Types'
import PrimarySearchAppBar from '../AppBar/appbar'
import Grid from '@material-ui/core/Grid';


export default class Order extends Component {
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
        this.setState({[event.target.id]: event.target.value});
      }
      handleSubmit(event) {
        event.preventDefault();
      }
      onSubmit(){
        //Waiting for Yi chen....
        const post = {

        }
      }
    render() {
        const { post } = this.props
        console.log(this.props)
        return (
            <div>
                <Grid container>
                    <Grid xs={12}>
                        <PrimarySearchAppBar/>
                    </Grid>
                    <br />
                    <Grid xs={12}>
                        <Types />
                    </Grid>
                </Grid>
            </div>
        )
    }
}
