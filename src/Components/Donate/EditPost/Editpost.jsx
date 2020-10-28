import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import PrimarySearchAppBar from '../../AppBar/appbar';
import './EditPost.css'
import { Link } from 'react-router-dom'

class Editpost extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <PrimarySearchAppBar/>
                </Grid>
               <Card>
                   <Grid> insert user post </Grid>
               </Card>
            </div>
        )
    }
}
export default Editpost