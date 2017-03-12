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


class Buy extends Component {

  state = {
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
        <h2>Here will go the map and user select his selected seller</h1>
        <button onClick={this.reachOut}>Put me in touch!</button>
      </div>
    )
  }
}

export default Buy
