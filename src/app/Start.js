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


class Start extends Component {
 componentDidMount() {
 }

  state = {
  }

  clickYes = () => {
    window.location.assign('/#/home')
  }

  clickNo = () => {
    window.location.assign('https://localbitcoins.com/fr/')
  }

  render() {
    return (
      <div className="container">
        <img src="https://raw.githubusercontent.com/Fukunaga42/dether/master/src/www/public/logodether.jpg"></img>
        <h1>Are you #dether ?</h1>
        <div>
          <button onClick={this.clickYes}> YES </button>
          <button onClick={this.clickNo}> NO </button>
        </div>
      </div>
    )
  }
}

export default Start
