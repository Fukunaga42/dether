import React, {Component} from 'react'
import request from 'superagent'
import { default as Web3 } from 'web3'
import { default as contract } from 'truffle-contract'
//import AbieFund from '../../build/contracts/AbieFund.json'

import '../www/styles/Dether.scss'
import Toggle from 'react-toggle'
import Start from './Start'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import {browserhistory} from 'react-router'


class Home extends Start {

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
    withdraw: true
  }

  componentWillMount() {
    if (!window.isseller)
      window.isseller = false;

    if (window.isseller == true){
      this.setState({sell: true});
    }
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
    window.location.assign('/#/sellerconfig')
  }

  goBuy = () => {
    window.location.assign('/#/buy')
  }

  goSell = () => {
    window.location.assign('/#/sell')
  }

  render() {
    return (
      <div className="container">
        <h1 id="start">DETHER</h1>

        <p id="userinfo">Your wallet address : </p>
        <p>{this.state.account}</p>
        <p id="userinfo">Your wallet balance : </p>
        <p>{this.state.balance}</p>
        <button id="buy" onClick={this.goBuy}> Buy </button>
        <label>
          <Toggle
            defaultChecked={this.state.sell}
            onChange={this.goTeller} />
          <span><button disabled={!this.state.sell} onClick={this.goSell}> Sell </button></span>
        </label>
        <button> Withdraw </button>
      </div>
    )
  }
}

export default Home
