import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'

class SearchBar extends Component {
    render() {
        return (
            <div>
                <TextField fullWidth id="username" className="input-text" variant="outlined" color="whiote" label="Search" />
            </div>
        )
    }
}
export default SearchBar