import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import { deleteDonationOrder } from '../../../Redux/Actions/OrderAction'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class DeleteOrder extends Component {
    onSubmit = () => {
        const post = {
            OrderId: this.props.orderid
        }
        console.log(this.props)
        this.props.deleteDonationOrder(post)
    }
    render() {
        return (
            <div>
                <Button onClick={this.onSubmit} color="primary">Cancel Order</Button>
            </div>
        )
    }
}
DeleteOrder.propTypes = {
    deleteDonationOrder: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    deletestatus: state.orders.delstatus,
});
export default connect(mapStateToProps, { deleteDonationOrder })(DeleteOrder)
