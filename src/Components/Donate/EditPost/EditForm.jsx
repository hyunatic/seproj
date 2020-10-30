import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { updateDonationPost } from '../../../Redux/Actions/DonationAction'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class EditForm extends Component {
  state = {
    itemname: '',
    description: '',
    postid: '',
    postdate: ''
  }
  constructor(props){
    console.log(props)
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
  }
  componentDidUpdate(nextProps){
    var status = nextProps.donationpoststatus.Result;
        if(status === 1)
          window.location.reload();
            
  }
  render() {
    const { post } = this.props
    return (
      <div>
        <h2 id="transition-modal-title">Edit</h2>
        <p id="transition-modal-description">
          <img src={"data:image/jpeg;base64," + post.ImageId} height="200" width="200" alt="" />
          <TextField id="itemname" onChange={this.handleChange} value={this.state.itemname} variant="outlined" color="white" label='Item Name' />
          <TextField id="description" onChange={this.handleChange} value={this.state.description} variant="outlined" color="white" label='Description' />
          <Button onClick={this.onSubmit} variant="contained" color="primary">Update</Button>

        </p>
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