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


class Withdraw extends Component {

  state = {
    withdraw: 0,
  }

  componentDidMount() {

  }

  handleWithdrawChange = (e) => {
    this.setState({withdraw: e.target.value})
  }

  // deposit = () => {
  //   console.log(this.state.deposit);
  //   var untitled1_dethertxContract = web3.eth.contract([{"constant":true,"inputs":[],"name":"getBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"listAdressesUsers","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_username","type":"string"},{"name":"_price","type":"uint256"},{"name":"_localizationGpsX","type":"string"},{"name":"_localizationGpsY","type":"string"},{"name":"_commentIpfsId","type":"uint256"}],"name":"addAccount","outputs":[{"name":"","type":"string"},{"name":"","type":"uint256"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"uint256"}],"payable":true,"type":"function"},{"constant":true,"inputs":[],"name":"getAddressesAccounts","outputs":[{"name":"","type":"address[]"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"receiver","type":"address"},{"name":"amount","type":"uint256"}],"name":"sendCoin","outputs":[{"name":"sufficient","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"users","outputs":[{"name":"username","type":"string"},{"name":"price","type":"uint256"},{"name":"balance","type":"uint256"},{"name":"volumeTrade","type":"uint256"},{"name":"nbTrade","type":"uint256"},{"name":"localizationGpsX","type":"string"},{"name":"localizationGpsY","type":"string"},{"name":"commentIpfsId","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getVolume","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"deposit","outputs":[{"name":"","type":"uint256"}],"payable":true,"type":"function"},{"constant":true,"inputs":[],"name":"getNbTrade","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_user","type":"address"}],"name":"getAccount","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"inputs":[],"payable":false,"type":"constructor"},{"payable":true,"type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"}])
  //   var dethertxContract = untitled1_dethertxContract.at("0x77f9c4fb9e1b383c769856ca1ebdd4730ee34829");

  //   dethertxContract.deposit({value: web3.toWei(this.state.deposit, "ether")}, (err, res) => {
  //     if(!err) console.log("DEPOSIT SENT");
  //     dethertxContract.getAccount(window.web3.eth.accounts[0], (err, res) => {
  //       if(!err) console.log('got account', res[1].toNumber());

  //       window.detherB = this.state.deposit;
  //       window.location.assign('/#/home')
  //     })
  //   })
  // }

  getWithdraw = () => {
    var untitled1_dethertxContract = web3.eth.contract([{"constant":true,"inputs":[],"name":"getBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"listAdressesUsers","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_username","type":"string"},{"name":"_price","type":"uint256"},{"name":"_localizationGpsX","type":"string"},{"name":"_localizationGpsY","type":"string"},{"name":"_commentIpfsId","type":"uint256"}],"name":"addAccount","outputs":[{"name":"","type":"string"},{"name":"","type":"uint256"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"uint256"}],"payable":true,"type":"function"},{"constant":true,"inputs":[],"name":"getAddressesAccounts","outputs":[{"name":"","type":"address[]"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"receiver","type":"address"},{"name":"amount","type":"uint256"}],"name":"sendCoin","outputs":[{"name":"sufficient","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"users","outputs":[{"name":"username","type":"string"},{"name":"price","type":"uint256"},{"name":"balance","type":"uint256"},{"name":"volumeTrade","type":"uint256"},{"name":"nbTrade","type":"uint256"},{"name":"localizationGpsX","type":"string"},{"name":"localizationGpsY","type":"string"},{"name":"commentIpfsId","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getVolume","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"deposit","outputs":[{"name":"","type":"uint256"}],"payable":true,"type":"function"},{"constant":true,"inputs":[],"name":"getNbTrade","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_user","type":"address"}],"name":"getAccount","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"inputs":[],"payable":false,"type":"constructor"},{"payable":true,"type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"}])
    var dethertxContract = untitled1_dethertxContract.at("0x77f9c4fb9e1b383c769856ca1ebdd4730ee34829");

    dethertxContract.withdraw(web3.toWei(this.state.withdraw, "ether"), (err, res) => {
      if(!err) {
        console.log("You withdrew!")
        window.detherB -= this.state.withdraw
        window.location.assign('/#/home')
      } else {
        console.log(err);
      }
    })
  }

  render() {
    return (
      <div className="container">

        <img className="logo2" src="https://raw.githubusercontent.com/Fukunaga42/dether/master/src/www/public/logoapp.jpg"></img>

        <div>
        <p> Here is your the balance available for withdrawal : </p>
        <p> {window.detherB} </p>
          <form id="sellForm">
            <div id="inputdiv">
              <input onChange={this.handleWithdrawChange} type="number" aria-describedby="emailHelp" placeholder="Enter your withdrawal amount"></input>
            </div>
          </form>
        </div>
        <div>
          <button onClick={this.getWithdraw}>Withdraw from dether balance to my metamask wallet</button>
        </div>
      </div>
    )
  }
}

export default Withdraw