import React, { Component } from 'react'
import TextField from'@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default class EditForm extends Component {
    constructor(props) {
        super();
      }
      state = {
          itemname: '',
          description: ''
      }
      handleChange(event) {
        this.setState({[event.target.id]: event.target.value});
      }
      handleSubmit(event) {
        event.preventDefault();
      }
      onSubmit(){
        //Waiting for Yi chen....
        const post = {

        }
      }
    render() {
        const{ post } = this.props

        return (
            <div>
                <h2 id="transition-modal-title">Edit</h2>
                <p id="transition-modal-description">
                    <img src={"data:image/jpeg;base64," + post.ImageId } height="200" width="200" alt=""/>
                    <TextField id="itemname" onchange={this.handleChange} value={post.ItemName} variant="outlined" color="white" label='Item Name' />
                    <TextField id="description" onchange={this.handleChange} value={post.Description} variant="outlined" color="white" label='Description' />
                    <Button onClick={this.onSubmit} variant="contained" color="primary">Update</Button>

                </p>
            </div>
        )
    }
}
