import React, {Component} from 'react'
import request from 'superagent'
import { default as Web3 } from 'web3'
import { default as contract } from 'truffle-contract'
//import AbieFund from '../../build/contracts/AbieFund.json'

import '../www/styles/Dether.scss'
import Toggle from 'react-toggle'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import {browserhistory} from 'react-router'
import Home from './Home'
import { Map, TileLayer , Marker, Popup } from 'react-leaflet'
const position = [51.0, -0.09]


class Config extends Component {

  constructor(props) {
    super(props)
  }

  state = {
    web3: false,
    account: null,
    balance: null,
    detherBalance: null,
    detherAddress: null,
    buy: true,
    sell: false,
    withdraw: true,
    sellPrice: null,
    hasLocation: false,
    draggable: true,
    latlng: {
      lat: 21.158964,
      lng: -86.845937,
    },
  }

  componentDidMount() {

    setTimeout(() => {
      this.setState({account: window.web3.eth.accounts[0] })

      web3.eth.getBalance(window.web3.eth.accounts[0], (err, res) => {
        if (!err) {
          var walletbalance = web3.fromWei(res, "ether").toNumber() + " ETH"
          this.setState({balance: walletbalance})
        } else {
            console.log(err);
        }
    })

    }, 1000)
  }

  sellerOn = () => {
    const { lat, lng } = this.refs.marker.leafletElement.getLatLng()
    console.log("latlng" , lat,lng)
    console.log(this.state.sellPrice)
    console.log("seller on")

    // call smart contract to register as a seller
    window.isseller = true;
    console.log("config ",window.isseller);
    window.location.assign('/#/home')

  }

  toggleDraggable = () => {
    this.setState({draggable: !this.state.draggable})
  }

  updatePosition = () => {
    const { lat, lng } = this.refs.marker.leafletElement.getLatLng()
    //console.log("latlng" , lat,lng)
    this.setState({
      latlng: {lat, lng},
    })
  }

  handlePriceChange = (e) => {
    this.setState({sellPrice: e.target.value})
  }

  handleClick = () => {
        console.log(this.refs)
    this.refs.map.leafletElement.locate()
  }

  handleLocationFound = (e) => {
    this.setState({
      hasLocation: true,
      latlng: e.latlng,
    })
  }

  render() {
      const marker = this.state.hasLocation ? (
      <Marker position={this.state.latlng}
      draggable={this.state.draggable}
      onDragend={this.updatePosition}
      ref='marker'>
        <Popup>
          <span>You are here</span>
        </Popup>
      </Marker>
    ) : null

    return (
      <div className="container">
        <h1 id="start">DETHER</h1>
        <div>
          <p> Click on the map below to set your Point of sales</p>
          <form className="sellForm">
              <input
                onChange={this.handlePriceChange}
                type="number"
                aria-describedby="emailHelp"
                placeholder="Enter your price">
              </input>
          </form>
        </div>
        <div className="map-holder">
          <Map
            style={{height: "50vh"}}
            center={this.state.latlng}
            onClick={this.handleClick}
            onLocationfound={this.handleLocationFound}
            ref='map'
            zoom={10}>
            <TileLayer
              url="https://api.mapbox.com/styles/v1/mehdidether/cj05sgoox00dr2sof9tlf9mu1/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWVoZGlkZXRoZXIiLCJhIjoiY2owNXNmYWhsMDAwdTMybGs4YmdkdjFycSJ9.krEYv2G9ecKLjHI0ckq4aw"
              attribution="<attribution>" />
            {marker}
          </Map>
        </div>
        <div>
          <button onClick={this.sellerOn}>Register as a seller</button>
        </div>
      </div>
    )
  }
}

export default Config
