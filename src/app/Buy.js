import React , {Component, PropTypes } from 'react'
import request from 'superagent'
import { default as Web3 } from 'web3'
import { default as contract } from 'truffle-contract'
import '../www/styles/Dether.scss'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import {browserhistory} from 'react-router'
import { Map, TileLayer, Marker, Popup, PropTypes as MapPropTypes } from 'react-leaflet'


const MyPopupMarker = ({ children, position }) => (
  <Marker position={position}>
    <Popup>
      <span>{children}</span>
    </Popup>
  </Marker>
)
MyPopupMarker.propTypes = {
  children: MapPropTypes.children,
  position: MapPropTypes.latlng,
}

const MyMarkersList = ({ markers }) => {
  const items = markers.map(({ key, ...props }) => (
    <MyPopupMarker key={key} {...props} />
  ))
  return <div style={{display: 'none'}}>{items}</div>
}
MyMarkersList.propTypes = {
  markers: PropTypes.array.isRequired,
}



class Buy extends Component {

  state = {
    latlng: {
      lat: 21.158964,
      lng: -86.845937,
    },
    markerslist: null,
  }

  componentWillMount() {
    // smart contract call to get the list
    const _markers = [
      {key: 'marker1', position: [this.state.latlng.lat - 0.1, this.state.latlng.lng - 0.1], children: 'My first popup'},
      {key: 'marker2', position: [this.state.latlng.lat + 0.1, this.state.latlng.lng + 0.1], children: 'My second popup'},
      {key: 'marker3', position: [this.state.latlng.lat + 0.2, this.state.latlng.lng + 0.2], children: 'My third popup'},
    ]
    let markertab = [];
    for (var i = 0; i < _markers.length ; i++) {
      console.log("marker" , i)
      markertab.push(_markers[i]);
    }
    this.setState({markerlist: markertab});

  }

  componentDidMount() {
    console.log(this.state.markerlist);
  }

  reachOut = () => {
    console.log("We're opening the chat for you")
    window.location.assign('/#/chat')
  }

  render() {

    const markers = [
      {key: 'marker1', position: [this.state.latlng.lat - 0.1, this.state.latlng.lng - 0.1], children: 'My first popup'},
      {key: 'marker2', position: [this.state.latlng.lat + 0.1, this.state.latlng.lng + 0.1], children: 'My second popup'},
      {key: 'marker3', position: [this.state.latlng.lat + 0.2, this.state.latlng.lng + 0.2], children: 'My third popup'},
    ]


    return (
      <div className="container">
        <h1 id="start">DETHER</h1>
        <h1>Select your prefered seller below</h1>

        <div className="map-holder">
          <div id="map">
            <Map
            style={{height: "50vh"}}
                center={this.state.latlng}
            ref='map'
            zoom={10}>
            <TileLayer
              url="https://api.mapbox.com/styles/v1/mehdidether/cj05sgoox00dr2sof9tlf9mu1/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWVoZGlkZXRoZXIiLCJhIjoiY2owNXNmYWhsMDAwdTMybGs4YmdkdjFycSJ9.krEYv2G9ecKLjHI0ckq4aw"
              attribution="<attribution>" />
                      <MyMarkersList markers={markers} />
            </Map>
          </div>
        </div>
        <div>
          <button onClick={this.reachOut}>Put me in touch!</button>
        </div>
      </div>
    )
  }
}

export default Buy
