import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import PrimarySearchAppBar from '../AppBar/appbar'
import data from '../../static/data.json'

class GMap extends Component {
  static defaultProps = {
    center: {
      lat: 1.29,
      lng: 103.851959
    },
    zoom: 13
  };

  render() {
    const AnyReactComponent = ({ text }) => {
      return (
        <div style={{
          color: 'white',
          background: 'grey',
          padding: '15px 10px',
          display: 'inline-flex',
          textAlign: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '100%',
          transform: 'translate(-50%, -50%)'
        }}>
          {text}
        </div>
      )
    };

    return (
      <React.Fragment>
        <PrimarySearchAppBar />
        <div style={{ height: '95vh', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyC7GMn4hAF901P06wEIVJuFs2Zdefq0TCY' }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            {data.map(x =>{
              return(
               <AnyReactComponent lat={x.Y} lng={x.X} text={x.Name}/>
               )} 
              )}

          </GoogleMapReact>
        </div>
      </React.Fragment>
    );
  }
}

export default GMap