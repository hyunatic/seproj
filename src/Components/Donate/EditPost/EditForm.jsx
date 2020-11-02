import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { updateDonationPost } from '../../../Redux/Actions/DonationAction'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { CardContent } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import './Editform.css';
import Typography from '@material-ui/core/Typography';
import { TextFieldsOutlined } from '@material-ui/icons';
class EditForm extends Component {
  state = {
    itemname: '',
    description: '',
    postid: '',
    postdate: ''
  }
  constructor(props){
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
  }
  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
    console.log(this.state)
  }
  componentDidMount(){
    this.setState({
      itemname: this.props.post.ItemName,
      description: this.props.post.Description,
      postid: parseInt(this.props.post.Postid),
      postdate: this.props.post.PostDate
    })
  }
  handleSubmit = (event) => {
    event.preventDefault();
  }
  onSubmit() {
    const post = {
        Postid: parseInt(this.state.postid),
        ItemName: this.state.itemname,
        Description: this.state.description,
        PostDate: new Date().getFullYear() + "-" + (new Date().getMonth() + 1) + "-" + new Date().getDate()
    }
    this.props.updateDonationPost(post)
    window.location.reload();
  }
  render() {
    const { post } = this.props
    return (
      <div>
      <Card>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item>
              <img src={"data:image/jpeg;base64," + post.ImageId} height="200" width="200" alt="" />
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <h2 id="transition-modal-title">Edit</h2>
                </Grid>
                <Grid container direction="row" justify="center" alignItems="center">
                  <p id="transition-modal-description">
                    <Grid item xs={12}>
                      <TextField id="itemname" onChange={this.handleChange} value={this.state.itemname} variant="outlined" color="white" label='Item Name' />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField id="description" onChange={this.handleChange} value={this.state.description} variant="outlined" color="white" label='Description' />
                    </Grid>
                    <Grid item xs={12}>
                      <Button onClick={this.onSubmit} variant="contained" color="primary">Update</Button>
                    </Grid>                  
                  </p>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      </div>
    )
  }
}
EditForm.propTypes = {
  updateDonationPost: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  donationpoststatus: state.donation.status
});
export default connect(mapStateToProps, { updateDonationPost })(EditForm)