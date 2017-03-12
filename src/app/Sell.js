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


class Sell extends Component {

  state = {
    qty: null,
    address: ""
  }

  componentDidMount() {

  }

  goHome  = () => {
    console.log("We're bringing you home")
    window.location.assign('/#/home')
  }

  verifyFunction = () => {
    alert("Are these informations correct ? \n Quantity to sell: " + this.state.qty +"\n Address of buyer: "+ this.state.address)
  }

  handleQtyChange = (e) => {
    this.setState({qty: e.target.value})
  }

  handleAddressChange = (e) => {
    this.setState({address: e.target.value})
  }

  sendToContract = () => {
    var untitled1_dethertxContract = web3.eth.contract([{"constant":true,"inputs":[],"name":"getBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"listAdressesUsers","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_username","type":"string"},{"name":"_price","type":"uint256"},{"name":"_localizationGpsX","type":"string"},{"name":"_localizationGpsY","type":"string"},{"name":"_commentIpfsId","type":"uint256"}],"name":"addAccount","outputs":[{"name":"","type":"string"},{"name":"","type":"uint256"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"uint256"}],"payable":true,"type":"function"},{"constant":true,"inputs":[],"name":"getAddressesAccounts","outputs":[{"name":"","type":"address[]"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"receiver","type":"address"},{"name":"amount","type":"uint256"}],"name":"sendCoin","outputs":[{"name":"sufficient","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"users","outputs":[{"name":"username","type":"string"},{"name":"price","type":"uint256"},{"name":"balance","type":"uint256"},{"name":"volumeTrade","type":"uint256"},{"name":"nbTrade","type":"uint256"},{"name":"localizationGpsX","type":"string"},{"name":"localizationGpsY","type":"string"},{"name":"commentIpfsId","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getVolume","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"deposit","outputs":[{"name":"","type":"uint256"}],"payable":true,"type":"function"},{"constant":true,"inputs":[],"name":"getNbTrade","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_user","type":"address"}],"name":"getAccount","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"inputs":[],"payable":false,"type":"constructor"},{"payable":true,"type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"}])
    var dethertxContract = untitled1_dethertxContract.at("0x77f9c4fb9e1b383c769856ca1ebdd4730ee34829");

    dethertxContract.sendCoin(this.state.address, web3.toWei(this.state.qty, "ether"), (err, res) => {
      if(!err) {
        console.log("Got here");
        window.detherB = window.detherB - this.state.qty;
        window.location.assign('/#/home')
      } else {
        console.log(err);
      }
    } )

  }


  render() {
    return (
      <div className="container">

        <img className="logo2" src="https://raw.githubusercontent.com/Fukunaga42/dether/master/src/www/public/logoapp.jpg"></img>

        <div>
          <form id="sellForm">
            <div id="inputdiv">
              <input onChange={this.handleQtyChange} type="number" aria-describedby="emailHelp" placeholder="Enter the amount you are selling in €"></input>
            </div>
            <div id="inputdiv">
              <input onChange={this.handleAddressChange} type="text" aria-describedby="emailHelp" placeholder="Enter the address of your buyer"></input>
            </div>
          </form>
        </div>
        <div>
          <button onClick={this.sendToContract}>Validez les informations</button>
        </div>
      </div>
    )
  }
}

export default Sell
