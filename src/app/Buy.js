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
    markerlist: [],
  }

  componentWillMount() {
    // smart contract call to get the list
    /*const _markers = [
      {key: 'marker1', position: [this.state.latlng.lat - 0.1, this.state.latlng.lng - 0.1], children: 'My first popup'},
      {key: 'marker2', position: [this.state.latlng.lat + 0.1, this.state.latlng.lng + 0.1], children: 'My second popup'},
      {key: 'marker3', position: [this.state.latlng.lat + 0.2, this.state.latlng.lng + 0.2], children: 'My third popup'},
    ]
    */
    let markertab = [];

    var untitled1_dethertxContract = web3.eth.contract([{"constant":true,"inputs":[],"name":"getBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"listAdressesUsers","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_username","type":"string"},{"name":"_price","type":"uint256"},{"name":"_localizationGpsX","type":"string"},{"name":"_localizationGpsY","type":"string"},{"name":"_commentIpfsId","type":"uint256"}],"name":"addAccount","outputs":[{"name":"","type":"string"},{"name":"","type":"uint256"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"uint256"}],"payable":true,"type":"function"},{"constant":true,"inputs":[],"name":"getAddressesAccounts","outputs":[{"name":"","type":"address[]"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"receiver","type":"address"},{"name":"amount","type":"uint256"}],"name":"sendCoin","outputs":[{"name":"sufficient","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"users","outputs":[{"name":"username","type":"string"},{"name":"price","type":"uint256"},{"name":"balance","type":"uint256"},{"name":"volumeTrade","type":"uint256"},{"name":"nbTrade","type":"uint256"},{"name":"localizationGpsX","type":"string"},{"name":"localizationGpsY","type":"string"},{"name":"commentIpfsId","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getVolume","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"deposit","outputs":[{"name":"","type":"uint256"}],"payable":true,"type":"function"},{"constant":true,"inputs":[],"name":"getNbTrade","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_user","type":"address"}],"name":"getAccount","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"inputs":[],"payable":false,"type":"constructor"},{"payable":true,"type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"}]);
    var dethertxContract = untitled1_dethertxContract.at("0xee10b1e71131654488e9c0274430c3191aaab728");

    console.log("web 3 contract", dethertxContract)

    dethertxContract.getAddressesAccounts((err, res) => {
      if(!err) {
        console.log("res", res);
        for (var i = 0; i < res.length; i++) {
          console.log(res[i]);
          var addr = res[i];
          dethertxContract.getAccount(res[i],(err,res) => {
            if (!err) {
              console.log(res, "price " ,res[0].toNumber(), "pos ", Number(res[5]));
              markertab.push({key: 'marker' + i, position: [Number(res[4]), Number(res[5])], children: addr + " - price: " + res[0].toNumber() +  "- balance: "+ res[1].toNumber()  +"- volumeTrade: " + res[2].toNumber() + "- nb trade: " + res[3].toNumber()});
              //markertab.push({key:  'marker3', position: [Number(res[4]), Number(res[5])], children: 'My third popup'});

            }
          })
        }
        this.setState({markerlist: markertab});
        console.log("endfor ",this.state.markerlist)
      } else {
        console.log(err);
      }
    })

/*
    for (var i = 0; i < _markers.length ; i++) {
      console.log("marker" , i)
      markertab.push(_markers[i]);
    }*/
  }

  componentDidMount() {
    console.log("did mount ",this.state.markerlist);




  }

  reachOut = () => {
    console.log("We're opening the chat for you")
    window.location.assign('/#/chat')
  }

  render() {

   const markers = this.state.markerlist
/*
    const markers = [
      {key: 'marker1', position: [51.5, -0.1], children: 'My first popup'},
      {key: 'marker2', position: [51.51, -0.1], children: 'My second popup'},
      {key: 'marker3', position: [51.49, -0.05], children: 'My third popup'},
    ]*/

    return (
      <div className="container">
        <img className="logo2" src="https://raw.githubusercontent.com/Fukunaga42/dether/master/src/www/public/logoapp.jpg"></img>

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
