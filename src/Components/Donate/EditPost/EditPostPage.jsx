import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import PrimarySearchAppBar from '../../AppBar/appbar';
import './EditPost.css'
import UserPostCard from './UserPostCard'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { retrieveUserDonationPost } from '../../../Redux/Actions/DonationAction'
import Box from '@material-ui/core/Box'


class EditPostPage extends Component {
    componentDidMount() {
        this.retrieveDetails();
    }
    componentDidUpdate(){
        this.retrieveDetails();
    }
    retrieveDetails() {
        const post = {
            username: localStorage.getItem('username')
        }
        this.props.retrieveUserDonationPost(post);
    }
    render() {
        const { posts } = this.props
        return (
            <div>
                <Grid>
                    <PrimarySearchAppBar />
                </Grid>
                <Card>
                <br / >
                <Box fontWeight='fontWeightMedium' display='inline'>Donations</Box>
                    <Grid container direction="row" justify="center">
                        {posts && posts.map(x => {
                            return (<UserPostCard key={x.Postid} post={x} />)
                        })}
                    </Grid>
                    <br/>
                </Card>
            </div>
        )
    }
}
EditPostPage.propTypes = {
    retrieveUserDonationPost: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    posts: state.donation.userdonation
});

export default connect(mapStateToProps, { retrieveUserDonationPost })(EditPostPage)