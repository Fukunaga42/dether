import React, {Component} from 'react'
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
import { Map, TileLayer , Marker, Popup } from 'react-leaflet'

class Buy extends Component {

  state = {
    latlng: {
      lat: 21.158964,
      lng: -86.845937,
    },
  }

  componentDidMount() {
  }

  reachOut = () => {
    console.log("We're opening the chat for you")
    window.location.assign('/#/chat')
  }

  render() {
    return (
      <div className="container">
        <h1 id="start">DETHER</h1>
        <h2>Here will go the map and user select his selected seller</h2>

        <div className="map-holder">
          <p> Click on the map below to set your Point of sales</p>
          <div id="map">
            <Map
            style={{height: "50vh"}}
                center={this.state.latlng}
            ref='map'
            zoom={10}>
            <TileLayer
              url="https://api.mapbox.com/styles/v1/mehdidether/cj05sgoox00dr2sof9tlf9mu1/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWVoZGlkZXRoZXIiLCJhIjoiY2owNXNmYWhsMDAwdTMybGs4YmdkdjFycSJ9.krEYv2G9ecKLjHI0ckq4aw"
              attribution="<attribution>" />
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
