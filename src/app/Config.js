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
      lat: 48.864716,
      lng: 2.349014,
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

    const latstring = lat.toString();
    const lngstring = lng.toString();
    console.log("conversion", latstring)

    
    var untitled1_dethertxContract = web3.eth.contract([{"constant":true,"inputs":[],"name":"getBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"listAdressesUsers","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_username","type":"string"},{"name":"_price","type":"uint256"},{"name":"_localizationGpsX","type":"string"},{"name":"_localizationGpsY","type":"string"},{"name":"_commentIpfsId","type":"uint256"}],"name":"addAccount","outputs":[{"name":"","type":"string"},{"name":"","type":"uint256"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getAddressesAccounts","outputs":[{"name":"","type":"address[]"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"receiver","type":"address"},{"name":"amount","type":"uint256"}],"name":"sendCoin","outputs":[{"name":"sufficient","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"users","outputs":[{"name":"username","type":"string"},{"name":"price","type":"uint256"},{"name":"balance","type":"uint256"},{"name":"volumeTrade","type":"uint256"},{"name":"nbTrade","type":"uint256"},{"name":"localizationGpsX","type":"string"},{"name":"localizationGpsY","type":"string"},{"name":"commentIpfsId","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getVolume","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"deposit","outputs":[{"name":"","type":"uint256"}],"payable":true,"type":"function"},{"constant":true,"inputs":[],"name":"getNbTrade","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_user","type":"address"}],"name":"getAccount","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"inputs":[],"payable":false,"type":"constructor"},{"payable":true,"type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"}]);    
    var dethertxContract = untitled1_dethertxContract.at("0x0218706bbd9238fa1837ee8e86d0db461f2de22f");

    console.log("web 3 contract", dethertxContract)

    dethertxContract.addAccount("", this.state.sellPrice, latstring, lngstring, 0, function(err, res) {
      if(!err) {
        console.log("Sent");
        window.isseller = true;
        console.log("config ",window.isseller);
        window.location.assign('/#/home')
      } else {
        console.log(err);
      }
    })
    // call smart contract to register as a seller

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

/*  handleClick = () => {
        console.log(this.refs)
    this.refs.map.leafletElement.locate()
  }*/

  handleLocationFound = (e) => {
    this.setState({
      hasLocation: true,
      latlng: e.latlng,
    })
  }

  render() {
      const marker = true ? (
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

        <img className="logo2" src="https://raw.githubusercontent.com/Fukunaga42/dether/master/src/www/public/logoapp.jpg"></img>

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
