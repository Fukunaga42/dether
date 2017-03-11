import React, {Component} from 'react'
import request from 'superagent'
import { default as Web3 } from 'web3'
import { default as contract } from 'truffle-contract'

import '../www/styles/Home.scss'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import {browserhistory} from 'react-router'


class Home extends Component {

  state = {
  }

  clickYes = () => {
  console.log("Bringing you to Home Component baby!")
  window.location.assign('/#/home')
  }

  render() {
    return (
      <div id="container">
        <br></br>
        <br></br>
        <br></br>
        <h1 id="start">DETHER</h1>
        <br></br>
        <br></br>
        <br></br>
        <h1>Are you #dether ?</h1>
        <span>
        <button onClick={this.clickYes}> YES </button>
        <button> NO </button>
        </span>
        <br></br>
      </div>
    )
  }
}

export default Home