import React, { Component } from 'react'
import PrimarySearchAppBar from '../../AppBar/appbar'
import { connect } from 'react-redux'
import { retrieveDonationPost } from '../../../Redux/Actions/DonationAction'
import { createDonationOrder } from '../../../Redux/Actions/OrderAction'
import PropTypes from 'prop-types'
import OrderCard from './OrderCard'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField'
import { Link } from 'react-router-dom'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import './PlaceOrderForm.css';

class PlaceOrderForm extends Component {
    state = {
        address: '',
        deliverytime: '',
        MovingService: ''
    }
    componentDidMount() {
        this.props.retrieveDonationPost();
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    SelectChange = (e) => {
        this.setState({ MovingService: e.target.value })
    }
    onSubmit = (val) => {
        console.log(val)
        const post = {
            Postid: val[0].Postid,
            req_Userid: "1",
            req_username: localStorage.getItem('username'),
            Date: new Date().getFullYear() + "-" + (new Date().getMonth() + 1) + "-" + new Date().getDate(),
            Time: new Date().getHours() + ":" + new Date().getMinutes(),
            Location: this.state.address,
            MovingService: this.state.MovingService,
        }
        this.props.createDonationOrder(post)
        this.props.history.push("/order")
    }

    render() {
        const { posts } = this.props
        var id = parseInt(this.props.match.params.id)
        return (
            <div>
                <PrimarySearchAppBar />
                <br></br>
                <Box fontWeight='fontWeightMedium' display='inline'>My Order</Box>
                <Grid container direction="row" justify="center" alignItems="start" classname="grid-container">
                    <Grid item xs={2}>
                        {posts && posts.filter(x => x.Postid === id).map(x => {
                            return (<OrderCard key={x.Postid} post={x} />)
                        })}
                    </Grid>
                    <Grid item xs={6}>
                        <Card>
                            <CardContent>
                                <Grid>
                                    <form noValidate autoComplete="off">
                                        <Grid >
                                            <TextField fullWidth onChange={this.handleChange} id="address" variant="outlined" color="white" label="Delivery Address" />
                                        </Grid>
                                        <br />
                                        <Grid >
                                            <InputLabel id="label">Moving Service</InputLabel>
                                            <Select style={{ width: "100%" }} onChange={this.SelectChange} labelId="label" id="movingService" value={this.state.MovingService}>
                                                <MenuItem value={'False'}>No</MenuItem>
                                                <MenuItem value={'True'}>Yes</MenuItem>
                                            </Select>
                                        </Grid>
                                        <br />
                                        <Grid container direction="row" >
                                            <Grid xs={3}>
                                                <Button color="primary" onClick={() => this.onSubmit(posts.filter(x => x.Postid === id))} variant="contained">Place Order</Button>
                                            </Grid>

                                            <Grid >
                                                <Link className="RemoveHyperlink" to="/home"><Button color="primary" variant="contained">Back</Button></Link>
                                            </Grid>
                                        </Grid>
                                    </form>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        )
    }
}
PlaceOrderForm.propTypes = {
    retrieveDonationPost: PropTypes.func.isRequired,
    createDonationOrder: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    posts: state.donation.donationpost,
    order: state.orders.status
});
export default connect(mapStateToProps, { retrieveDonationPost, createDonationOrder })(PlaceOrderForm)