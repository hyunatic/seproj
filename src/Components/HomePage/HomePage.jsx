import React, { Component } from 'react'
import Category from './Category/Category'
import SearchBar from './SearchBar/SearchBar'

class HomePage extends Component {
    render() {
        return (
            <div>
                <SearchBar />
                <Category />
            </div>
        )
    }
}
export default HomePage