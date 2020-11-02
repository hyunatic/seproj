import React, { Component } from 'react'

class Refresher extends Component {
    componentDidMount(){
        var id = this.props.match.params.id
        this.props.history.push('/'+ id);
    }
    render() {
        return (
            <div>
            </div>
        )
    }
}
export default Refresher