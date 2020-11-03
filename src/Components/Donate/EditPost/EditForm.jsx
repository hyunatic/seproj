import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { retrieveUserDonationPost, updateDonationPost } from '../../../Redux/Actions/DonationAction'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Link } from 'react-router-dom'
import Box from '@material-ui/core/Box'
import PrimarySearchAppBar from '../../AppBar/appbar';

class EditForm extends Component {
  state = {
    itemname: '',
    description: '',
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
  UpdatePost(val) {
    const post = {
      Postid: String(val),
      ItemName: this.state.itemname,
      Description: this.state.description,
      PostDate: new Date().getFullYear() + "-" + (new Date().getMonth() + 1) + "-" + new Date().getDate()
    }
    this.props.updateDonationPost(post);
    this.props.history.push('/editpost');
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  render() {
    const { posts } = this.props
    var id = parseInt(this.props.match.params.id)
    var username = localStorage.getItem('username')
    const currentPost = posts.filter(x => x.Postid === id && x.Username === username)
    return (
      <div>
        <div>
          <Grid container>
            <Grid xs={12}>
              <PrimarySearchAppBar />
            </Grid>
          </Grid>
        </div>
        <br></br>
        {currentPost && currentPost.map(x => {
          return (
            <Card key={x.Postid}>
              <CardContent>
                <Grid><h2>Edit Post</h2></Grid>
                <Grid container direction="row" justify="center" alignItems="center">
                  <Grid>
                    <img src={"data:image/jpeg;base64," + x.ImageId} alt="" />
                  </Grid>
                </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column">
                    <form noValidate autoComplete="off">
                      <Grid item xs>
                        <TextField fullWidth id="itemname" variant="outlined" onChange={this.handleChange} color="white" label="Item name" value={this.state.itemname} />
                      </Grid>
                      <br />
                      <Grid item xs>
                        <TextField fullWidth multiline rows={4} id="description" onChange={this.handleChange} variant="outlined" color="white" label="Description" value={this.state.description} />
                      </Grid>
                      <br />
                      <Grid container direction="row">
                        <Grid xs={3}>
                          <Button color="primary" onClick={() => this.UpdatePost(x.Postid)} variant="contained">Update</Button>
                        </Grid>
                        <Grid >
                          <Link className="RemoveHyperlink" to="/editpost"><Button color="primary" variant="contained">Cancel</Button></Link>
                        </Grid>
                      </Grid>
                    </form>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          )
        })}
      </div>
    )
  }
}
EditForm.propTypes = {
  retrieveUserDonationPost: PropTypes.func.isRequired,
  updateDonationPost: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  posts: state.donation.userdonation,
  donationpoststatus: state.donation.status
});

export default connect(mapStateToProps, { retrieveUserDonationPost, updateDonationPost })(EditForm)