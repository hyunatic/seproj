import React, { Component } from 'react'
import TypesPanel from './TypesPanel'
import { connect } from 'react-redux'
import { viewDonationOrder, viewApproval } from '../../../Redux/Actions/OrderAction'
import { retrieveDonationPost } from '../../../Redux/Actions/DonationAction'
import PropTypes from 'prop-types'

class Types extends Component {
    componentDidMount() {
        this.retrieveDetails();
        this.props.retrieveDonationPost();
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
        this.props.viewDonationOrder(post);
    }
    retrieveApproval() {
        const post = {
            username: localStorage.getItem('username')
        }
        this.props.viewApproval(post);
    }
    render() {
        const { posts } = this.props
        const { donationposts } = this.props
        const { approvalposts } = this.props
        return (
            <div>
                <TypesPanel orderpost={posts} donationposts={donationposts} approvalposts={approvalposts}/>
            </div>
        )
    }
}
Types.propTypes = {
    viewDonationOrder: PropTypes.func.isRequired,
    retrieveDonationPost: PropTypes.func.isRequired,
    viewApproval: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    posts: state.orders.orderlist,
    donationposts: state.donation.donationpost,
    approvalposts: state.orders.approvallist
});
const actionCreator = {
    viewDonationOrder,
    retrieveDonationPost,
    viewApproval
}
export default connect(mapStateToProps, actionCreator)(Types)
