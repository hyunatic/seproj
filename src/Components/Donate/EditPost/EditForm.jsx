import React, { Component } from 'react'
import TextField from'@material-ui/core/TextField';

export default class EditForm extends Component {
    constructor(props) {
        super();
        this.state = {itemname: '' , description: ''};
      }
    
      handleChange(event) {
        this.setState({[event.target.id]: event.target.value});
      }
    
      handleSubmit(event) {
        event.preventDefault();
      }
    render() {
        console.log(this.props)
        const{post} = this.props
        this.setState({
            itemname: post.ItemName,
            description: post.Description
        })
        return (
            <div key={post.Postid}>
                <h2 id="transition-modal-title">Edit</h2>
                <p id="transition-modal-description">
                    <img src={"data:image/jpeg;base64," + post.ImageId } alt=""/>
                    <TextField id="itemname" onchange = {this.handleChange()} value={this.state.itemname} variant="outlined" color="white" label='Item Name' />
                    Posted by: {post.Username}
                </p>
            </div>
        )
    }
}
