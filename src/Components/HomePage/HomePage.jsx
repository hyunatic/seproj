import React, { Component } from 'react'
import Category from './Category/Category'
import SearchBar from './SearchBar/SearchBar'
import Grid from '@material-ui/core/Grid';

class HomePage extends Component {
    render() {
        return (
            <div>
                <Grid container>
                    <Grid xs={12}>
                        <SearchBar />
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