import React, { Component } from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MapComponent = withScriptjs(
  withGoogleMap((props) =>
    <GoogleMap defaultZoom={8} defaultCenter={{ lat: 53.9623241, lng: -1.1169397 }}>
      {props.isMarkerShown && <Marker position={{ lat: 53.9623241, lng: -1.1169397 }} />}
    </GoogleMap>
  ))

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React Google Maps</h1>
        </header>

        <MapComponent
          isMarkerShown
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }
}

export default App;
