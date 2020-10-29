import React, { Component } from 'react'
import Category from './Category/Category'
import Grid from '@material-ui/core/Grid';
import PrimarySearchAppBar from '../AppBar/Appbar';

class HomePage extends Component {
    render() {
        return (
            <div>
                <Grid container>
                    <Grid xs={12}>
                        <PrimarySearchAppBar/>
                    </Grid>
                    <br />
                    <Grid xs={12}>
                        <Category />
                    </Grid>
                </Grid>
            </div>
        )
    }
}


export default HomePage