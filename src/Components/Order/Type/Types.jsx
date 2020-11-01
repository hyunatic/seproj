import React, { Component } from 'react'
import TypesPanel from './TypesPanel'
import { connect } from 'react-redux'
import { viewDonationOrder } from '../../../Redux/Actions/OrderAction'
import { retrieveDonationPost } from '../../../Redux/Actions/DonationAction'
import PropTypes from 'prop-types'
import { compose } from 'redux'

class Types extends Component {
    componentDidMount() {
        this.retrieveDetails();
        this.props.retrieveDonationPost();
    }
    retrieveDetails() {
        const post = {
            username: localStorage.getItem('username')
        }
        this.props.viewDonationOrder(post);
    }

    render() {
        const { posts } = this.props
        console.log(this.props)
        return (
            <div>
                <TypesPanel orderpost={posts}/>
            </div>
        )
    }
}
Types.propTypes = {
    viewDonationOrder: PropTypes.func.isRequired,
    retrieveDonationPost: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    posts: state.orders.orderlist,
    donationposts: state.donation.donationpost
});
const actionCreator = {
    viewDonationOrder,
    retrieveDonationPost,
    
}
export default connect(mapStateToProps, actionCreator)(Types)