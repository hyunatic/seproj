import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import PrimarySearchAppBar from '../AppBar/Appbar';
import './Donate.css'
import { createDonationPost } from '../../Redux/Actions/DonationAction'

class Donate extends Component {
    state = {
        itemname: '',
        description: '',
        picture: '',
    }
    onSubmit = (e) => {
        e.preventDefault();
        const post = {
            itemname: this.state.itemname,
            description: this.state.description,
            picture: this.state.picture,
        }
        this.props.createDonationPost(post);
    }
    componentWillReceiveProps(nextProps){
        //Return
        var status = nextProps.donationpoststatus;
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
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
                                        <TextField fullWidth onchange={this.handleChange} id="itemname" variant="outlined" color="white" label="Item name" />
                                    </Grid>
                                    <br />
                                    <Grid >
                                        <TextField fullWidth multiline rows={4} onchange={this.handleChange} id="desciption" variant="outlined" color="white" label="Description " />
                                    </Grid>
                                    <br />
                                    <Grid container direction="row" >
                                        <Grid xs={6}>
                                            {/* <ImageIcon/> */}
                                            <input type="file" />
                                        </Grid>
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