import React, { Component } from 'react'
import TypesPanel from './TypesPanel'
import { connect } from 'react-redux'
import { retrieveDonationPost } from '../../../Redux/Actions/DonationAction'
import PropTypes from 'prop-types'

class Category extends Component {
    componentDidMount(){
        this.props.retrieveDonationPost();
    }
    componentDidUpdate(){
        this.props.retrieveDonationPost();
    }
    render() {
        const { posts } = this.props
        return (
            <div>
                <TypesPanel donationposts={posts}/>
            </div>
        )
    }
}
Category.propTypes = {
    retrieveDonationPost: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    posts: state.donation.donationpost
});
export default connect(mapStateToProps, { retrieveDonationPost })(Category)