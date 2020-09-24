import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../../Redux/Actions/TwitterAction'
import TwitterPost from './TwitterPost'
import Grid from '@material-ui/core/Grid';

class Twitter extends Component {
  
    componentWillMount() {
        this.props.fetchPosts();
    }
    render() {
        console.log(this.props.twitter)
        return (
            <div>
                <Grid container alignItems="center" justify="space-evenly">
                {this.props.twitter && this.props.twitter.map(x => {
                    return(
                        <React.Fragment key={x.id}>
                                <Grid item xs={3}>
                                    <TwitterPost info={x}/>
                                </Grid>
                            
                        </React.Fragment>
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