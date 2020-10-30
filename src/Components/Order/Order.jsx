import React, { Component } from 'react'
import PrimarySearchAppBar from '../AppBar/appbar'
import Type from './Types'
import Grid from '@material-ui/core/Grid';


export default class Order extends Component {
    render() {
        return (
            <div>
                <Grid container>
                    <Grid xs={12}>
                        <PrimarySearchAppBar/>
                    </Grid>
                    <br />
                    <Grid xs={12}>
                        <Type />
                    </Grid>
                </Grid>
            </div>
        )
    }
}
