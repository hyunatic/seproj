import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import PrimarySearchAppBar from '../AppBar/Appbar';
import ImageIcon from '@material-ui/icons/Image';
import './Donate.css'

export default class donate extends Component {
    state ={
        itemname: '',
        description: '',
        quality:'',
    }
    onSubmit = () => {
        alert('test')
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    render()
    {
        return(
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
                                    <TextField  fullWidth onchange={this.handleChange} id ="itemname" variant="outlined" color="white" label="Item name" />
                                </Grid>
                                <br/>
                                <Grid >
                                    <TextField  fullWidth multiline rows={4} onchange={this.handleChange} id ="desciption" variant="outlined" color="white" label="Description " />
                                </Grid>
                                <br/>
                                <Grid container direction="row" >
                                    <Grid xs={6}>
                                    {/* <ImageIcon/> */}
                                        <input type="file"/>
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