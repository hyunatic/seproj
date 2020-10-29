import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { retrieveUserDonationPost, deleteDonationPost } from '../../../Redux/Actions/DonationAction'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Link } from 'react-router-dom'
import Box from '@material-ui/core/Box'

class DeletePost extends Component {
    state = {
        deleteStatus: false
    }
    componentDidMount() {
        this.retrieveDetails();
    }
    retrieveDetails() {
        const post = {
            username: localStorage.getItem('username')
        }
        this.props.retrieveUserDonationPost(post);
    }
    DeletePost(val) {
        const post = {
            Postid: val
        }
        this.setState({deleteStatus: true})
        this.props.deleteDonationPost(post);
    }
    componentDidUpdate(nextProps){
        var status = nextProps.donationpoststatus.Result;
        if(status === 1 && this.state.deleteStatus)
            this.props.history.push('/editpost');
    }
    render() {
        const { posts } = this.props
        var id = parseInt(this.props.match.params.id)
        var username = localStorage.getItem('username')
        const currentPost = posts.filter(x => x.Postid === id && x.Username == username)
        return (
            <div>
                <Box fontWeight='fontWeightMedium' display='inline'>Confirm Delete</Box>
                {currentPost && currentPost.map(x => {
                    return (
                        <Card key={x.Postid}>
                            <CardContent>
                                <Grid>
                                    <form noValidate autoComplete="off">
                                        <Grid >
                                            <TextField fullWidth id="itemname" disabled variant="outlined" color="white" label="Item name" value={x.ItemName} />
                                        </Grid>
                                        <br />
                                        <Grid >
                                            <TextField fullWidth multiline rows={4} disabled id="description" variant="outlined" color="white" label="Description" value={x.Description} />
                                        </Grid>
                                        <br />
                                        <Grid container direction="row">
                                            <Grid item xs={6}>
                                                <TextField fullWidth id="category" variant="outlined" disabled value={x.Category} color="white" label="Category" />
                                            </Grid>
                                            <Grid item xs={2}>
                                            </Grid>
                                            <Grid xs={4}>
                                                <img src={"data:image/jpeg;base64," + x.ImageId} width="200" height="200" alt="" />
                                            </Grid>
                                        </Grid>
                                        <br />
                                        <Grid container direction="row">
                                            <Grid xs={3}>
                                                <Button color="primary" onClick={() => this.DeletePost(x.Postid)} variant="contained">Delete</Button>
                                            </Grid>
                                            <Grid >
                                                <Link className="RemoveHyperlink" to="/editpost"><Button color="primary" variant="contained">Cancel</Button></Link>
                                            </Grid>
                                        </Grid>
                                    </form>
                                </Grid>
                            </CardContent>
                        </Card>
                    )
                })}
            </div>
        )
    }
}
DeletePost.propTypes = {
    retrieveUserDonationPost: PropTypes.func.isRequired,
    deleteDonationPost: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    posts: state.donation.userdonation,
    donationpoststatus: state.donation.status
});

export default connect(mapStateToProps, { retrieveUserDonationPost, deleteDonationPost })(DeletePost)