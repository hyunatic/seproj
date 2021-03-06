import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import { ApproveOrder } from '../../../Redux/Actions/OrderAction'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'


class ApprovalOrder extends Component {
    constructor(props)
    { 
        super(props);
        this.onSubmit = this.onSubmit.bind(this)
    }
    onSubmit = () => {
        const post = {
            OrderId: this.props.post,
            OrderConfirm: "True"
        };
        this.props.ApproveOrder(post)
        //Do loading here

        this.props.route("order")
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