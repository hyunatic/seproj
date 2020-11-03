import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../../Redux/Actions/TwitterAction'
import TwitterPost from './TwitterPost'
import Grid from '@material-ui/core/Grid';
import PrimarySearchAppBar from '../AppBar/appbar';

class Twitter extends Component {

    componentWillMount() {
        this.props.fetchPosts();
    }
    render() {
        //console.log(this.props.twitter)
        return (
            <div>
                <PrimarySearchAppBar />
                <br />
                <Grid container alignItems="center" justify="space-evenly" alignItems="center">
                    {this.props.twitter && this.props.twitter.map(x => {
                        return (
                            <Grid item md={3}>
                                <TwitterPost info={x} />
                            </Grid>
                        )
                    })}
                </Grid>
            </div>
        )
    }
}
const mapStatetoProps = state => ({
    twitter: state.twitter.items
});

export default connect(mapStatetoProps, { fetchPosts })(Twitter)