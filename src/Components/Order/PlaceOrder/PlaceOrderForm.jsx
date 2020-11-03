import React, { Component } from 'react'
import PrimarySearchAppBar from '../../AppBar/appbar'
import { connect } from 'react-redux'
import { retrieveDonationPost } from '../../../Redux/Actions/DonationAction'
import { createDonationOrder, getAddress } from '../../../Redux/Actions/OrderAction'
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
import GMap from '../../Map/GMap'

class PlaceOrderForm extends Component {
    state = {
        deliveryaddress: '',
        deliverytime: '',
        MovingService: 'False',
    }
    componentDidMount() {
        this.props.retrieveDonationPost();
    }
    handleChange = (e) => {
        alert("test")
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    SelectChange = (e) => {
        this.setState({ MovingService: e.target.value })
        if(this.state.MovingService == 'False'){
            this.setState({deliveryaddress: 'NTU Student Care'})
        }
    }
    onSubmit = (val) => {
        const post = {
            Postid: val[0].Postid,
            req_Userid: "1",
            req_username: localStorage.getItem('username'),
            Date: new Date().getFullYear() + "-" + (new Date().getMonth() + 1) + "-" + new Date().getDate(),
            Time: new Date().getHours() + ":" + new Date().getMinutes(),
            Location: this.props.addr,
            MovingService: this.state.MovingService,
        }
        this.props.createDonationOrder(post)
        this.props.history.push("/order")
    }
    getLatLong = (lat, lng) => {
        //Gets Lat and Long from Child Component
        //Do Reverse Geo Location
        this.props.getAddress(parseFloat(lat).toFixed(5),parseFloat(lng).toFixed(5))
    }  

    render() {
        const { posts } = this.props
        const { addr } = this.props
        var id = parseInt(this.props.match.params.id)
        let googleMap = (this.state.MovingService == 'False') ? <React.Fragment> </React.Fragment> : <Grid container direction="row" justify="center" alignItems="start">
            <Grid item xs={10}>
                <Card>
                    <CardContent>
                    <Box fontWeight='fontWeightMedium' display='inline'>List of Student Care Centres</Box>
                        <GMap getLatLong={this.getLatLong}/>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>;

        return (
            <div>
                <PrimarySearchAppBar />

                <Grid container direction="column" justify="center" alignItems="center" className='Padding'>
                   
                <Grid container direction="row" justify="center" alignItems="center" spacing ={3}>
                    <Grid item>
                        {posts && posts.filter(x => x.Postid === id).map(x => {
                            return (<OrderCard key={x.Postid} post={x} />)
                        })}
                    </Grid>
                    <Grid item>
                        <Card>
                            <CardContent>
                            <Grid item> <h2>Order Details</h2></Grid>
                                    <form noValidate autoComplete="off">
                                    <Grid container direction="column" justify="left" alignItems="left" spacing={3} >
                                        <Grid item>
                                            <TextField id="deliveryaddress" disabled variant="outlined" color="white" label="Collection Address" value={addr}/>
                                        </Grid>
                                        <Grid item>
                                            <InputLabel id="label">Moving Service</InputLabel>
                                            <Select style={{ width: "100%" }} onChange={this.SelectChange} labelId="label" id="movingService" value={this.state.MovingService}>
                                                <MenuItem value={'False'}>No</MenuItem>
                                                <MenuItem value={'True'}>Yes</MenuItem>
                                            </Select>
                                        </Grid>
                                        <Grid container direction="row" spacing={4} >
                                            <Grid item>
                                                <Button color="primary" onClick={() => this.onSubmit(posts.filter(x => x.Postid === id))} variant="contained">Place Order</Button>
                                            </Grid>
                                            <Grid item>
                                                <Link className="RemoveHyperlink" to="/home"><Button color="primary" variant="contained">Back</Button></Link>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    </form>
                            </CardContent>
                        </Card>
                    </Grid>
                    {googleMap}
                </Grid>
            </Grid>  
            </div>
        )
    }
}
PlaceOrderForm.propTypes = {
    retrieveDonationPost: PropTypes.func.isRequired,
    createDonationOrder: PropTypes.func.isRequired,
    getAddress: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    posts: state.donation.donationpost,
    order: state.orders.status,
    addr: state.orders.locAddr
});
export default connect(mapStateToProps, { getAddress, retrieveDonationPost, createDonationOrder })(PlaceOrderForm)