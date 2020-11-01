import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import PrimarySearchAppBar from '../../AppBar/appbar';
import './EditPost.css'
import EditPostPanel from './EditPostPanel'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { retrieveUserDonationPost } from '../../../Redux/Actions/DonationAction'
import { viewApproval } from '../../../Redux/Actions/OrderAction'

class EditPostPage extends Component {
    componentDidMount() {
        this.retrieveDetails();
        this.retrieveApproval();
    }
    // componentDidUpdate(){
    //     this.retrieveDetails();
    //     this.retrieveApproval();
    // }
    retrieveDetails() {
        const post = {
            username: localStorage.getItem('username')
        }
        this.props.retrieveUserDonationPost(post);
    }
    retrieveApproval() {
        const post = {
            username: localStorage.getItem('username')
        }
        this.props.viewApproval(post);
    }
    render() {
        const { posts } = this.props
        const { approvalposts } = this.props
        return (
            <div>
                <Grid>
                    <PrimarySearchAppBar />
                </Grid>
                <EditPostPanel posts={posts} approvalposts={approvalposts} />
            </div>
        )
    }
}
EditPostPage.propTypes = {
    retrieveUserDonationPost: PropTypes.func.isRequired,
    viewApproval: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    posts: state.donation.userdonation,
    approvalposts: state.orders.approvallist,
    
});

export default connect(mapStateToProps, { retrieveUserDonationPost, viewApproval })(EditPostPage)