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


class Home extends Component {

  state = {
    web3: false,
    account: null,
    balance: null,
    detherBalance: null,
    detherAddress: null,
    buy: true,
    sell: false,
    withdraw: true
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

  goTeller = () => {
    console.log("Hello")

    window.location.assign('/#/sellerconfig')
    //browserhistory.push('/sellerconfig')
  }

  goBuy = () => {
    console.log("Bringing you to the buy side!")

    window.location.assign('/#/buy')
  }

  goSell = () => {
    console.log("Bringing you to the sell side!")

    window.location.assign('/#/sell')
  }


  render() {
    return (
      <div id="container">
        <h1 id="start">DETHER</h1>
        <br></br>
        <br></br>
        <br></br>
        <p id="userinfo">Your wallet address : </p>
        <p>{this.state.account}</p>
        <br></br>
        <p id="userinfo">Your wallet balance : </p>
        <p>{this.state.balance}</p>
        <br></br>
        <br></br>
        <button id="buy" onClick={this.goBuy}> Buy </button>
        <br></br>

        <label>
        <Toggle
            defaultChecked={this.state.sell}
            onChange={this.goTeller} />
          <span><button onClick={this.goSell}> Sell </button></span>
        </label>

        
        <br></br>
        <button> Withdraw </button>
      </div>
    )
  }
}

export default Home