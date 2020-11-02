import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { searchDonationPost } from '../../../Redux/Actions/DonationAction'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import ReviewCard from '../DisplayCard/ReviewCard'

class SearchBar extends Component {
    state = {
        searchString: '',
        searchType: 'ItemName',
        sortBy: 'ASC'
    }
    SelectChange = (e) => {
        this.setState({ searchType: e.target.value })
    }
    SelectChange1 = (e) => {
        this.setState({ sortBy: e.target.value })
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    onSubmit = () => {
        const posts = {
            searchType: this.state.searchType,
            searchArg: this.state.searchString,
            searchOrd: this.state.sortBy
        }
        this.props.searchDonationPost(posts)
    }
    componentDidMount() {
        this.onSubmit()
    }
    render() {
        const { search } = this.props
        return (
            <div>
                <Grid container direction="row" justify="space-evenly" spacing={1}>
                    <Grid item md={4}>
                        <TextField id="searchString" className="input-text" style={{ width: "100%" }} onChange={this.handleChange} variant="outlined" color="white" label="Search" />
                    </Grid>
                    <Grid item md={3}>
                        <InputLabel id="label">Search By:</InputLabel>
                        <Select style={{ width: "100%" }} onChange={this.SelectChange} labelId="label" id="Hall" value={this.state.searchType}>
                            <MenuItem value={'Hall'}>Hall</MenuItem>
                            <MenuItem value={'ItemName'}>Item Name</MenuItem>
                        </Select>

                    </Grid>
                    <Grid item md={3}>
                        <InputLabel id="label">Sort By:</InputLabel>
                        <Select style={{ width: "100%" }} onChange={this.SelectChange1} labelId="label" id="Hall" value={this.state.sortBy}>
                            <MenuItem value={'ASC'}>Newest</MenuItem>
                            <MenuItem value={'DESC'}>Oldest</MenuItem>
                        </Select>
                    </Grid>
                    <Grid item md={2}>
                        <Button onClick={this.onSubmit} style={{ width: "100%" }} variant="contained" color="primary">Search</Button>
                    </Grid>
                    <Grid container direction="row" justify="space-around" alignItems="center">
                        {search && search.map(x => {
                            return (<ReviewCard key={x.Postid} post={x} />)
                        })}
                    </Grid>
                </Grid>
            </div>
        )
    }
}
SearchBar.propTypes = {
    searchDonationPost: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    search: state.donation.searchresult
});
export default connect(mapStateToProps, { searchDonationPost })(SearchBar)