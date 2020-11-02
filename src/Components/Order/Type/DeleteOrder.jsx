import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import { deleteDonationOrder } from '../../../Redux/Actions/OrderAction'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class DeleteOrder extends Component {
    constructor(props){
        super(props);
    }
    onSubmit = () =>{
        const post = {
            OrderId: this.props.orderid
        }
        this.props.deleteDonationOrder(post)
        window.location.reload()
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