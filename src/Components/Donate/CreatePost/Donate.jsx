import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import PrimarySearchAppBar from '../../AppBar/appbar';
import './Donate.css'
import { createDonationPost } from '../../../Redux/Actions/DonationAction'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';

class Donate extends Component {
    state = {
        itemname: '',
        description: '',
        picture: '',
        Category: '',
        Userid: '',
    }
    onSubmit = (e) => {
        e.preventDefault();
        const post = {
            ItemName: this.state.itemname,
            Category: this.state.Category,
            Description: this.state.description,
            PostDate: new Date().getFullYear() + "-" + (new Date().getMonth() + 1) + "-" + new Date().getDate(),
            ImageId: this.state.picture,
            username: localStorage.getItem('username'),
            Userid: 1,
        }

        this.props.createDonationPost(post);
    }
    SelectChange = (e) => {
        this.setState({ Category: e.target.value })
    }
    HandlePicture = (e) => {
        let file = e.target.files[0]
        if(file){
            const reader = new FileReader();
            reader.onload = this._handleReaderLoaded.bind(this)
            reader.readAsBinaryString(file)
        }
    }
    _handleReaderLoaded = (readerEvt) => {
        let binaryString = readerEvt.target.result;
        this.setState({picture: btoa(binaryString)})
    }
    componentWillReceiveProps(nextProps) {
        //Return
        var status = nextProps.donationpoststatus.Result;
        if(status === 1)
            this.props.history.push('/home');
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    componentDidMount() {
        this.setState({ Userid: localStorage.getItem('username') })
    }

    render() {
        return (
            <div>
                <div>
                    <Grid container>
                        <Grid xs={12}>
                            <PrimarySearchAppBar />
                        </Grid>
                    </Grid>
                </div>
                <div class='middle'>
                    <Card>
                        <CardContent>
                            <Grid>
                                <form noValidate autoComplete="off">
                                    <Grid >
                                        <TextField fullWidth onChange={this.handleChange} id="itemname" variant="outlined" color="white" label="Item name" />
                                    </Grid>
                                    <br />
                                    <Grid >
                                        <TextField fullWidth multiline rows={4} onChange={this.handleChange} id="description" variant="outlined" color="white" label="Description " />
                                    </Grid>
                                    <br />
                                    <Grid container direction="row">
                                        <Grid item xs={6}>
                                            <InputLabel id="label">Category</InputLabel>
                                            <Select style={{ width: "90%" }} onChange={this.SelectChange} labelId="label" id="Hall" value={this.state.Category}>
                                                <MenuItem value="1">Women Fashion</MenuItem>
                                                <MenuItem value="2">Men Fashion</MenuItem>
                                                <MenuItem value="3">Furniture</MenuItem>
                                                <MenuItem value="4">Health Beauty</MenuItem>
                                                <MenuItem value="5">Home Products</MenuItem>
                                                <MenuItem value="6">Food Products</MenuItem>
                                                <MenuItem value="7">Electronics</MenuItem>
                                                <MenuItem value="8">Stationery</MenuItem>
                                            </Select>
                                        </Grid>
                                        <Grid xs={6}>
                                            <input id="picupload" onChange={this.HandlePicture} type="file" accept=".jpeg, .png, .jpg"/>
                                        </Grid>
                                    </Grid>
                                    <br />
                                    <Grid container direction="row" >
                                        <Grid xs={3}>
                                            <Button color="primary" onClick={this.onSubmit} variant="contained">Donate</Button>
                                        </Grid>

                                        <Grid >
                                            <Link className="RemoveHyperlink" to="/home"><Button color="primary" variant="contained">Cancel</Button></Link>
                                        </Grid>
                                    </Grid>
                                </form>
                            </Grid>
                        </CardContent>
                    </Card>
                </div>
            </div>
        )

    }
}
Donate.propTypes = {
    createDonationPost: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    donationpoststatus: state.donation.status
});

export default connect(mapStateToProps, { createDonationPost })(Donate)