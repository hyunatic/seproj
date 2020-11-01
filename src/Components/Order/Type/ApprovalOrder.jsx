import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import { ApproveOrder } from '../../../Redux/Actions/OrderAction'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class ApprovalOrder extends Component {
    constructor(props)
    { 
        super(props);
    }
    onSubmit = (e) => {
        e.preventDefault();
        const post = {
            OrderID: this.props.post,
            OrderConfirm: true 
        };
        this.props.ApprovalOrder(post)
    }
    render() {
        return (
            <div>
                <Button color="primary" onClick={this.onSubmit}> Approve </Button>
            </div>
        )
    }
}
ApprovalOrder.propTypes = {
    approvalstatus: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    ApprovalStatus: state.orders.approvalstatus
});

export default connect(mapStateToProps, { ApproveOrder })(ApprovalOrder)